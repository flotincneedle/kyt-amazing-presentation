"use client";

import { motion } from "framer-motion";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-[family-name:var(--font-brand)] text-2xl font-bold text-brand-black md:text-4xl">
          Як це працює
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Number badge */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow font-[family-name:var(--font-brand)] text-xl font-bold text-brand-black">
                {step.number}
              </div>
              {/* Connecting line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden h-0.5 w-full bg-brand-grey-light md:block" />
              )}
              <h3 className="mb-2 font-[family-name:var(--font-brand)] text-lg font-bold text-brand-black">
                {step.title}
              </h3>
              <p className="text-sm text-brand-grey-dark">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
