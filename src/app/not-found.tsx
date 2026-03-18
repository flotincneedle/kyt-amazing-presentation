import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100vh] min-h-[100dvh] flex-col items-center justify-center bg-white px-4">
      <img
        src="/brand/kit-mark.png"
        alt="КИТ"
        className="mb-8 h-20 w-20 rounded-full"
      />
      <h1 className="mb-2 font-[family-name:var(--font-brand)] text-2xl font-bold text-brand-black">
        Сторінку не знайдено
      </h1>
      <p className="mb-6 text-brand-grey-dark">
        Такої сторінки не існує або вона була видалена
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand-yellow px-6 py-3 font-semibold text-brand-black transition-opacity hover:opacity-90"
      >
        На головну
      </Link>
    </main>
  );
}
