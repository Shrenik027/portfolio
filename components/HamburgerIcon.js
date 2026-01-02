"use client";
import { motion } from "framer-motion";

export default function HamburgerIcon({ isOpen, toggle }) {
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const middleLine = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <button onClick={toggle}>
      <div className="flex flex-col gap-1">
        <motion.div
          variants={topLine}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-8 h-[2px] bg-white"
        ></motion.div>
        <motion.div
          variants={middleLine}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-8 h-[2px] bg-white"
        ></motion.div>
        <motion.div
          variants={bottomLine}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-8 h-[2px] bg-white"
        ></motion.div>
      </div>
    </button>
  );
}
