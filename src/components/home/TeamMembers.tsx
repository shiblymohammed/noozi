import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ─── Team Data ─── */
const teamMembers = [
  {
    name: "Sree Hari",
    role: "Lead Videographer",
    specialty: "Cinematic Narrative",
    image: "/images/team/01.jpeg",
    bio: "Crafting visual symphonies through light and shadow. Sree transforms raw moments into cinematic legacy.",
  },
  {
    name: "Aadish",
    role: "Chief Executive",
    specialty: "Vision & Strategy",
    image: "/images/team/02.jpeg",
    bio: "The architect of Noozi's future. Aadish bridges the gap between disruptive innovation and timeless design.",
  },
  {
    name: "Mayoora",
    role: "HR Director",
    specialty: "Talent Development",
    image: "/images/team/03.jpeg",
    bio: "Cultivating creative culture and nurturing talent. Mayoora ensures our team thrives in an inspiring environment.",
  },
  {
    name: "Anu",
    role: "Senior Editor",
    specialty: "Post-Production",
    image: "/images/team/04.jpeg",
    bio: "Transforming raw footage into polished masterpieces. Anu brings stories to life with stunning precision.",
  },
  {
    name: "Muhammed Anees",
    role: "Design Director",
    specialty: "Brand Identity",
    image: "/images/team/05.jpeg",
    bio: "Crafting compelling visual identities. Anees creates memorable experiences that drive engagement.",
  },
];

const TeamMembers: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const nextMember = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const activeMember = teamMembers[index];

  return (
    <section className="relative w-full min-h-screen bg-alpha overflow-hidden flex items-center justify-center py-20 md:py-32">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 will-change-transform">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #248a61 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'translateZ(0)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeMember.name}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 0.03, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ 
              duration: shouldReduceMotion ? 0 : 1.2, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-[20vw] md:text-[25vw] font-black text-tango whitespace-nowrap uppercase leading-none font-barlow will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            {activeMember.name.split(' ')[0]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Info */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.name}
              initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 50, filter: "blur(8px)" }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.8, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <motion.span 
                className="text-zigma uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block font-poppins"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {activeMember.specialty}
              </motion.span>
              
              <motion.h3 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-tango mb-2 leading-tight font-barlow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {activeMember.name}
              </motion.h3>
              
              <motion.p 
                className="text-lg md:text-xl text-tango/50 font-light mb-6 md:mb-8 italic font-poppins"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {activeMember.role}
              </motion.p>
              
              <motion.p 
                className="text-tango/70 leading-relaxed max-w-md text-sm md:text-base border-l-2 border-beta/30 pl-4 md:pl-6 font-poppins"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                {activeMember.bio}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <motion.div 
            className="flex items-center gap-4 md:gap-6 pt-6 md:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button 
              onClick={prevMember}
              className="group relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-beta/20 rounded-full hover:border-beta hover:bg-beta/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous member"
            >
              <svg className="w-4 h-4 text-tango group-hover:text-beta transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <div className="h-[2px] w-20 md:w-24 bg-tango/10 relative rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-beta rounded-full"
                animate={{ width: `${((index + 1) / teamMembers.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <motion.button 
              onClick={nextMember}
              className="group relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-beta/20 rounded-full hover:border-beta hover:bg-beta/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next member"
            >
              <svg className="w-4 h-4 text-tango group-hover:text-beta transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Indicators */}
          <div className="flex gap-2">
            {teamMembers.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setDirection(idx > index ? 1 : -1);
                  setIndex(idx);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === index ? 'bg-beta w-8' : 'bg-tango/20 w-1 hover:bg-tango/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to member ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ 
                opacity: 0, 
                x: direction * 150, 
                scale: 0.9,
                rotateY: direction * 15,
                filter: "blur(10px)"
              }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                rotateY: 0,
                filter: "blur(0px)"
              }}
              exit={{ 
                opacity: 0, 
                x: direction * -150, 
                scale: 0.9,
                rotateY: direction * -15,
                filter: "blur(10px)"
              }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.9, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative w-full max-w-[300px] h-[400px] md:max-w-[400px] md:h-[550px] will-change-transform"
              style={{ 
                transform: 'translateZ(0)',
                perspective: '1000px',
              }}
            >
              {/* Decorative Border */}
              <motion.div 
                className="absolute inset-0 border-2 border-beta/20 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-beta/5 border border-beta/10">
                <motion.img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  loading="lazy"
                  style={{ transform: 'translateZ(0)' }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-alpha/80 via-transparent to-transparent" />
              </div>

              {/* Floating Number */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 text-[80px] md:text-[120px] text-beta/10 font-black font-barlow leading-none will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                0{index + 1}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
