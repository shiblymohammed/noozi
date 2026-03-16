import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Target, Users, Zap, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(text1Ref.current, {
        x: '20%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(text2Ref.current, {
        x: '-15%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(text3Ref.current, {
        x: '25%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-tango overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/herobg.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden">
          <motion.div
            ref={text1Ref}
            className="text-[20vw] font-black italic text-alpha/5 uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            CREATIVE
          </motion.div>
          <motion.div
            ref={text2Ref}
            className="text-[20vw] font-black italic text-alpha/5 uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            AGENCY
          </motion.div>
          <motion.div
            ref={text3Ref}
            className="text-[20vw] font-black italic text-alpha/5 uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            STUDIO
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-beta text-sm md:text-base font-poppins font-semibold tracking-[0.3em] uppercase mb-6">
              About Us
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic text-alpha uppercase font-barlow leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            WE CREATE
            <br />
            <span className="text-beta">EXPERIENCES</span>
          </motion.h1>

          <motion.p
            className="text-alpha/60 text-base md:text-lg font-poppins max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            A creative studio where bold ideas meet exceptional execution. We transform visions into unforgettable visual stories.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-alpha/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-alpha/50 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-beta text-xs md:text-sm font-poppins font-semibold tracking-[0.3em] uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-alpha uppercase font-barlow leading-tight mb-6">
                PUSHING
                <br />
                CREATIVE
                <br />
                <span className="text-beta">BOUNDARIES</span>
              </h2>
              <p className="text-alpha/60 text-base md:text-lg font-poppins leading-relaxed mb-6">
                We believe in the power of creativity to transform businesses and inspire audiences. Our mission is to craft visual experiences that don't just look good—they tell stories, evoke emotions, and drive results.
              </p>
              <p className="text-alpha/60 text-base md:text-lg font-poppins leading-relaxed">
                Every project is an opportunity to push boundaries, challenge conventions, and create something truly extraordinary.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-square bg-alpha/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-beta/20 to-alpha/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-beta/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 md:py-32 px-6 bg-alpha/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-beta text-xs md:text-sm font-poppins font-semibold tracking-[0.3em] uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-alpha uppercase font-barlow leading-tight">
              WHAT DRIVES US
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Innovation",
                description: "We constantly explore new techniques, tools, and approaches to stay ahead of the curve."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Precision",
                description: "Every pixel, every frame, every detail matters. We obsess over quality in everything we create."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collaboration",
                description: "Great work happens when talented people come together with a shared vision and mutual respect."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Passion",
                description: "We love what we do, and it shows in every project we deliver. Creativity is our calling."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Excellence",
                description: "Good isn't good enough. We strive for exceptional results that exceed expectations."
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Authenticity",
                description: "We create work that's genuine, meaningful, and true to your brand's unique story."
              },
            ].map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-alpha/15 to-transparent mb-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
            <StatCounter end={200} suffix="+" label="Projects Delivered" delay={0} />
            <StatCounter end={10} suffix="+" label="Years Experience" delay={200} />
            <StatCounter end={45} suffix="+" label="Happy Clients" delay={400} />
          </div>

          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-alpha/15 to-transparent mt-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-alpha uppercase font-barlow leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            READY TO CREATE
            <br />
            <span className="text-beta">TOGETHER?</span>
          </motion.h2>

          <motion.p
            className="text-alpha/60 text-sm md:text-base font-poppins max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's bring your vision to life. Whether you have a clear idea or just a spark of inspiration, we're here to help you create something extraordinary.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-full bg-alpha text-tango text-sm font-poppins font-semibold tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 w-full sm:w-auto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-beta translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 rounded-full border border-alpha/20 hover:border-alpha/40 text-alpha text-sm font-poppins font-medium tracking-[0.1em] uppercase transition-all duration-500 w-full sm:w-auto"
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
      </section>
    </div>
  );
};

// Value Card Component
const ValueCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="group relative bg-alpha/[0.03] hover:bg-alpha/[0.07] border border-alpha/[0.08] hover:border-alpha/[0.18] rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: 0.1 + index * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(36, 138, 97, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mb-5 w-12 h-12 rounded-xl bg-alpha/[0.06] group-hover:bg-beta/10 flex items-center justify-center transition-colors duration-500">
        <span className="text-alpha/40 group-hover:text-beta transition-colors duration-500">
          {icon}
        </span>
      </div>

      <h3 className="text-xl font-barlow font-bold text-alpha uppercase tracking-wide mb-3 group-hover:text-beta/90 transition-colors duration-500">
        {title}
      </h3>

      <p className="text-sm font-poppins text-alpha/45 leading-relaxed group-hover:text-alpha/65 transition-colors duration-500">
        {description}
      </p>
    </motion.div>
  );
};

// Stat Counter Component
const StatCounter: React.FC<{
  end: number;
  suffix: string;
  label: string;
  delay: number;
}> = ({ end, suffix, label, delay }) => {
  const [count, setCount] = React.useState(0);
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

export default About;
