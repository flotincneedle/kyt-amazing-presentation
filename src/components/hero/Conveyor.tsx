"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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

const CYCLE_MS = 4000;

// Request slides in from left → fades into center
const requestVariants: Variants = {
  initial: { opacity: 0, x: -60 },
  slideIn: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  absorb: {
    opacity: 0,
    x: 40,
    scale: 0.8,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

// Result emerges from center → slides out to right
const resultVariants: Variants = {
  initial: { opacity: 0, x: -40, scale: 0.8 },
  emerge: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Mobile: vertical — request slides down, result slides down
const requestVariantsMobile: Variants = {
  initial: { opacity: 0, y: -30 },
  slideIn: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  absorb: {
    opacity: 0,
    y: 20,
    scale: 0.85,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const resultVariantsMobile: Variants = {
  initial: { opacity: 0, y: -20, scale: 0.85 },
  emerge: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function Conveyor() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"request" | "processing" | "result">(
    "request"
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // Phase timeline: request(0-1.2s) → processing(1.2-2.2s) → result(2.2-3.6s) → next
    const timers: ReturnType<typeof setTimeout>[] = [];

    function cycle() {
      setPhase("request");

      timers.push(
        setTimeout(() => setPhase("processing"), 1200),
        setTimeout(() => setPhase("result"), 2200),
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % PHRASES.length);
          cycle();
        }, CYCLE_MS)
      );
    }

    cycle();

    return () => timers.forEach(clearTimeout);
  }, []);

  const phrase = PHRASES[index];
  const reqV = isMobile ? requestVariantsMobile : requestVariants;
  const resV = isMobile ? resultVariantsMobile : resultVariants;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 md:flex-row md:items-center md:justify-center md:gap-0">
      {/* Request — left (desktop) / top (mobile) */}
      <div className="flex h-12 w-full flex-1 items-center justify-center md:justify-end md:pr-6">
        <AnimatePresence mode="wait">
          {(phase === "request" || phase === "processing") && (
            <motion.span
              key={`req-${index}`}
              variants={reqV}
              initial="initial"
              animate={phase === "request" ? "slideIn" : "absorb"}
              exit="absorb"
              className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-sm text-white/80 backdrop-blur-sm md:text-base"
            >
              {phrase.left}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Center — KIT swirl element */}
      <motion.div
        animate={
          phase === "processing"
            ? {
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255,252,141,0)",
                  "0 0 30px 10px rgba(255,252,141,0.4)",
                  "0 0 0 0 rgba(255,252,141,0)",
                ],
              }
            : { scale: 1 }
        }
        transition={
          phase === "processing"
            ? { duration: 0.8, ease: "easeInOut" }
            : { duration: 0.3 }
        }
        className="relative z-10 flex flex-shrink-0 items-center justify-center"
      >
        {/* Swirl background */}
        <img
          src="/brand/swirl.png"
          alt=""
          className="absolute h-24 w-24 opacity-40 md:h-32 md:w-32"
        />
        {/* KIT pill overlay */}
        <div className="relative rounded-full bg-brand-yellow px-7 py-2.5 text-lg font-bold text-brand-black">
          КИТ
        </div>
      </motion.div>

      {/* Result — right (desktop) / bottom (mobile) */}
      <div className="flex h-12 w-full flex-1 items-center justify-center md:justify-start md:pl-6">
        <AnimatePresence mode="wait">
          {phase === "result" && (
            <motion.span
              key={`res-${index}`}
              variants={resV}
              initial="initial"
              animate="emerge"
              exit="exit"
              className="inline-block rounded-full bg-brand-yellow/20 px-4 py-2 text-center text-sm font-medium text-brand-yellow md:text-base"
            >
              {phrase.right}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
