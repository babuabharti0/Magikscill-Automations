// components/PointerTextHighlight.tsx
import React, { useEffect, useRef } from "react";

/**
 * PointerTextHighlight
 * - Lightweight: toggles a helper class on the single element directly under the pointer.
 * - Non-destructive: stores and restores the element's previous inline color if present.
 * - Respects prefers-reduced-motion and disables on touch devices.
 */

const READABLE_SELECTOR = "h1,h2,h3,h4,h5,h6,p,span,li,a,button,label,strong,em,small";

function isTouchOrNoHover() {
  if (typeof window === "undefined") return true;
  return window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

export default function PointerTextHighlight(): React.ReactElement | null {
  const activeRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion & touch devices
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    if (isTouchOrNoHover()) return;

    const addHighlight = (el: HTMLElement) => {
      if (!el) return;
      // store previous inline color if any
      if (!el.dataset.__prevColor) {
        const prev = el.style.color || "";
        el.dataset.__prevColor = prev;
      }
      el.classList.add("cursor-pointer-highlight");
    };

    const removeHighlight = (el: HTMLElement | null) => {
      if (!el) return;
      el.classList.remove("cursor-pointer-highlight");
      if (el.dataset && typeof el.dataset.__prevColor !== "undefined") {
        const prev = el.dataset.__prevColor;
        if (prev) el.style.color = prev;
        else el.style.removeProperty("color");
        delete el.dataset.__prevColor;
      }
    };

    const processPointer = () => {
      rafRef.current = null;
      const p = pending.current;
      if (!p) return;
      pending.current = null;

      const top = document.elementFromPoint(p.x, p.y) as HTMLElement | null;
      if (!top) {
        if (activeRef.current) {
          removeHighlight(activeRef.current);
          activeRef.current = null;
        }
        return;
      }
      const el = top.closest(READABLE_SELECTOR) as HTMLElement | null;
      if (!el) {
        if (activeRef.current) {
          removeHighlight(activeRef.current);
          activeRef.current = null;
        }
        return;
      }
      if (activeRef.current !== el) {
        if (activeRef.current) removeHighlight(activeRef.current);
        activeRef.current = el;
        addHighlight(el);
      }
      // nothing else needed — CSS transition handles visual smoothness
    };

    const onPointerMove = (e: PointerEvent) => {
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
      if (activeRef.current) {
        removeHighlight(activeRef.current);
        activeRef.current = null;
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (activeRef.current) removeHighlight(activeRef.current);
    };
  }, []);

  return null;
}