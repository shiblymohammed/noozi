import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';

const IntroSection3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Alternating movement directions for each WORK line
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);   // Move left
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);    // Move right
  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);  // Move left
  const x4 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);    // Move right

  // Carousel scroll-based offset - direct transform without spring for better performance
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [-100, -800]);
  
  // Auto-scroll animation
  const autoScrollX = useMotionValue(0);
  const timeRef = useRef(0);
  
  useAnimationFrame((_, delta) => {
    // Smooth time progression
    timeRef.current += delta;
    // Auto-scroll: moves -2580px over 25 seconds, then loops
    const autoScroll = -(timeRef.current / 25000) * 2580 % 2580;
    // Combine auto-scroll with smooth scroll offset
    autoScrollX.set(autoScroll + scrollOffset.get());
  });


  const textClass = "text-[15vw] leading-[0.75] font-extrabold italic text-alpha uppercase font-barlow relative";

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-alpha overflow-hidden -mt-2">
      {/* Background Pattern Flipped (Top) */}
      <img 
        src="/images/introbg.svg" 
        alt="Intro Background Flipped" 
        className="absolute top-0 right-0 w-[160%] max-w-none z-[1] pointer-events-none scale-x-[-1] scale-y-[-1]" 
      />

      {/* Main Content Area - Carousel */}
      <div className="h-full w-full flex items-center justify-center relative z-40 overflow-hidden" style={{ transform: 'rotate(5deg)' }}>
        <motion.div 
          className="flex gap-10"
          style={{ x: autoScrollX }}
        >
          {/* Duplicate cards for seamless infinite loop - reduced to 2 sets for performance */}
          {[...Array(2)].map((_, setIndex) => {
            // Vimeo video URLs with controls hidden and background mode
            const videos = [
              "https://player.vimeo.com/video/1153483177?background=1&autoplay=1&loop=1&muted=1&controls=0",
              "https://player.vimeo.com/video/1153483144?background=1&autoplay=1&loop=1&muted=1&controls=0",
              "https://player.vimeo.com/video/1153483218?background=1&autoplay=1&loop=1&muted=1&controls=0",
              "https://player.vimeo.com/video/1153483192?background=1&autoplay=1&loop=1&muted=1&controls=0",
              "https://player.vimeo.com/video/1153483221?background=1&autoplay=1&loop=1&muted=1&controls=0",
              "https://player.vimeo.com/video/1153483174?background=1&autoplay=1&loop=1&muted=1&controls=0",
            ];
            
            return (
              <React.Fragment key={setIndex}>
                {videos.map((videoUrl, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="flex-shrink-0 bg-black rounded-md overflow-hidden relative"
                    style={{
                      width: '420px',
                      height: '480.5px', // 4:5 ratio
                      filter: 'drop-shadow(20px 30px 15px rgba(0, 0, 0, 0.35))',
                      border: 'none',
                    }}
                  >
                    <iframe 
                      src={videoUrl}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '177.78%', // Maintain 9:16 aspect ratio, crop to fit
                        minWidth: '100%',
                        minHeight: '100%',
                        pointerEvents: 'none', // Prevent iframes from intercepting scroll
                      }}
                      title={`Video ${index + 1}`}
                    />
                  </div>
                ))}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>

      {/* Button below carousel - not tilted */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
        <button 
          className="px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            backgroundColor: '#a8c5b4',
            color: '#2d3436',
          }}
        >
          Check out our work
        </button>
      </div>

      {/* Text Overlay Layer - WORK WORK WORK */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-start pointer-events-none overflow-visible w-full px-4">
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
        
        {/* 1. WORK - Moving Left */}
        <motion.div style={{ x: x1 }} className="w-full flex justify-start pl-[25vw]">
          <h1 className={`${textClass}`}>WORK</h1>
        </motion.div>

        {/* 2. WORK - Moving Right */}
        <motion.div style={{ x: x2 }} className="w-full flex justify-start pl-[60vw]">
          <h1 className={`${textClass}`}>WORK</h1>
        </motion.div>
    

        {/* 3. WORK - Moving Left */}
        <motion.div style={{ x: x3 }} className="w-full flex justify-start pl-[16vw]">
          <h1 className={`${textClass}`}>WORK</h1>
        </motion.div>

        {/* 4. WORK - Moving Right */}
        <motion.div style={{ x: x4 }} className="w-full flex justify-start pl-[30vw]">
          <h1 className={`${textClass}`}>WORK</h1>
        </motion.div>

      </div>
    </section>
  );
};

export default IntroSection3;
