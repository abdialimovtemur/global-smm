import { useInView } from "react-intersection-observer";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string; // Tailwind styles
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function AnimatedOnScroll({
  children,
  delay = 0,
  className = "",
}: AnimatedOnScrollProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("w-full", className)} // <--- W-FULL default qildim
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
