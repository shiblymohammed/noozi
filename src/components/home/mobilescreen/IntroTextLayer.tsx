import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroTextLayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);
  const text6Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text 1 - move left
      gsap.to(text1Ref.current, {
        x: '-160%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 2 - move right
      gsap.to(text2Ref.current, {
        x: '40%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 3 - move left
      gsap.to(text3Ref.current, {
        x: '-60%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 4 - move right
      gsap.to(text4Ref.current, {
        x: '40%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 5 - move left
      gsap.to(text5Ref.current, {
        x: '-60%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 6 - move right
      gsap.to(text6Ref.current, {
        x: '60%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const textClass = "text-[15vw] leading-[0.75] font-extrabold italic text-[#e3d9d1] uppercase font-barlow relative";

  return (
    <div ref={containerRef} className="absolute inset-0 z-30 flex flex-col justify-start -mt-[2vh] pt-0 pointer-events-none overflow-visible w-full px-4">
      
      {/* 1. creative- */}
      <div ref={text1Ref} className="w-full flex justify-start pl-[60vw]">
        <h1 className={`${textClass}`}>creative-</h1>
      </div>

      {/* 2. visual */}
      <div ref={text2Ref} className="w-full flex justify-start pl-[5vw]"> 
        <h1 className={`${textClass}`}>visual</h1>  
      </div>

      {/* 3. story */}
      <div ref={text3Ref} className="w-full flex justify-start pl-[35vw]">
        <h1 className={`${textClass}`}>story</h1>
      </div>

      {/* 4. telling for */}
      <div ref={text4Ref} className="w-full flex justify-start pl-[2vw]">
        <h1 className={`${textClass}`}>telling for</h1>
      </div>
      
      {/* 5. growing-brands */}
      <div ref={text5Ref} className="w-full flex justify-start pl-[25vw]">
        <h1 className={`${textClass}`}>growing-brands</h1>
      </div>
      
      {/* 6. Curved line */}
      <div ref={text6Ref} className="w-full flex justify-start pl-[15vw] mt-24 mb-8">
        <svg width="35vw" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M5 25 Q 150 0 295 25 Q 150 15 5 25 Z" 
            fill="#e3d9d1" 
          />
        </svg>
      </div>

      {/* Clouds - randomly placed with horizontal movement */}
      <div className="relative w-full h-24 -mt-4">
        <motion.div 
          className="absolute top-0 left-[10vw] w-[4vw] opacity-80"
          animate={{
            x: [0, 30, -20, 40, 0],
            y: [0, -15, 10, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-2 left-[60vw] w-[5vw] opacity-70"
          animate={{
            x: [0, -40, 20, -30, 0],
            y: [0, 10, -20, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img src="/images/cloud2.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-8 left-[25vw] w-[4.5vw] opacity-90"
          animate={{
            x: [0, 25, -35, 15, 0],
            y: [0, -10, 5, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-1 left-[75vw] w-[6vw] opacity-75"
          animate={{
            x: [0, -25, 35, -15, 0],
            y: [0, 12, -8, 18, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img src="/images/cloud2.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-5 left-[40vw] w-[3.5vw] opacity-65"
          animate={{
            x: [0, -30, 15, -25, 0],
            y: [0, 8, -12, 6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-10 left-[50vw] w-[5.5vw] opacity-70"
          animate={{
            x: [0, 35, -15, 20, 0],
            y: [0, -18, 8, -10, 0],
          }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <img src="/images/cloud2.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-3 left-[85vw] w-[4vw] opacity-60"
          animate={{
            x: [0, -20, 30, -10, 0],
            y: [0, 14, -6, 12, 0],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        <motion.div 
          className="absolute top-12 left-[5vw] w-[3vw] opacity-55"
          animate={{
            x: [0, 25, -30, 18, 0],
            y: [0, -8, 14, -12, 0],
          }}
          transition={{
            duration: 11.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <img src="/images/cloud2.svg" alt="" className="w-full" />
        </motion.div>
      </div>

    </div>
  );
};

export default IntroTextLayer;
