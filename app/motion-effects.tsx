"use client";

import { useEffect } from "react";

/** Entrances establish section hierarchy; content is always visible without JS. */
export default function MotionEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const stop = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const setup = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          const animation = entry.target.animate(
            [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 700, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08 });
      document.querySelectorAll("[data-reveal]").forEach(element => observer?.observe(element));
    };
    // Focused content must never be obscured by an entrance animation.
    const revealFocused = () => {
      animations.forEach(animation => animation.finish());
      animations.clear();
    };
    setup();
    document.addEventListener("focusin", revealFocused);
    preference.addEventListener("change", setup);
    return () => {
      stop();
      document.removeEventListener("focusin", revealFocused);
      preference.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
