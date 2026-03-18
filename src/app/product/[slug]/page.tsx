import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import ProductHero from "@/components/product/ProductHero";
import HowItWorks from "@/components/product/HowItWorks";
import KeyAdvantages from "@/components/product/KeyAdvantages";
import CTABlock from "@/components/cta/CTABlock";
import Link from "next/link";

// Content for Перекази по Україні
const PEREKAZY_UA_STEPS = [
  {
    number: 1,
    title: "Приходите",
    description:
      "З готівкою у будь-яке з 100+ відділень. Без паспорта до 50 000 грн.",
  },
  {
    number: 2,
    title: "Відправляєте",
    description: "Називаєте місто і суму. Отримуєте код.",
  },
  {
    number: 3,
    title: "Отримувач забирає",
    description: "За кодом, у зручному відділенні. Просто.",
  },
];

const PEREKAZY_UA_ADVANTAGES = [
  {
    headline: "Ти обираєш комісію",
    text: "Чим більше часу — тим менше платиш. Від 0,6% за переказ сьогодні до 0% якщо не поспішаєш.",
    proof: "Сьогодні — 0,6% · Завтра — 0,3% · Не поспішаю — 0%",
  },
  {
    headline: "Без паспорта до 50 000 грн",
    text: "Отримувач називає код — і забирає готівку. Без документів, без черг.",
  },
  {
    headline: "100+ відділень. 32 міста.",
    text: "406 пар маршрутів. Найбільша мережа готівкових переказів в Україні.",
  },
  {
    headline: "Відправ гривню — забери долар",
    text: "Конвертація при переказі. Один візит замість двох.",
  },
  {
    headline: "Працюємо навіть без світла",
    text: "Відділення КИТ працюють на генераторах. Переказ дійде навіть у блекаут.",
  },
];

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Full content page for Перекази UA
  if (slug === "perekazy-ua") {
    return (
      <>
        <ProductHero
          title="Готівковий переказ по Україні"
          essence="Комісія — від 0% до 0,6%. Залежить від тебе."
          color={product.color}
          textColor={product.textColor}
        />
        <HowItWorks steps={PEREKAZY_UA_STEPS} />
        <KeyAdvantages advantages={PEREKAZY_UA_ADVANTAGES} />
        <CTABlock
          headline="Готові відправити переказ?"
          subline="Напишіть — допоможемо обрати найкращий маршрут"
          telegramMessage={product.telegramText}
        />
      </>
    );
  }

  // Placeholder for other products
  return (
    <section
      className="flex min-h-[80dvh] flex-col items-center justify-center gap-6 px-4 pt-14"
      style={{ backgroundColor: product.color, color: product.textColor }}
    >
      <h1 className="text-center font-[family-name:var(--font-brand)] text-4xl font-bold md:text-6xl">
        {product.title}
      </h1>
      <p className="text-lg opacity-70">Сторінка в розробці</p>
      <Link
        href="/"
        className="rounded-full border-2 border-current px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
      >
        ← На головну
      </Link>
    </section>
  );
}
