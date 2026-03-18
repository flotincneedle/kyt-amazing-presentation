"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeaderProps {
  onBurgerClick?: () => void;
}

export default function Header({ onBurgerClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Hero is roughly 100dvh tall — switch colors after that
      setOnDark(y < window.innerHeight * 0.85);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoFill = onDark && !scrolled ? "#FFFC8D" : "#2C3030";
  const burgerColor = onDark && !scrolled ? "#FFFC8D" : "#2C3030";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between px-4 transition-all duration-300 md:px-8 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Link href="/" aria-label="КИТ — На головну">
        <svg
          width="80"
          height="26"
          viewBox="0 0 533 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-colors duration-300"
        >
          <path
            d="M393.85 0V26.2395H448.413V169.233H478.437V26.2395H533V0H393.85Z"
            fill={logoFill}
          />
          <path
            d="M370.162 169.233V0H340.15V0.0359281L340.102 0H340.018L248.437 125.629V0H218.425V169.233H248.916L340.15 44.0598V169.233H370.162Z"
            fill={logoFill}
          />
          <path
            d="M78.6411 95.7724L83.2998 65.1257C93.9584 68.1197 104.294 73.4491 113.288 80.455C103.958 87.7844 93.2998 93.1137 81.2998 95.449C80.3058 95.437 79.6351 95.7724 78.6411 95.7724ZM49.6471 95.7724C36.6531 93.4371 25.6591 87.7724 27.6591 76.1197C29.6591 67.461 42.9884 63.1257 52.9764 62.455C53.3118 62.455 53.9705 62.1197 54.6411 62.1197L49.6471 95.7724ZM38.6531 169.724H67.6351L74.6291 123.748C78.6291 123.413 82.6291 123.078 86.6171 122.419C104.605 118.754 120.27 110.754 133.264 100.096C139.922 107.76 145.887 117.928 150.234 126.838C156.078 138.79 160.964 151.748 166.521 169.724H196.892C187.563 137.736 173.91 106.096 151.922 80.7784C169.91 58.1197 180.904 29.1377 184.904 0.491028H155.922C154.497 9.41318 152.294 18.3114 149.611 26.2994C145.946 37.1856 141.431 48.2874 132.27 61.1257H131.934C119.276 50.467 103.611 42.8024 87.2878 38.467L92.9644 0.491028H63.9824L58.6531 34.8024C49.6591 35.1377 40.6651 36.467 32.0064 39.4611C16.6651 44.1317 2.34176 57.4491 0.341763 74.4431C-1.65824 88.1077 5.33577 102.766 15.6711 110.419C23.9944 117.078 34.6651 120.742 45.6591 122.742L38.6531 169.724Z"
            fill={logoFill}
          />
        </svg>
      </Link>

      <button
        onClick={onBurgerClick}
        aria-label="Меню"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span
          className="block h-0.5 w-6 rounded-full transition-colors duration-300"
          style={{ backgroundColor: burgerColor }}
        />
        <span
          className="block h-0.5 w-6 rounded-full transition-colors duration-300"
          style={{ backgroundColor: burgerColor }}
        />
      </button>
    </header>
  );
}
