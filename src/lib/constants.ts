export const PIN = process.env.NEXT_PUBLIC_PIN ?? "1234";

export const TG_CHAT = process.env.NEXT_PUBLIC_TG_CHAT ?? "kit_finance";

export const TG_DEFAULT_MESSAGE =
  "Привіт! Переходжу з презентації KIT, хочу обговорити фінансове завдання";

export const TG_PRODUCT_MESSAGES: Record<string, string> = {
  "valutniy-obmin": "Привіт! Цікавить обмін валют",
  krypto: "Привіт! Цікавить обмін крипто",
  "perekazy-ua": "Привіт! Цікавить переказ по Україні",
  "perekazy-svit": "Привіт! Цікавить міжнародний переказ",
  invoisy: "Привіт! Цікавить оплата інвойсів",
  zoloto: "Привіт! Цікавить купівля золота",
};

export function getTelegramLink(message: string): string {
  return `https://t.me/${TG_CHAT}?text=${encodeURIComponent(message)}`;
}
