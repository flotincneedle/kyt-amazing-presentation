"use client";

import { motion } from "framer-motion";

interface ProductHeroProps {
  title: string;
  essence: string;
  color: string;
  textColor: string;
}

export default function ProductHero({
  title,
  essence,
  color,
  textColor,
}: ProductHeroProps) {
  return (
    <section
      className="flex min-h-[70dvh] flex-col items-center justify-center px-4 pt-14"
      style={{ backgroundColor: color, color: textColor }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 text-center font-[family-name:var(--font-brand)] text-4xl font-bold md:text-6xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="max-w-lg text-center text-lg opacity-80 md:text-xl"
      >
        {essence}
      </motion.p>
    </section>
  );
}
