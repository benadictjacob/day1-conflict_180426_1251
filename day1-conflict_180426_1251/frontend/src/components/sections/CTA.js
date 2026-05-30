import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CharReveal, WordReveal } from "../AnimatedText";

export default function CTA() {
  const btnRef = useRef(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const smoothBtnX = useSpring(btnX, { stiffness: 200, damping: 20 });
  const smoothBtnY = useSpring(btnY, { stiffness: 200, damping: 20 });
  const handleMouseMove = useCallback((e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    btnX.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    btnY.set((e.clientY - rect.top - rect.height / 2) * 0.25);
  }, [btnX, btnY]);
  const handleMouseLeave = useCallback(() => {
    btnX.set(0);
    btnY.set(0);
  }, [btnX, btnY]);

  return (
    <section
      id="contact"
      data-testid="cta-section"
      className="bg-primary text-primary-foreground py-32 md:py-48 px-6 md:px-12 text-center flex flex-col items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] rounded-full border border-white/[0.04]" />
        <div className="absolute w-[40vw] h-[40vw] rounded-full border border-white/[0.04]" />
        <div className="absolute w-[20vw] h-[20vw] rounded-full border border-white/[0.06]" />
      </div>
      <div className="max-w-4xl relative z-10">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-10">
          <CharReveal text="Ready to revive" className="block" as="span" />
          <CharReveal text="the future?" className="block" delay={0.3} as="span" />
        </h2>
        <WordReveal
          text="Whether you are an investor, a partner, or a municipality ready for change - we want to hear from you."
          className="text-lg md:text-2xl font-light mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed"
          delay={0.2}
          as="p"
        />
        <motion.div
          ref={btnRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: smoothBtnX, y: smoothBtnY }}
          className="inline-block"
        >
          <button
            data-testid="cta-button"
            className="group relative bg-primary-foreground text-primary px-14 py-5 font-display text-xs tracking-[0.25em] uppercase font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl"
          >
            <span className="relative z-10 group-hover:tracking-[0.35em] transition-all duration-500">Get in touch</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
