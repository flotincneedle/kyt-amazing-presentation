export default function Loading() {
  return (
    <div className="flex min-h-[100vh] min-h-[100dvh] items-center justify-center bg-white">
      <img
        src="/brand/kit-mark.png"
        alt="Завантаження..."
        className="h-16 w-16 animate-pulse rounded-full"
      />
    </div>
  );
}
