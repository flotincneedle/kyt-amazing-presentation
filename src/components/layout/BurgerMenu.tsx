"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

interface BurgerMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function BurgerMenu({ open, onClose }: BurgerMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-black"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Закрити меню"
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center text-brand-yellow"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-6">
            <Link
              href="/"
              onClick={onClose}
              className="font-[family-name:var(--font-brand)] text-xl font-bold text-brand-yellow transition-opacity hover:opacity-80"
            >
              На головну
            </Link>

            <div className="my-2 h-px w-16 bg-brand-yellow/20" />

            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="font-[family-name:var(--font-brand)] text-lg text-brand-yellow transition-opacity hover:opacity-80"
              >
                {product.title}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
