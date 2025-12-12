// components/CursorTextSpotlight.tsx
import React, { useEffect, useRef } from "react";

/**
 * CursorTextSpotlight
 * - Applies a per-element radial text highlight by toggling a class and updating CSS variables on the element under the pointer.
 * - Lightweight and respects reduced-motion and touch devices.
 */

const READABLE_SELECTOR = "h1,h2,h3,h4,h5,h6,p,span,li,a,button,label,strong,em,small";

function isTouchOrNoHover() {
  if (typeof window === "undefined") return true;
  return window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

export default function CursorTextSpotlight(): React.ReactElement | null {
  const activeElRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion & touch devices — disable effect entirely
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    if (isTouchOrNoHover()) return;

    // Helper: update the element with CSS variables and class
    const applyToElement = (el: HTMLElement, x: number, y: number) => {
      const rect = el.getBoundingClientRect();
      const relX = Math.max(0, Math.min(1, (x - rect.left) / (rect.width || 1)));
      const relY = Math.max(0, Math.min(1, (y - rect.top) / (rect.height || 1)));
      // set CSS vars as percentages
      el.style.setProperty("--cx", `${(relX * 100).toFixed(2)}%`);
      el.style.setProperty("--cy", `${(relY * 100).toFixed(2)}%`);
      // ensure class present
      if (!el.classList.contains("cursor-text-highlight")) el.classList.add("cursor-text-highlight");
    };

    const removeActive = () => {
      const prev = activeElRef.current;
      if (prev) {
        prev.classList.remove("cursor-text-highlight");
        // cleanup inline vars
        prev.style.removeProperty("--cx");
        prev.style.removeProperty("--cy");
      }
      activeElRef.current = null;
    };

    const processPointer = () => {
      rafRef.current = null;
      const p = pending.current;
      if (!p) return;
      pending.current = null;

      const { x, y } = p;
      const top = document.elementFromPoint(x, y) as HTMLElement | null;
      if (!top) {
        removeActive();
        return;
      }
      // Find nearest ancestor that matches readable selector (including the top itself)
      const el = top.closest(READABLE_SELECTOR) as HTMLElement | null;
      if (!el) {
        removeActive();
        return;
      }
      if (activeElRef.current !== el) {
        // swap
        removeActive();
        activeElRef.current = el;
      }
      // apply vars to current element
      applyToElement(el, x, y);
    };

    const onPointerMove = (e: PointerEvent) => {
      // store and schedule rAF to avoid high-frequency work
      pending.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(processPointer);
      }
    };

    const onPointerLeave = () => {
      pending.current = null;
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      removeActive();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      removeActive();
    };
  }, []);

  // Non-visual component (no DOM nodes required)
  return null;
}