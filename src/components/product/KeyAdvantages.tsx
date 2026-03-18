"use client";

import { motion } from "framer-motion";

interface Advantage {
  headline: string;
  text: string;
  proof?: string;
}

interface KeyAdvantagesProps {
  advantages: Advantage[];
}

export default function KeyAdvantages({ advantages }: KeyAdvantagesProps) {
  return (
    <div>
      {advantages.map((adv, i) => (
        <section
          key={i}
          className={`py-16 md:py-20 ${
            i % 2 === 0 ? "bg-white" : "bg-brand-grey-light"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-2xl px-4"
          >
            <h3 className="mb-3 font-[family-name:var(--font-brand)] text-2xl font-bold text-brand-black md:text-4xl">
              {adv.headline}
            </h3>
            <p className="text-brand-grey-dark md:text-lg">{adv.text}</p>
            {adv.proof && (
              <p className="mt-4 rounded-xl bg-brand-black/5 px-4 py-3 text-sm text-brand-black">
                {adv.proof}
              </p>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  );
}
