// components/ScrollSmoother.tsx
import React, { useEffect } from "react";

export default function ScrollSmoother(): React.ReactElement | null {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Respect reduced motion preference
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let smoother: any = null;
    let ScrollTrigger: any = null;
    let mounted = true;

    const init = async () => {
      try {
        // Dynamic imports to handle optional dependency
        const gsapModule = await import("gsap");
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        
        const ScrollTriggerModule = await import("gsap/ScrollTrigger");
        ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default || ScrollTriggerModule;
        
        const ScrollSmootherModule = await import("gsap/ScrollSmoother");
        const ScrollSmootherPlugin = ScrollSmootherModule.ScrollSmoother || ScrollSmootherModule.default || ScrollSmootherModule;

        gsap.registerPlugin(ScrollTrigger, ScrollSmootherPlugin);

        // Initialize smoother with a slight delay to ensure DOM is ready and prevent render blocking
        const doCreate = () => {
          if (!mounted) return;
          try {
            // Check if wrapper and content exist
            if (document.querySelector(".smoother-wrapper") && document.querySelector(".smoother-content")) {
              smoother = (gsap as any).ScrollSmoother.create({
                wrapper: ".smoother-wrapper",
                content: ".smoother-content",
                smooth: 1.05,
                effects: true,
                normalizeScroll: true,
              });
            }
          } catch (err) {
            console.warn("ScrollSmoother init failed:", err);
          }
        };

        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(doCreate, { timeout: 1000 });
        } else {
          setTimeout(doCreate, 250);
        }
      } catch (err) {
        // Fallback or silence if GSAP is not installed
        // console.warn("GSAP libraries not found, using native scroll.", err);
      }
    };

    init();

    return () => {
      mounted = false;
      try {
        if (smoother && typeof smoother.kill === "function") smoother.kill();
        if (ScrollTrigger && typeof ScrollTrigger.kill === "function") ScrollTrigger.kill();
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return null;
}
