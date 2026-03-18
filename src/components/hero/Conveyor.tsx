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
    <div className="flex w-full max-w-3xl flex-col items-center gap-4 px-4 md:flex-row md:items-center md:justify-center md:gap-6">
      {/* Left phrase */}
      <div className="relative h-14 w-full flex-1 overflow-hidden md:text-right">
        <AnimatePresence mode="wait">
          <motion.p
            key={`left-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center text-sm text-white/70 md:justify-end md:text-base"
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

      {/* Right result */}
      <div className="relative h-14 w-full flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={`right-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center text-sm text-brand-yellow md:justify-start md:text-base"
          >
            {phrase.right}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
