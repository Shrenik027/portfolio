import { Variants } from "framer-motion";

export const animationConfigs = {
  stagger: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    } as Variants,
  },

  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as Variants,

  fadeUpSlow: {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  } as Variants,

  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as Variants,
};

export const staggerContainer = animationConfigs.stagger.container;
export const fadeUp = animationConfigs.fadeUp;
export const fadeUpSlow = animationConfigs.fadeUpSlow;
export const scaleIn = animationConfigs.scaleIn;
