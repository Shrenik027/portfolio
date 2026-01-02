"use client";

import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ open, setOpen }) {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-[9000] px-6 py-3 
      flex justify-between items-center bg-black/0 backdrop-blur-md"
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Shrix Logo" width={60} height={15} />
      </Link>

      <HamburgerIcon isOpen={open} toggle={() => setOpen(!open)} />
    </nav>
  );
}
