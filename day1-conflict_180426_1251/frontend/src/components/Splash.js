import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/revearth-logo.png";

export default function Splash({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("counting"); // counting -> reveal -> exit

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase("reveal"), 200);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("exit"), 1800);
      return () => clearTimeout(timer);
    }
    if (phase === "exit") {
      const timer = setTimeout(() => onComplete?.(), 1000);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  const letters = "REVEARTH".split("");

  return (
    <motion.div
      data-testid="splash-screen"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "hsl(158 42% 12%)" }}
      animate={{
        opacity: phase === "exit" ? 0 : 1,
        scale: phase === "exit" ? 1.05 : 1,
      }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Vertical lines decoration */}
      <div className="absolute inset-0 flex justify-between px-12 opacity-[0.06]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px h-full bg-white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        ))}
      </div>

      {/* Counter */}
      <motion.div
        className="absolute bottom-8 right-12 font-display text-white/20 text-sm tracking-[0.3em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="tabular-nums">{String(count).padStart(3, "0")}</span>
        <span className="ml-1">%</span>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
        <motion.div
          className="h-full"
          style={{ backgroundColor: "hsl(158 42% 50%)" }}
          initial={{ width: "0%" }}
          animate={{ width: `${count}%` }}
          transition={{ duration: 0.03 }}
        />
      </div>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="ReVearth"
        className="w-20 h-20 md:w-24 md:h-24 object-contain brightness-0 invert mb-8"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: count > 20 ? 1 : 0,
          scale: count > 20 ? 1 : 0.7,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* REVEARTH letters */}
      <div className="flex items-center overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.15em] inline-block"
            initial={{ y: 80, opacity: 0, rotateX: -90 }}
            animate={
              phase !== "counting"
                ? { y: 0, opacity: 1, rotateX: 0 }
                : { y: 80, opacity: 0, rotateX: -90 }
            }
            transition={{
              duration: 0.6,
              delay: i * 0.07 + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ perspective: "600px" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        className="mt-6 text-white/40 text-xs tracking-[0.4em] uppercase font-display"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: phase === "reveal" ? 1 : 0,
          y: phase === "reveal" ? 0 : 15,
        }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Reviving the Future
      </motion.p>
    </motion.div>
  );
}
