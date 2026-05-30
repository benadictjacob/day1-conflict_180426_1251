import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { FadeUp, LineReveal } from "../AnimatedText";

const IMG_1 = "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80&auto=format";
const IMG_2 = "https://images.unsplash.com/photo-1769501378399-bbea7f5cfc94?w=600&q=80&auto=format";
const IMG_3 = "/assets/community-gardening.jpg";

const items = [
  { title: "Diverse Waste Solutions", image: IMG_1, description: "Tailored system for waste. We don't just process; we optimize for maximum material recovery." },
  { title: "Resource Recovery", image: IMG_2, description: "Pioneering technology that redefines waste, converting tomorrow's environmental liabilities into today's high-value energy assets." },
  { title: "Generational Impact", image: IMG_3, description: "Every process we design is measured by the world it leaves behind for the next generation. Long-term thinking is built in." }
];

function WhatWeDoCard({ item, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const smoothImgY = useSpring(imgY, { stiffness: 80, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      data-testid={`what-we-do-card-${index}`}
      className="group flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full aspect-[4/3] overflow-hidden mb-8 relative">
        <motion.div className="absolute inset-[-10%] w-[120%] h-[120%]" style={{ y: smoothImgY }}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform ease-out group-hover:scale-105"
            style={{ transitionDuration: "1500ms" }}
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-muted z-10"
          initial={{ scaleY: 1 }}
          animate={isInView ? { scaleY: 0 } : {}}
          transition={{ duration: 1.2, delay: index * 0.2 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "top" }}
        />
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-20 pointer-events-none" />
      </div>
      <span className="font-display text-[10px] tracking-[0.3em] font-semibold uppercase mb-3 text-primary">0{index + 1}</span>
      <h3 className="font-display text-2xl md:text-3xl font-bold mb-5 text-foreground group-hover:text-primary transition-colors duration-500">{item.title}</h3>
      <p className="text-base font-light leading-relaxed text-foreground/60">{item.description}</p>
      <div className="mt-6 overflow-hidden">
        <motion.div
          className="h-[1px] bg-border group-hover:bg-primary transition-colors duration-700"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: index * 0.2 + 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headingX = useTransform(scrollYProgress, [0, 1], ["0%", "-3%"]);
  const smoothHeadingX = useSpring(headingX, { stiffness: 80, damping: 30 });

  return (
    <section ref={sectionRef} data-testid="what-we-do-section" className="bg-background py-28 md:py-36 px-6 md:px-12 relative">
      <div className="absolute top-16 left-8 md:left-20 font-display text-[20vw] md:text-[15vw] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">02</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-28 gap-6">
          <FadeUp>
            <motion.h2 className="font-display text-5xl md:text-7xl font-bold text-foreground" style={{ x: smoothHeadingX }}>What We Do</motion.h2>
          </FadeUp>
          <LineReveal delay={0.2}>
            <p className="font-display text-xs tracking-[0.2em] uppercase text-foreground/40 max-w-xs">Engineering smart solutions that elevate discarded materials into valuable resources.</p>
          </LineReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {items.map((item, index) => (<WhatWeDoCard key={index} item={item} index={index} />))}
        </div>
      </div>
    </section>
  );
}
