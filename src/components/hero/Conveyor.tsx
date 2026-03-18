"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PHRASES = [
  {
    left: "Переказати 100к у Відень",
    right: "Готівка чекає у відділенні",
  },
  {
    left: "Обміняти крипто на євро",
    right: "EUR видано, курс зафіксовано",
  },
  {
    left: "Оплата постачальнику в Китай",
    right: "Інвойс оплачено за 24 години",
  },
  {
    left: "Купити 50г золота",
    right: "Зливок готовий до видачі",
  },
  {
    left: "Переказ з Києва в Одесу",
    right: "Переказ виконано. Комісія — 0%",
  },
];

const INTERVAL = 3000;

export default function Conveyor() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const phrase = PHRASES[index];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 md:flex-row md:items-center md:justify-center md:gap-6">
      {/* Left phrase — mobile: above pill */}
      <div className="h-10 w-full flex-1 md:text-right">
        <AnimatePresence mode="wait">
          <motion.p
            key={`left-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center text-sm text-white/70 md:text-right md:text-base"
          >
            {phrase.left}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Center KIT pill */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex-shrink-0 rounded-full bg-brand-yellow px-6 py-2 text-lg font-bold text-brand-black"
      >
        КИТ
      </motion.div>

      {/* Right result — mobile: below pill */}
      <div className="h-10 w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.p
            key={`right-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-center text-sm text-brand-yellow md:text-left md:text-base"
          >
            {phrase.right}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
