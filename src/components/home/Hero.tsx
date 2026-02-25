import React, { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowDown } from "lucide-react";

/* ─── Floating Orb Component ─── */
const FloatingOrb: React.FC<{
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  duration: number;
  delay: number;
  blur: number;
}> = ({ size, color, initialX, initialY, duration, delay, blur }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: initialX,
      top: initialY,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: `blur(${blur}px)`,
    }}
    animate={{
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 15, -10, 0],
      scale: [1, 1.15, 0.9, 1.05, 1],
      opacity: [0.4, 0.7, 0.5, 0.65, 0.4],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* ─── Ambient Particle ─── */
const Particle: React.FC<{
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}> = ({ x, y, size, delay, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: "rgba(154, 199, 179, 0.6)",
    }}
    animate={{
      y: [0, -60, -120],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

/* ─── Animated Line ─── */
const AnimatedLine: React.FC<{
  direction: "horizontal" | "vertical";
  position: string;
  delay: number;
}> = ({ direction, position, delay }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      ...(direction === "horizontal"
        ? { left: 0, right: 0, top: position, height: "1px" }
        : { top: 0, bottom: 0, left: position, width: "1px" }),
      background:
        direction === "horizontal"
          ? "linear-gradient(90deg, transparent, rgba(154, 199, 179, 0.08), rgba(36, 138, 97, 0.12), rgba(154, 199, 179, 0.08), transparent)"
          : "linear-gradient(180deg, transparent, rgba(154, 199, 179, 0.08), rgba(36, 138, 97, 0.12), rgba(154, 199, 179, 0.08), transparent)",
    }}
    initial={{ opacity: 0, scale: direction === "horizontal" ? 0 : 1, scaleY: direction === "vertical" ? 0 : 1 }}
    animate={{ opacity: 1, scale: 1, scaleY: 1 }}
    transition={{ duration: 1.8, delay, ease: "easeOut" }}
  />
);

/* ─── Hero Component ─── */
const Hero: React.FC = () => {
  const [transformStyle, setTransformStyle] = React.useState({});
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  // Scroll-based gradient fade
  const gradientStop = useTransform(scrollY, [0, 500], [100, 0]);
  const maskImage = useMotionTemplate`linear-gradient(to bottom, black ${gradientStop}%, transparent 100%)`;

  // Parallax for content
  const contentY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // 3D tilt on mouse
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY, view } = e;
    if (!view) return;
    const { innerWidth, innerHeight } = view;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    const rotateX = -y * 4;
    const rotateY = x * 4;

    setTransformStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
      transition: "transform 0.15s ease-out",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Grain canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 256;
    const h = 256;
    canvas.width = w;
    canvas.height = h;

    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 18;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.6 + i * 0.06,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.6 + i * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const heroTitle = "NOOZI";
  const taglineWords = ["WE", "CREATE", "STORIES", "THAT", "MOVE"];

  return (
    <section className="relative h-screen w-full bg-alpha flex items-center justify-center overflow-hidden">
      {/* Background Image with 3D tilt and fade */}
      <motion.img
        src="/images/herobg.svg"
        alt="Hero Background"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          ...transformStyle,
          opacity: 0.05,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      />

      {/* Grain Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-60"
        style={{ mixBlendMode: "overlay" }}
      />

      {/* Ambient Grid Lines */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <AnimatedLine direction="horizontal" position="25%" delay={1.2} />
        <AnimatedLine direction="horizontal" position="50%" delay={1.5} />
        <AnimatedLine direction="horizontal" position="75%" delay={1.8} />
        <AnimatedLine direction="vertical" position="20%" delay={1.4} />
        <AnimatedLine direction="vertical" position="50%" delay={1.6} />
        <AnimatedLine direction="vertical" position="80%" delay={1.9} />
      </div>

      {/* Floating Orbs (Background) */}
      <div className="absolute inset-0 z-[4] pointer-events-none">
        <FloatingOrb size={300} color="rgba(36, 138, 97, 0.15)" initialX="-5%" initialY="10%" duration={12} delay={0} blur={60} />
        <FloatingOrb size={200} color="rgba(154, 199, 179, 0.12)" initialX="70%" initialY="60%" duration={15} delay={2} blur={50} />
        <FloatingOrb size={250} color="rgba(36, 138, 97, 0.1)" initialX="40%" initialY="-10%" duration={18} delay={1} blur={70} />
        <FloatingOrb size={180} color="rgba(227, 217, 209, 0.08)" initialX="85%" initialY="20%" duration={14} delay={3} blur={55} />
        <FloatingOrb size={150} color="rgba(36, 138, 97, 0.12)" initialX="15%" initialY="70%" duration={16} delay={4} blur={45} />
      </div>

      {/* Rising Particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle
            key={i}
            x={`${8 + (i * 6.2) % 85}%`}
            y={`${70 + (i * 3.7) % 25}%`}
            size={2 + (i % 3)}
            delay={i * 0.8}
            duration={4 + (i % 3) * 1.5}
          />
        ))}
      </div>

      {/* Center Glow */}
      <motion.div
        className="absolute z-[4] pointer-events-none"
        style={{
          width: "60vw",
          height: "60vh",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(36, 138, 97, 0.06) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ─── MAIN CONTENT ─── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Small Pre-Title */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="h-px bg-gradient-to-r from-transparent via-zigma to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          />
          <span className="text-zigma text-[10px] md:text-xs font-poppins font-semibold tracking-[0.35em] uppercase">
            Creative Production Studio
          </span>
          <motion.span
            className="h-px bg-gradient-to-r from-transparent via-zigma to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Main Title — Letter by Letter Reveal */}
        <div className="overflow-hidden mb-2" style={{ perspective: "800px" }}>
          <h1 className="flex items-center justify-center text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] font-barlow font-black text-tango tracking-[-0.02em]">
            {heroTitle.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  textShadow: "0 0 80px rgba(36, 138, 97, 0.15), 0 0 160px rgba(36, 138, 97, 0.05)",
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Tagline — Word by Word Reveal */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 mb-8 overflow-hidden">
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={wordVariants}
              className={`text-base md:text-xl lg:text-2xl font-poppins tracking-[0.2em] uppercase ${
                word === "STORIES" ? "text-beta font-bold" : "text-tango/70 font-light"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Decorative Divider */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 2.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-beta/40" />
          <motion.span
            className="w-2 h-2 rounded-full bg-beta"
            animate={{
              boxShadow: [
                "0 0 6px rgba(36, 138, 97, 0.4)",
                "0 0 20px rgba(36, 138, 97, 0.7)",
                "0 0 6px rgba(36, 138, 97, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-beta/40" />
        </motion.div>

        {/* Subtitle / Description */}
        <motion.p
          className="text-tango/50 text-xs md:text-sm font-poppins font-light max-w-md leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Crafting visual narratives, brand experiences & digital stories
          that captivate audiences and drive impact.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="mt-10 group relative px-8 py-3.5 rounded-full border border-beta/40 text-tango text-xs md:text-sm font-poppins font-medium tracking-[0.15em] uppercase overflow-hidden transition-colors duration-500 hover:border-beta/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Button glow bg on hover */}
          <span className="absolute inset-0 bg-beta/0 group-hover:bg-beta/10 transition-colors duration-500 rounded-full" />
          <span className="relative z-10 flex items-center gap-2">
            Explore Our Work
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* ─── Bottom Gradient Fade ─── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[8] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #363636 0%, transparent 100%)",
        }}
      />

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <motion.span
          className="text-tango/30 text-[9px] font-poppins tracking-[0.3em] uppercase"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="text-beta/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 stroke-[1.5]" />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <motion.div
        className="absolute top-8 left-8 z-[6] pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-16 h-16 border-l border-t border-beta/30 rounded-tl-md" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-8 z-[6] pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <div className="w-16 h-16 border-r border-b border-beta/30 rounded-br-md" />
      </motion.div>

      {/* Side Text */}
      <motion.span
        className="absolute left-6 top-1/2 -translate-y-1/2 z-[6] pointer-events-none hidden lg:block"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-tango/40 text-[9px] font-poppins tracking-[0.4em] uppercase">
          Est. 2014 — Noozi Productions
        </span>
      </motion.span>

      <motion.span
        className="absolute right-6 top-1/2 -translate-y-1/2 z-[6] pointer-events-none hidden lg:block"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 2.7, duration: 1 }}
      >
        <span className="text-tango/40 text-[9px] font-poppins tracking-[0.4em] uppercase">
          Video • Branding • Digital
        </span>
      </motion.span>
    </section>
  );
};

export default Hero;
