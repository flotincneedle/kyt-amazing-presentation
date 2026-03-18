"use client";

import { useState } from "react";
import Header from "./Header";
import BurgerMenu from "./BurgerMenu";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header onBurgerClick={() => setMenuOpen(true)} />
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
