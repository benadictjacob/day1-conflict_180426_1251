import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { WordReveal } from "../AnimatedText";

const words = ["REIMAGINE", "REVIVE", "RESTORE"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 30 });
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100dvh] flex flex-col justify-center bg-background px-6 md:px-12 pt-28 pb-16"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(158 42% 20%) 1px, transparent 1px), linear-gradient(90deg, hsl(158 42% 20%) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10"
        style={{ y: smoothTextY, opacity: textOpacity, scale: textScale }}
      >
        <h1 className="font-display text-[13vw] md:text-[9vw] lg:text-[8vw] leading-[0.95] font-bold tracking-tight text-foreground">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We
            </motion.span>
          </span>
          <div className="relative h-[1.05em] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 block text-primary"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              waste.
            </motion.span>
          </span>
        </h1>

        <WordReveal
          text="Every day, the Earth gives us more than we can ever return. In our rush for convenience, we often take without thinking of tomorrow."
          className="mt-16 text-lg md:text-2xl font-light text-foreground/70 max-w-3xl leading-relaxed"
          delay={0.6}
          as="p"
        />

      </motion.div>

      <div className="absolute top-28 right-6 md:right-12 font-display text-[10px] tracking-[0.3em] uppercase text-foreground/20">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          EST. 2026
        </motion.span>
      </div>
    </section>
  );
}
