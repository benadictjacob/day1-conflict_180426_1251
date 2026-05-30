import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Character-by-character reveal animation
export function CharReveal({ text, className = "", delay = 0, once = true, as = "span" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const chars = text.split("");
  const Tag = as;

  return (
    <Tag ref={ref} className={`inline-block ${className}`}>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.025, delayChildren: delay } }
        }}
        aria-label={text}
      >
        {chars.map((char, i) => {
          if (char === "\n") {
            return <br key={i} />;
          }

          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              style={{ display: "inline-block" }}
            >
              <span className="inline-block overflow-hidden">
                {char === " " ? "\u00A0" : char}
              </span>
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}

// Word-by-word stagger animation
export function WordReveal({ text, className = "", delay = 0, once = true, as = "p" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");
  const Tag = as;

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04, delayChildren: delay } }
        }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

// Line-by-line reveal for paragraphs
export function LineReveal({ children, className = "", delay = 0, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Fade-slide up animation
export function FadeUp({ children, className = "", delay = 0, once = true, y = 60 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Scale reveal for images
export function ScaleReveal({ children, className = "", delay = 0, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={{ scale: 1.15, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
