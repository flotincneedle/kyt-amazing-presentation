"use client";

import { useState, useEffect, useRef } from "react";
import { PIN } from "@/lib/constants";

export default function PinGate() {
  const [authenticated, setAuthenticated] = useState(true); // start hidden to avoid flash
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("kit_access");
    if (stored === "1") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    if (!authenticated && inputRef.current) {
      inputRef.current.focus();
    }
  }, [authenticated]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pin === PIN) {
      localStorage.setItem("kit_access", "1");
      setAuthenticated(true);
    } else {
      setError(true);
      setShaking(true);
      setPin("");
      setTimeout(() => setShaking(false), 500);
    }
  }

  if (authenticated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center gap-6 ${shaking ? "animate-shake" : ""}`}
      >
        {/* KIT circle mark */}
        <img
          src="/brand/kit-mark.png"
          alt="КИТ"
          className="h-20 w-20 rounded-full"
        />

        <p className="text-brand-grey-medium text-sm">
          Введіть PIN для доступу
        </p>

        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={4}
          value={pin}
          onChange={(e) => {
            setError(false);
            setPin(e.target.value.replace(/\D/g, ""));
          }}
          className="w-40 rounded-xl border-2 border-brand-grey-dark bg-transparent px-4 py-3 text-center text-2xl tracking-[0.5em] text-white outline-none focus:border-brand-yellow"
          placeholder="····"
          autoComplete="off"
        />

        {error && (
          <p className="text-accent-red text-sm">Невірний PIN</p>
        )}

        <button
          type="submit"
          className="rounded-full bg-brand-yellow px-8 py-3 font-semibold text-brand-black transition-opacity hover:opacity-90"
        >
          Увійти
        </button>
      </form>
    </div>
  );
}
