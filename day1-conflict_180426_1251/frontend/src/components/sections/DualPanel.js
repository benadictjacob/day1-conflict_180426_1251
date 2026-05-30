import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { WordReveal, FadeUp, LineReveal } from "../AnimatedText";

const IMG_SEEDLING = "https://images.unsplash.com/photo-1763856957026-a74ab4f05891?w=800&q=80&auto=format";

export default function DualPanel() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const smoothImgY = useSpring(imgY, { stiffness: 80, damping: 30 });

  return (
    <section
      ref={sectionRef}
      id="solutions"
      data-testid="dual-panel-section"
      className="flex flex-col md:flex-row w-full min-h-[85vh]"
    >
      <div className="flex-1 bg-primary text-primary-foreground p-10 md:p-20 lg:p-28 flex flex-col justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
          <LineReveal>
            <span className="font-display text-[25px] tracking-[0.3em] font-semibold uppercase mb-10 block opacity-60">
              Products & Solutions
            </span>
          </LineReveal>
          <WordReveal
            text="We provide a complete ecosystem designed to revive the planet"
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-10"
            delay={0.1}
            as="h2"
          />
          <WordReveal
            text="Engineering smart solutions that elevate discarded materials into valuable resources."
            className="text-base md:text-lg font-light leading-relaxed mb-14 opacity-80"
            delay={0.2}
            as="p"
          />
          {/* <FadeUp delay={0.4}>
            <button
              data-testid="learn-more-solutions"
              className="group flex items-center font-display text-xs tracking-[0.2em] uppercase font-semibold hover:opacity-70 transition-opacity"
            >
              <span className="mr-4">Learn more</span>
              <span className="inline-block group-hover:translate-x-3 transition-transform duration-500">
                <svg width="24" height="1" viewBox="0 0 24 1">
                  <line x1="0" y1="0.5" x2="24" y2="0.5" stroke="currentColor" strokeWidth="1" />
                </svg>
              </span>
            </button>
          </FadeUp> */}
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden min-h-[50vh] md:min-h-0">
        <motion.div className="absolute inset-0" style={{ y: smoothImgY }}>
          <div className="w-full h-[120%] relative">
            <img
              src={IMG_SEEDLING}
              alt="Hands planting a seedling"
              className="w-full h-full object-cover scale-110"
              loading="lazy"
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      </div>
    </section>
  );
}
