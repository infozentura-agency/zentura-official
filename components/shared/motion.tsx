"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.8 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 25, mass: 0.6 },
  slow: { type: "spring" as const, stiffness: 80, damping: 20, mass: 1.2 },
};

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  tag?:
  | "div"
  | "section"
  | "article"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "span";
}

/**
 * A reusable MotionWrapper that internally uses motion.div (or other tags)
 * and accepts children. This can be safely imported and used inside Server Components.
 */
export const MotionWrapper = ({
  children,
  tag = "div",
  ...props
}: MotionWrapperProps) => {
  const Component = motion[tag] as any;
  return <Component {...props}>{children}</Component>;
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  threshold?: number;
  blur?: string;
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  threshold = 0.15,
  blur = "4px",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: `blur(${blur})` }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y, filter: `blur(${blur})` }
      }
      transition={{ ...spring.gentle, delay }}>
      {children}
    </motion.div>
  );
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring.gentle,
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export const StaggerContainer = ({
  children,
  className,
  once = true,
  threshold = 0.1,
}: StaggerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}>
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={staggerItem}>
    {children}
  </motion.div>
);

export const HoverLift = ({
  children,
  className,
  y = -2,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) => (
  <motion.div
    className={className}
    whileHover={{ y, transition: { ...spring.snappy } }}
    whileTap={{ scale: 0.985, transition: { duration: 0.1 } }}>
    {children}
  </motion.div>
);

export const MagneticButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.03, transition: spring.snappy }}
    whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}>
    {children}
  </motion.div>
);

export const CountUp = ({
  target,
  duration = 1600,
  threshold = 0.3,
  suffix = "",
}: {
  target: number;
  duration?: number;
  threshold?: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true, amount: threshold });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
    }
  }, [inView, started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
};

export { motion, useInView };
