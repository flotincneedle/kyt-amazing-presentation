export interface Product {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  color: string;
  textColor: string;
  flyFrom: [number, number];
  telegramText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "valutniy-obmin",
    title: "Валютообмін",
    tagline: "Найкращий курс у місті. Бронювання онлайн.",
    color: "#FFFC8D",
    textColor: "#2C3030",
    flyFrom: [-1.5, -0.5],
    telegramText: "Привіт! Цікавить обмін валют",
  },
  {
    id: 2,
    slug: "krypto",
    title: "Криптообмін",
    tagline: "Крипто ↔ готівка. Без зайвих питань.",
    color: "#2C3030",
    textColor: "#FFFC8D",
    flyFrom: [1.5, -0.8],
    telegramText: "Привіт! Цікавить обмін крипто",
  },
  {
    id: 3,
    slug: "perekazy-ua",
    title: "Перекази UA",
    tagline: "Комісія від 0%. 100+ відділень.",
    color: "#58B592",
    textColor: "#FFFFFF",
    flyFrom: [-1.2, 0.5],
    telegramText: "Привіт! Цікавить переказ по Україні",
  },
  {
    id: 4,
    slug: "perekazy-svit",
    title: "Перекази світ",
    tagline: "Готівка в будь-яку точку світу.",
    color: "#6095E4",
    textColor: "#FFFFFF",
    flyFrom: [1.5, 0.3],
    telegramText: "Привіт! Цікавить міжнародний переказ",
  },
  {
    id: 5,
    slug: "invoisy",
    title: "Інвойси",
    tagline: "Оплата постачальникам за 24 години.",
    color: "#2EA2B4",
    textColor: "#FFFFFF",
    flyFrom: [-0.8, 1.2],
    telegramText: "Привіт! Цікавить оплата інвойсів",
  },
  {
    id: 6,
    slug: "zoloto",
    title: "Золото",
    tagline: "Інвестиційне золото. Зливки від 1г.",
    color: "#FFFCB9",
    textColor: "#2C3030",
    flyFrom: [0.8, 1.5],
    telegramText: "Привіт! Цікавить купівля золота",
  },
];
