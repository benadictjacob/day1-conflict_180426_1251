import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CharReveal, WordReveal, FadeUp } from "../AnimatedText";

export default function VisionMission() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0.1, 0.4], [-40, 0]);
  const smoothLeftX = useSpring(leftX, { stiffness: 60, damping: 25 });
  const rightX = useTransform(scrollYProgress, [0.1, 0.4], [40, 0]);
  const smoothRightX = useSpring(rightX, { stiffness: 60, damping: 25 });
  const letterY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const smoothLetterY = useSpring(letterY, { stiffness: 40, damping: 20 });

  return (
    <section ref={sectionRef} data-testid="vision-mission-section" className="flex flex-col md:flex-row w-full min-h-[75vh]">
      <motion.div className="flex-1 bg-primary text-primary-foreground p-10 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden" style={{ x: smoothLeftX }}>
        <motion.div className="absolute top-8 right-8 font-display text-[18vw] md:text-[10vw] font-bold text-white/[0.03] leading-none select-none" style={{ y: smoothLetterY }}>V</motion.div>
        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
          <FadeUp><span className="font-display text-[10px] tracking-[0.3em] font-semibold uppercase mb-10 block opacity-50">Vision</span></FadeUp>
          <WordReveal
            text="To be the heartbeat of Earth's restoration, inspiring waste-free communities living in perfect harmony with nature."
            className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed opacity-90"
            delay={0.1}
            as="p"
          />
        </div>
      </motion.div>
      <motion.div className="flex-1 bg-background text-foreground p-10 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden" style={{ x: smoothRightX }}>
        <motion.div className="absolute top-8 right-8 font-display text-[18vw] md:text-[10vw] font-bold text-foreground/[0.02] leading-none select-none" style={{ y: smoothLetterY }}>M</motion.div>
        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
          <FadeUp><span className="font-display text-[10px] tracking-[0.3em] font-semibold uppercase mb-10 block text-foreground/40">Mission</span></FadeUp>
          <CharReveal
            text="Eliminating waste. Restoring ecosystems. Empowering communities."
            className="font-display text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-primary"
            delay={0.1}
            as="p"
          />
        </div>
      </motion.div>
    </section>
  );
}
