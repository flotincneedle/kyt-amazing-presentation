"use client";

import { motion } from "framer-motion";

export default function BridgePhrase() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center font-[family-name:var(--font-brand)] text-3xl font-bold text-brand-black md:text-5xl"
      >
        Шість фінансових інструментів.
        <br />
        Одна точка входу.
      </motion.h2>
    </section>
  );
}
