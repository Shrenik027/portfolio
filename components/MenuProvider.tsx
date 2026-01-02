"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import { AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export default function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      {/* Page content wrapper */}
      <div className={`transition-all duration-300 ${open ? "blur-lg" : ""}`}>
        {children}
      </div>

      {/* Overlay rendered LAST so it is OUTSIDE content flow */}
      <AnimatePresence>
        {open && <HamburgerMenu open={open} setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
}
