"use client";

import { motion } from "framer-motion";

const SCENARIO_PILLS = [
  "Крипто (Київ) → EUR готівка (Барселона)",
  "Оплата постачальнику в Китай через конвертацію",
  "Переказ USD з Одеси → PLN у Варшаві",
];

const EXPANDED_STEPS = [
  { step: 1, text: "Приймаємо крипто у Києві" },
  { step: 2, text: "Конвертація → EUR" },
  { step: 3, text: "Міжнародний переказ у Барселону" },
  { step: 4, text: "Отримувач забирає готівку" },
];

export default function CompoundBlock() {
  return (
    <section className="bg-brand-grey-light py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-center font-[family-name:var(--font-brand)] text-2xl font-bold text-brand-black md:text-4xl"
        >
          Беремо на себе фінансові задачі будь-якої складності
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 text-center text-brand-grey-dark md:text-lg"
        >
          Комбінуємо продукти в ланцюжки — від крипти до готівки в будь-якій
          точці світу
        </motion.p>

        {/* Scenario pills */}
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:justify-center md:gap-4">
          {SCENARIO_PILLS.map((pill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-brand-black shadow-sm"
            >
              {pill}
            </motion.div>
          ))}
        </div>

        {/* Expanded scenario — vertical timeline */}
        <div className="mx-auto max-w-md px-4">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-brand-grey-dark">
            Приклад ланцюжка
          </p>
          <div className="flex flex-col gap-5">
            {EXPANDED_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className="flex items-start gap-4"
              >
                {/* Number circle */}
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow text-sm font-bold text-brand-black">
                  {step.step}
                </div>
                <p className="pt-2 text-brand-black md:text-lg">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
