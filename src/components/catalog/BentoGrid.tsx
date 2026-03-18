"use client";

import { useRef, useEffect, useLayoutEffect, useCallback, useState } from "react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";

const GRID_COLS = 3;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tickingRef = useRef(false);
  const maxFlyRef = useRef(0);
  const mobileRef = useRef(false);
  const [taglineVisible, setTaglineVisible] = useState<boolean[]>(
    PRODUCTS.map(() => false)
  );

  const applyTransforms = useCallback((progress: number) => {
    const eased = easeOutCubic(progress);
    const mobile = mobileRef.current;
    const maxFly = maxFlyRef.current;

    PRODUCTS.forEach((product, i) => {
      const wrapper = wrapperRefs.current[i];
      if (!wrapper) return;

      const [fx, fy] = mobile ? [0, 1] : product.flyFrom;
      const distance = maxFly * 0.4;
      const tx = fx * distance * (1 - eased);
      const ty = fy * distance * (1 - eased);
      wrapper.style.transform = `translate(${tx}px, ${ty}px)`;

      const fadeProgress = Math.min(1, Math.max(0, (eased - 0.05) / 0.6));
      wrapper.style.opacity = String(fadeProgress);
    });

    // Taglines appear after progress > 0.7, staggered
    const newTaglines = PRODUCTS.map((_, i) => eased > 0.7 + i * 0.03);
    setTaglineVisible(newTaglines);
  }, []);

  useLayoutEffect(() => {
    mobileRef.current = window.innerWidth < 768;
    maxFlyRef.current = Math.max(window.innerWidth, window.innerHeight);

    // Update section height based on viewport
    if (sectionRef.current) {
      sectionRef.current.style.height = mobileRef.current ? "150vh" : "250vh";
    }

    const section = sectionRef.current;
    let progress = 0;
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable > 0) {
        progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      }
    }

    applyTransforms(progress);

    if (gridRef.current) {
      gridRef.current.style.visibility = "visible";
    }
  }, [applyTransforms]);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      PRODUCTS.forEach((_, i) => {
        const wrapper = wrapperRefs.current[i];
        if (wrapper) {
          wrapper.style.transform = "none";
          wrapper.style.opacity = "1";
        }
      });
      setTaglineVisible(PRODUCTS.map(() => true));
      return;
    }

    function updateScroll() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      applyTransforms(progress);
    }

    function onScroll() {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          updateScroll();
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    }

    function onResize() {
      mobileRef.current = window.innerWidth < 768;
      maxFlyRef.current = Math.max(window.innerWidth, window.innerHeight);
      if (sectionRef.current) {
        sectionRef.current.style.height = mobileRef.current
          ? "150vh"
          : "250vh";
      }
      updateScroll();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [applyTransforms]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 flex h-[100vh] h-[100dvh] items-center justify-center overflow-hidden">
        <div
          ref={gridRef}
          className="grid w-full grid-cols-1 gap-3 px-4 md:grid-cols-3 md:gap-3 md:px-8"
          style={{
            maxWidth: "1200px",
            visibility: "hidden",
          }}
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => {
                wrapperRefs.current[i] = el;
              }}
              className="will-change-transform min-h-[120px] md:min-h-[200px]"
              style={{ opacity: 0 }}
            >
              <ProductCard product={product} showTagline={taglineVisible[i]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
