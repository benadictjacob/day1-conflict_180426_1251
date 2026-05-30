import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { WordReveal, FadeUp, LineReveal } from "../AnimatedText";

const IMG_FOREST = "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyZWVuJTIwZm9yZXN0fGVufDB8fDB8fHww";

export default function Story() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const smoothImgY = useSpring(imgY, { stiffness: 60, damping: 30 });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.05, 1]);
  const smoothScale = useSpring(imgScale, { stiffness: 60, damping: 30 });

  return (
    <section ref={sectionRef} id="about" data-testid="story-section" className="bg-background flex flex-col md:flex-row">
      <div className="flex-1 p-10 md:p-16 lg:p-24 flex flex-col justify-center order-2 md:order-1">
        <div className="max-w-2xl ml-auto">
          <LineReveal>
            <span className="font-display text-2xl md:text-3xl font-bold mb-12 block text-primary">
  From Problem to Purpose
</span>
          </LineReveal>
          <div className="space-y-7">
            <WordReveal
              text="ReVearth wasn't conceived in a boardroom it was built by four individuals who refused to ignore a growing challenge."
              className="text-base md:text-lg font-light leading-relaxed text-foreground/75"
              delay={0.1}
              as="p"
            />
            <WordReveal
              text="Coming from diverse professional backgrounds, our founding team united over a shared frustration: the escalating waste crisis and the systemic inefficiencies we witnessed every day."
              className="text-base md:text-lg font-light leading-relaxed text-foreground/75"
              delay={0.15}
              as="p"
            />
            <WordReveal
              text="Whether looking at local pollution or outdated disposal methods, we recognized that the world didn't need just another waste management company. It required a bold, fundamentally new approach to resource recovery."
              className="text-base md:text-lg font-light leading-relaxed text-foreground/75"
              delay={0.2}
              as="p"
            />
            <FadeUp delay={0.4}>
              <p className="font-display text-xl md:text-2xl font-bold text-primary pt-6 leading-snug">
                We're not just building a company—we're engineering the future.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2 h-[55vh] md:h-auto overflow-hidden relative">
        <motion.div className="absolute inset-[-15%] w-[130%] h-[130%]" style={{ y: smoothImgY, scale: smoothScale }}>
          <img
            src={IMG_FOREST}
            alt="Lush green forest aerial view"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/15 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
