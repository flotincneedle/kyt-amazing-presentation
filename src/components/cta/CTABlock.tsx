"use client";

import { motion } from "framer-motion";
import { getTelegramLink, TG_DEFAULT_MESSAGE } from "@/lib/constants";

interface CTABlockProps {
  headline?: string;
  subline?: string;
  buttonText?: string;
  telegramMessage?: string;
}

export default function CTABlock({
  headline = "Готові обговорити ваше завдання?",
  subline = "Напишіть нам — розберемося з будь-якою фінансовою задачею",
  buttonText = "Написати в Telegram →",
  telegramMessage = TG_DEFAULT_MESSAGE,
}: CTABlockProps) {
  return (
    <section className="bg-brand-black py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-2xl px-4 text-center"
      >
        <h2 className="mb-4 font-[family-name:var(--font-brand)] text-3xl font-bold text-brand-yellow md:text-5xl">
          {headline}
        </h2>
        <p className="mb-8 text-white/70">{subline}</p>
        <a
          href={getTelegramLink(telegramMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-brand-yellow px-8 py-4 font-semibold text-brand-black transition-opacity hover:opacity-90"
        >
          {buttonText}
        </a>
      </motion.div>
    </section>
  );
}
