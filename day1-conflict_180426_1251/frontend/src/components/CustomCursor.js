import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return undefined;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      if (target) {
        setIsHovering(true);
        setHoverText(target.getAttribute("data-cursor") || "");
      }
    };
    const handleOut = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      if (target) {
        setIsHovering(false);
        setHoverText("");
      }
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: isHovering ? 64 : 10,
          height: isHovering ? 64 : 10,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ backgroundColor: "white" }}
      >
        {isHovering && hoverText && (
          <span className="text-black text-[8px] font-display font-bold tracking-[0.15em] uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
