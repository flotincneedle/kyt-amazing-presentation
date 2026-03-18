"use client";

import BrandSwirl from "./BrandSwirl";
import Conveyor from "./Conveyor";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-brand-black">
      <BrandSwirl />

      {/* Headline */}
      <h1 className="relative z-10 mb-8 px-4 text-center font-[family-name:var(--font-brand)] text-4xl font-bold text-brand-yellow md:text-6xl">
        Гроші люблять рух
      </h1>

      {/* Conveyor */}
      <div className="relative z-10 mb-12 w-full">
        <Conveyor />
      </div>

      {/* Stats */}
      <p className="relative z-10 px-4 text-center text-sm text-white/50 md:text-base">
        20+ років · 100+ відділень · 150 000+ клієнтів
      </p>
    </section>
  );
}
