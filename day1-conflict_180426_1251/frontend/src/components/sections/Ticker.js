import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Ticker() {
  const items = ["REIMAGINE WASTE", "REVIVE EARTH", "CIRCULAR ECONOMY", "RESOURCE RECOVERY", "GENERATIONAL IMPACT", "SUSTAINABLE FUTURE"];
  const repeated = [...items, ...items, ...items, ...items];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const tickerX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const smoothTickerX = useSpring(tickerX, { stiffness: 60, damping: 30 });

  return (
    <div ref={ref} data-testid="ticker-section" className="w-full overflow-hidden bg-primary text-primary-foreground py-6 flex">
      <motion.div className="animate-marquee whitespace-nowrap flex items-center shrink-0" style={{ x: smoothTickerX }}>
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-display text-xs md:text-sm font-bold tracking-[0.25em] uppercase mx-8">{item}</span>
            <span className="text-primary-foreground/30 mx-2 text-lg">+</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
