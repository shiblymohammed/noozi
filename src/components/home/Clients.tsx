import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Palette, Globe, Megaphone, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Animated Counter ─── */
const AnimatedCounter: React.FC<{ end: number; suffix: string; label: string; delay: number }> = ({
  end, suffix, label, delay
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const step = end / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, end, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: delay / 1000, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-5xl md:text-7xl font-barlow font-black text-alpha tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm font-poppins text-alpha/50 tracking-[0.2em] uppercase font-medium">
        {label}
      </span>
    </motion.div>
  );
};

/* ─── Capability Card ─── */
const CapabilityCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-alpha/[0.03] hover:bg-alpha/[0.07] border border-alpha/[0.08] hover:border-alpha/[0.18] rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: 0.1 + index * 0.12,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(36, 138, 97, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Number tag */}
      <span className="absolute top-4 right-5 text-[10px] font-poppins font-bold text-alpha/15 tracking-widest">
        0{index + 1}
      </span>

      {/* Icon */}
      <div className="mb-5 w-12 h-12 rounded-xl bg-alpha/[0.06] group-hover:bg-beta/10 flex items-center justify-center transition-colors duration-500">
        <span className="text-alpha/40 group-hover:text-beta transition-colors duration-500">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-lg md:text-xl font-barlow font-bold text-alpha uppercase tracking-wide mb-3 group-hover:text-beta/90 transition-colors duration-500">
        {title}
      </h4>

      {/* Description — slides up on hover */}
      <p className="text-sm font-poppins text-alpha/45 leading-relaxed group-hover:text-alpha/65 transition-colors duration-500">
        {description}
      </p>

      {/* Arrow — appears on hover */}
      <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
        <span className="text-xs font-poppins font-semibold text-beta tracking-widest uppercase">
          Learn More
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-beta" />
      </div>
    </motion.div>
  );
};

/* ─── Main Clients Component ─── */
const Clients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based horizontal movement for logos
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  // Refs for text elements
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(text1Ref.current, {
        x: '25%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(text2Ref.current, {
        x: '-25%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(text3Ref.current, {
        x: '25%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    { src: "/images/clients/client.png", alt: "Client 1" },
    { src: "/images/clients/client2.png", alt: "Client 2" },
    { src: "/images/clients/client3png", alt: "Client 3" },
    { src: "/images/clients/client4.png", alt: "Client 4" },
    { src: "/images/clients/client5.png", alt: "Client 5" },
    { src: "/images/clients/client55.png", alt: "Client 55" },
    { src: "/images/clients/client6.png", alt: "Client 6" },
    { src: "/images/clients/client7.png", alt: "Client 7" },
    { src: "/images/clients/client77.png", alt: "Client 77" },
    { src: "/images/clients/client8.png", alt: "Client 8" },
    { src: "/images/clients/client9.png", alt: "Client 9" },
    { src: "/images/clients/client10.png", alt: "Client 10" },
    { src: "/images/clients/client11.png", alt: "Client 11" },
    { src: "/images/clients/client13.png", alt: "Client 13" },
  ];

  const capabilities = [
    {
      icon: <Play className="w-5 h-5" />,
      title: "Video Production",
      description: "Cinematic storytelling from concept to final cut. Commercials, brand films, and content that captures attention.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Brand Identity",
      description: "Strategic brand development that defines who you are. Logos, visual systems, and brand guidelines.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Digital Experience",
      description: "Immersive websites and digital platforms that push boundaries. UI/UX design, web development, and interactive media.",
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Creative Campaigns",
      description: "Bold campaigns that break through the noise. Social media, digital marketing, and launch strategies.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Motion Design",
      description: "Dynamic motion graphics and 2D/3D animations that bring ideas to life with energy and precision.",
    },
  ];

  const stats = [
    { end: 200, suffix: "+", label: "Projects Delivered" },
    { end: 10, suffix: "+", label: "Years Experience" },
    { end: 45, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-tango flex flex-col items-center p-0 m-0 overflow-visible -mt-1">
      {/* Clients Background Image - Top Transition */}
      <img
        src="/images/clientsbg.svg"
        alt="Clients Background"
        className="absolute top-0 md:-top-1 left-0 w-full min-w-full max-w-none h-auto pointer-events-none object-cover z-50 block"
        style={{ width: '100vw' }}
      />

      {/* Client Logos Sliding Carousel */}
      <div className="relative z-30 w-full pt-32 pb-8 overflow-hidden">
        {/* Desktop: Single row */}
        <motion.div
          className="hidden md:flex items-center gap-2 will-change-transform"
          style={{ x }}
        >
          {[...Array(4)].map((_, setIndex) => (
            <React.Fragment key={setIndex}>
              {logos.map((logo, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex items-center justify-center hover:scale-105 transition-all duration-300 flex-shrink-0 bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-sm"
                  style={{ width: '160px', height: '100px' }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[140px] max-h-[80px] w-auto h-auto object-contain brightness-110 contrast-125 hover:brightness-125 hover:contrast-150 transition-all duration-300"
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Mobile: Two rows with opposite directions */}
        <div className="md:hidden flex flex-col gap-3">
          {/* First row - scrolls right */}
          <motion.div
            className="flex items-center gap-1.5 will-change-transform"
            style={{ x }}
          >
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {logos.slice(0, 7).map((logo, index) => (
                  <div
                    key={`row1-${setIndex}-${index}`}
                    className="flex items-center justify-center hover:scale-105 transition-all duration-300 flex-shrink-0 bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-sm"
                    style={{ width: '120px', height: '80px' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-[100px] max-h-[60px] w-auto h-auto object-contain brightness-110 contrast-125 hover:brightness-125 hover:contrast-150 transition-all duration-300"
                      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Second row - scrolls left */}
          <motion.div
            className="flex items-center gap-1.5 will-change-transform"
            style={{ x: xReverse }}
          >
            {[...Array(4)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {logos.slice(7).map((logo, index) => (
                  <div
                    key={`row2-${setIndex}-${index}`}
                    className="flex items-center justify-center hover:scale-105 transition-all duration-300 flex-shrink-0 bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-sm"
                    style={{ width: '120px', height: '80px' }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-[100px] max-h-[60px] w-auto h-auto object-contain brightness-110 contrast-125 hover:brightness-125 hover:contrast-150 transition-all duration-300"
                      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content - Large Heading with Parallax */}
      <div className="relative z-10 w-full px-8 pt-4 pb-12">
        <div className="text-[16vh] md:text-[18vw] leading-[0.75] font-extrabold italic text-center text-alpha uppercase font-barlow overflow-visible">
          <div ref={text1Ref} className="will-change-transform">
            THERE'S
          </div>
          <div ref={text2Ref} className="will-change-transform">
            MORE TO
          </div>
          <div ref={text3Ref} className="will-change-transform">
            EXPLORE
          </div>
        </div>
      </div>

      {/* ─── NEW CONTENT AREA ─── */}

      {/* Decorative Divider */}
      <motion.div
        className="relative z-10 flex items-center gap-4 mb-16"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-alpha/20" />
        <span className="text-alpha/30 text-[10px] font-poppins tracking-[0.4em] uppercase font-medium">
          What We Do
        </span>
        <span className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-alpha/20" />
      </motion.div>

      {/* Capabilities Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {capabilities.map((cap, i) => (
            <CapabilityCard
              key={i}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              index={i}
            />
          ))}

          {/* Featured "See All" Card */}
          <motion.div
            className="group relative bg-alpha hover:bg-alpha/95 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-500 overflow-hidden flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(36, 138, 97, 0.3) 0%, transparent 70%)",
              }}
            />

            <motion.div
              className="w-14 h-14 rounded-full border-2 border-beta/40 flex items-center justify-center mb-4 group-hover:border-beta group-hover:bg-beta/10 transition-all duration-500"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ArrowRight className="w-5 h-5 text-beta group-hover:scale-110 transition-transform duration-300" />
            </motion.div>

            <h4 className="text-lg font-barlow font-bold text-tango uppercase tracking-wide mb-2">
              View All Services
            </h4>
            <p className="text-xs font-poppins text-tango/40 leading-relaxed">
              Discover the full range of what we offer
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 mb-24">
        {/* Top line */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-alpha/15 to-transparent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={i}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 200}
            />
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-alpha/15 to-transparent mt-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-16 md:pb-24 flex flex-col items-center text-center">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-barlow font-black text-alpha leading-tight mb-4 md:mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          LET'S CREATE{" "}
          <span className="text-beta italic">SOMETHING</span>
          <br />
          EXTRAORDINARY
        </motion.h3>

        <motion.p
          className="text-alpha/45 text-xs sm:text-sm md:text-base font-poppins font-light max-w-md md:max-w-lg leading-relaxed mb-6 md:mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          We transform bold ideas into unforgettable experiences. Ready to start your next project with a team that cares as much as you do?
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary CTA */}
          <motion.button
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full bg-alpha text-tango text-xs md:text-sm font-poppins font-semibold tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-beta translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start a Project
              <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>

          {/* Secondary Link */}
          <motion.button
            className="group px-6 md:px-8 py-3 md:py-4 rounded-full border border-alpha/20 hover:border-alpha/40 text-alpha text-xs md:text-sm font-poppins font-medium tracking-[0.1em] uppercase transition-all duration-500 w-full sm:w-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center justify-center gap-2">
              View Our Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Clients Background Image - Bottom Transition */}
      <img
        src="/images/clientsbg.svg"
        alt="Clients Background Bottom"
        className="absolute bottom-0 md:-bottom-1 left-0 w-full min-w-full max-w-none h-auto pointer-events-none object-cover z-50 block rotate-180"
        style={{ width: '100vw' }}
      />
    </section>
  );
};

export default Clients;
