"use client";

import { useEffect, useState, useRef } from "react";

export function useDocsScrollSpy(sectionIds: string[], initialId: string = "quickstart") {
  const [activeSection, setActiveSection] = useState<string>(initialId);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      // If scrolled near the bottom of the page on long pages, activate the last section
      const hasScrollablePage =
        document.documentElement.scrollHeight > window.innerHeight && window.scrollY > 100;
      const isBottom =
        hasScrollablePage &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the topmost section currently in view (accounting for header height)
      const headerOffset = 100;
      let currentSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          currentSection = id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sectionIds]);

  const scrollToSection = (id: string) => {
    isProgrammaticScroll.current = true;
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Release programmatic lock after smooth scroll animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
  };

  return {
    activeSection,
    scrollToSection,
  };
}
