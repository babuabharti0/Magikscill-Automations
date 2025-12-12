// components/CursorTextTint.tsx
import React, { useEffect, useRef } from "react";

/**
 * CursorTextTint
 * - Adds .cursor-text-tint to the nearest readable element under the pointer
 * - Updates CSS vars --tx and --ty on that element so its ::after radial tint follows the pointer inside the element
 * - Uses requestAnimationFrame for smooth/efficient updates
 * - Disables on touch devices and when prefers-reduced-motion is set
 */

const READABLE_SELECTOR = "h1,h2,h3,h4,h5,h6,p,span,li,a,button,label,strong,em,small";

function isTouchOrNoHover() {
  if (typeof window === "undefined") return true;
  return window.matchMedia && window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

export default function CursorTextTint(): React.ReactElement | null {
  const activeRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion and touch devices
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    if (isTouchOrNoHover()) return;

    const setVarsOnElement = (el: HTMLElement, clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      // compute position relative to element as percentages
      const relX = Math.max(0, Math.min(1, (clientX - rect.left) / (rect.width || 1)));
      const relY = Math.max(0, Math.min(1, (clientY - rect.top) / (rect.height || 1)));
      el.style.setProperty("--tx", `${(relX * 100).toFixed(2)}%`);
      el.style.setProperty("--ty", `${(relY * 100).toFixed(2)}%`);
    };

    const removeActive = () => {
      const prev = activeRef.current;
      if (prev) {
        prev.classList.remove("cursor-text-tint");
        prev.style.removeProperty("--tx");
        prev.style.removeProperty("--ty");
      }
      activeRef.current = null;
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

      // find the nearest readable ancestor (including the element itself)
      const el = top.closest(READABLE_SELECTOR) as HTMLElement | null;
      if (!el) {
        removeActive();
        return;
      }

      if (activeRef.current !== el) {
        // swap active element
        removeActive();
        activeRef.current = el;
        // ensure the element is positioned so ::after absolute works
        const computed = getComputedStyle(el);
        if (computed.position === "static") {
          // only set a harmless relative positioning if necessary
          el.style.position = "relative";
        }
        el.classList.add("cursor-text-tint");
      }

      // update tint position inside the active element
      if (activeRef.current) {
        setVarsOnElement(activeRef.current, x, y);
      }
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

  return null;
}