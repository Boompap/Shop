"use client";

import { useEffect } from "react";

export default function HeaderScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    const topThreshold = 32;

    const updateHeaderState = () => {
      const awayFromTop = window.scrollY > topThreshold;

      root.toggleAttribute("data-scrolled", awayFromTop);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      root.removeAttribute("data-scrolled");
    };
  }, []);

  return null;
}
