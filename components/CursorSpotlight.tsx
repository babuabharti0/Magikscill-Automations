// components/CursorSpotlight.tsx
import React, { useEffect, useRef } from "react";

/**
 * CursorSpotlight - lightweight overlay that follows the pointer and updates CSS variables.
 * - Updates --spot-x and --spot-y using client coordinates converted to percentages.
 * - Disabled on touch devices and when prefers-reduced-motion is active.
 * - Non-interfering: pointer-events: none.
 */

const supportsTouch = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(hover: none)").matches;
};

export default function CursorSpotlight(): React.ReactElement | null {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion preference
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Disable on touch/coarse pointer devices
    if (supportsTouch()) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    // Helper to set CSS variables based on pointer event
    const moveHandler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      // convert to percentages relative to viewport
      const pctX = (x / window.innerWidth) * 100;
      const pctY = (y / window.innerHeight) * 100;
      overlay.style.setProperty("--spot-x", `${pctX}%`);
      overlay.style.setProperty("--spot-y", `${pctY}%`);
      // ensure overlay visible
      overlay.style.opacity = "1";
    };

    // When leaving window, fade out spotlight slightly
    const leaveHandler = () => {
      overlay.style.opacity = "0";
    };

    // On enter, restore opacity quickly
    const enterHandler = () => {
      overlay.style.opacity = getComputedStyle(document.documentElement).getPropertyValue("--spot-opacity") || "0.95";
    };

    // Attach listeners
    window.addEventListener("mousemove", moveHandler, { passive: true });
    window.addEventListener("mouseleave", leaveHandler);
    window.addEventListener("mouseenter", enterHandler);

    // Initialize position to center to avoid sudden flash
    overlay.style.setProperty("--spot-x", "50%");
    overlay.style.setProperty("--spot-y", "50%");
    overlay.style.opacity = "0";

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseleave", leaveHandler);
      window.removeEventListener("mouseenter", enterHandler);
    };
  }, []);

  // Render overlay element
  return <div ref={overlayRef} className="cursor-spotlight-overlay" aria-hidden="true" />;
}