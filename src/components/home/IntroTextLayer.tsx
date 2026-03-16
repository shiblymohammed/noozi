import React, { useRef, useEffect } from 'react';

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
  const text7Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const animationMultiplier = isMobile ? 1.5 : 1; // Faster on mobile
    
    const ctx = gsap.context(() => {
      // Animate text 1 - move left
      gsap.to(text1Ref.current, {
        x: `-${122 * animationMultiplier}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate text 2 - move right
      gsap.to(text2Ref.current, {
        x: `${42 * animationMultiplier}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate text 3 - move left
      gsap.to(text3Ref.current, {
        x: `-${45 * animationMultiplier}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate text 4 - move right
      gsap.to(text4Ref.current, {
        x: `${25 * animationMultiplier}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate text 5 - move left
      gsap.to(text5Ref.current, {
        x: `-${35 * animationMultiplier}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate text 6 - move right
      gsap.to(text6Ref.current, {
        x: `${20 * animationMultiplier}%`,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Animate text 7 - move left
      gsap.to(text7Ref.current, {
        x: `${20 * animationMultiplier}%`,
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

  const textClass = "text-[25vw] md:text-[15vw] leading-[0.75] font-extrabold italic text-[#e3d9d1] uppercase font-barlow relative";

  return (
    <div ref={containerRef} className="absolute inset-0 z-30 flex flex-col justify-start mt-[8vh] pt-0 pointer-events-none overflow-visible w-full px-4 -ml-8 md:ml-0">

      {/* 1. creative- */}
      <div ref={text1Ref} className="w-full flex justify-start pl-[59vw] will-change-transform">
        <h1 className={`${textClass}`}>creative</h1>
      </div>

      {/* 2. visual */}
      <div ref={text2Ref} className="w-full flex justify-start pl-[5vw] will-change-transform">
        <h1 className={`${textClass}`}>agency</h1>
      </div>

      {/* 3. story */}
      <div ref={text3Ref} className="w-full flex justify-start pl-[55vw] will-change-transform">
        <h1 className={`${textClass}`}>for</h1>
      </div>

      {/* 4. telling for */}
      <div ref={text4Ref} className="w-full flex justify-start pl-[2vw] will-change-transform">
        <h1 className={`${textClass}`}>visual</h1>
      </div>

      {/* 5. brands */}
      <div ref={text5Ref} className="w-full flex justify-start pl-[35vw] will-change-transform">
        <h1 className={`${textClass}`}>brands</h1>
      </div>

      {/* 6. & production */}
      <div ref={text6Ref} className="w-full flex justify-start pl-[2vw] will-change-transform">
        <h1 className={`${textClass} whitespace-nowrap`}>& production</h1>
      </div>

      {/* 7. Curved line */}
      <div ref={text7Ref} className="w-full flex justify-start pl-[20vw] mt-12 mb-4 will-change-transform">
        <svg width="35vw" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 25 Q 150 0 295 25 Q 150 15 5 25 Z"
            fill="#d5d4d3ff"
          />
        </svg>
      </div>

    </div>
  );
};

export default IntroTextLayer;