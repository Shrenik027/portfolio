"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";

export default function HamburgerMenu({ open, setOpen }) {
  const menuWrapper = {
    closed: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const menuItem = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={menuWrapper}
      initial="closed"
      animate="open"
      exit="closed"
      className="
  fixed inset-0 
  w-full h-full
  backdrop-blur-2xl bg-black/30 
  text-white flex flex-col items-center justify-center 
  z-[99999]
"
    >
      <div className="absolute top-10 right-10 z-[10000]">
        <HamburgerIcon isOpen={open} toggle={() => setOpen(false)} />
      </div>

      <motion.ul
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          open: { transition: { staggerChildren: 0.1 } },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        }}
        className="space-y-8 text-4xl font-semibold text-center"
      >
        <motion.li variants={menuItem}>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/work" onClick={() => setOpen(false)}>
            Work
          </Link>
        </motion.li>
        <motion.li variants={menuItem}>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
