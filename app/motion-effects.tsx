"use client";

import { useEffect } from "react";

/** Progressive enhancement: all content stays visible without JavaScript. */
export default function MotionEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};

    function setup() {
      cleanup();
      if (preference.matches) return;

      const elements = document.querySelectorAll<HTMLElement>(
        ".about > div, .section-heading, .experience-row, .publication-card, .skill-card, .education, .contact > *",
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("reveal-pending");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -32px 0px" },
      );
      elements.forEach((element) => {
        element.classList.add("reveal-item");
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add("reveal-pending");
          observer.observe(element);
        }
      });

      // Keyboard navigation must never land on visually hidden content.
      const revealFocused = (event: FocusEvent) => {
        if (event.target instanceof Element) {
          event.target
            .closest(".reveal-pending")
            ?.classList.remove("reveal-pending");
        }
      };
      document.addEventListener("focusin", revealFocused);

      const art = document.querySelector<HTMLElement>(".vision-art");
      let frame = 0;
      const moveLens = (event: PointerEvent) => {
        if (!art || event.pointerType !== "mouse") return;
        const box = art.getBoundingClientRect();
        const x = ((event.clientX - box.left) / box.width - 0.5) * 14;
        const y = ((event.clientY - box.top) / box.height - 0.5) * 14;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          art.style.setProperty("--lens-x", `${x}px`);
          art.style.setProperty("--lens-y", `${y}px`);
        });
      };
      const resetLens = () => {
        cancelAnimationFrame(frame);
        art?.style.removeProperty("--lens-x");
        art?.style.removeProperty("--lens-y");
      };
      art?.addEventListener("pointermove", moveLens);
      art?.addEventListener("pointerleave", resetLens);
      cleanup = () => {
        observer.disconnect();
        elements.forEach((element) =>
          element.classList.remove("reveal-item", "reveal-pending"),
        );
        document.removeEventListener("focusin", revealFocused);
        art?.removeEventListener("pointermove", moveLens);
        art?.removeEventListener("pointerleave", resetLens);
        resetLens();
      };
    }

    setup();
    preference.addEventListener("change", setup);
    return () => {
      cleanup();
      preference.removeEventListener("change", setup);
    };
  }, []);

  return null;
}
