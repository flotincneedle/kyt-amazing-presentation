import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  showTagline?: boolean;
}

export default function ProductCard({ product, showTagline }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="flex h-full w-full flex-col justify-between rounded-2xl p-6 transition-opacity duration-300 md:p-8"
      style={{ backgroundColor: product.color, color: product.textColor }}
    >
      <h3 className="font-[family-name:var(--font-brand)] text-xl font-bold md:text-2xl">
        {product.title}
      </h3>
      {showTagline && (
        <p className="mt-2 text-sm opacity-80">{product.tagline}</p>
      )}
    </Link>
  );
}
