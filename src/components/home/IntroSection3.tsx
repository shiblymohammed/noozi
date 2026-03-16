import React, { useRef, useState, useEffect, memo, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, useInView } from 'framer-motion';

const VideoCard: React.FC<{ videoUrl: string; videoId: string; index: number }> = memo(({ videoUrl, videoId, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  // Only mount the heavy iframe if this card comes within 400px of entering the viewport!
  const isInView = useInView(ref, { margin: "400px", once: true });

  // Vimeo thumbnail URL - high quality
  const thumbnailUrl = `https://vumbnail.com/${videoId}.jpg`;

  // Preload thumbnail
  useEffect(() => {
    const img = new Image();
    img.src = thumbnailUrl;
    img.onload = () => setThumbnailLoaded(true);
  }, [thumbnailUrl]);

  const handleLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <div
      ref={ref}
      className="flex-shrink-0 bg-black/20 rounded-md overflow-hidden relative w-[280px] h-[320px] md:w-[420px] md:h-[480.5px] -mt-4 md:mt-0"
      style={{
        filter: 'drop-shadow(20px 30px 15px rgba(0, 0, 0, 0.35))',
        border: 'none',
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
      }}
    >
      {/* Thumbnail with fade transition */}
      {thumbnailLoaded && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
          }}
        />
      )}
      
      {/* Loading placeholder */}
      {!thumbnailLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="w-12 h-12 border-3 border-white/20 border-t-white/60 rounded-full animate-spin" />
        </div>
      )}

      {/* Play icon overlay on thumbnail */}
      {thumbnailLoaded && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}

      {isInView && (
        <iframe
          src={videoUrl}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
          onLoad={handleLoad}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) translateZ(0)',
            width: '100%',
            height: '177.78%',
            minWidth: '100%',
            minHeight: '100%',
            pointerEvents: 'none',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            willChange: 'opacity',
          }}
          title={`Video ${index + 1}`}
        />
      )}
    </div>
  );
});

VideoCard.displayName = 'VideoCard';

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

  const [loopWidth, setLoopWidth] = useState(2760);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: w-[280px] card + gap-6 (24px) = 304px per item => 304 * 6 = 1824px
        setLoopWidth(1824);
      } else {
        // Desktop: w-[420px] card + gap-10 (40px) = 460px per item => 460 * 6 = 2760px
        setLoopWidth(2760);
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const autoScrollX = useMotionValue(0);
  const timeRef = useRef(0);

  // Throttle animation frame updates for better performance
  useAnimationFrame((_, delta) => {
    // Smooth time progression
    timeRef.current += delta;

    // Auto-scroll: divide time to control speed. Modulo by loopWidth to reset seamlessly!
    const autoScroll = -(timeRef.current / 8) % loopWidth;

    // Combine auto-scroll with smooth scroll offset
    const combined = autoScroll + scrollOffset.get();
    
    // Seamless loop: when we've scrolled past one full set, reset position
    if (Math.abs(combined) >= loopWidth) {
      timeRef.current = 0;
    }
    
    autoScrollX.set(combined);
  });

  const textClass = "text-[38vw] md:text-[15vw] leading-[0.75] font-extrabold italic text-alpha uppercase font-barlow relative";

  return (
    <section ref={containerRef} className="relative h-[68vh] md:h-screen w-full bg-alpha overflow-visible md:overflow-hidden pt-16 md:pt-24 z-10">
      {/* Background Pattern Flipped (Top) */}
      <img
        src="/images/introbg.svg"
        alt="Intro Background Flipped"
        className="absolute top-0 right-0 w-[160%] max-w-none z-[1] pointer-events-none scale-x-[-1] scale-y-[-1]"
      />

      {/* Main Content Area - Carousel */}
      <div className="h-full w-[120%] md:w-full flex items-start justify-center relative z-50 overflow-visible -mb-56 md:pb-0 -mt-24 md:-mt-12 -ml-[10%] md:ml-0 pt-0 md:pt-16" style={{ transform: 'rotate(5deg) translateZ(0)' }}>
        <motion.div
          className="flex gap-6 md:gap-10"
          style={{ 
            x: autoScrollX,
            willChange: 'transform',
            transform: 'translateZ(0)', // Force GPU layer
          }}
        >
          {/* Duplicate cards for seamless infinite loop - 2 sets is enough */}
          {[...Array(2)].map((_, setIndex) => {
            // Vimeo video URLs with IDs for thumbnail generation
            const videos = [
              { url: "https://player.vimeo.com/video/1153483177?background=1&autoplay=1&loop=1&muted=1&controls=0", id: "1153483177" },
              { url: "https://player.vimeo.com/video/1153483144?background=1&autoplay=1&loop=1&muted=1&controls=0", id: "1153483144" },
              { url: "https://player.vimeo.com/video/1153483218?background=1&autoplay=1&loop=1&muted=1&controls=0", id: "1153483218" },
              { url: "https://player.vimeo.com/video/1153483192?background=1&autoplay=1&loop=1&muted=1&controls=0", id: "1153483192" },
              { url: "https://player.vimeo.com/video/1153483221?background=1&autoplay=1&loop=1&muted=1&controls=0", id: "1153483221" },
              { url: "https://player.vimeo.com/video/1153483174?background=1&autoplay=1&loop=1&muted=1&controls=0", id: "1153483174" },
            ];

            return (
              <React.Fragment key={setIndex}>
                {videos.map((video, index) => (
                  <VideoCard key={`${setIndex}-${index}`} videoUrl={video.url} videoId={video.id} index={index} />
                ))}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>

      {/* Button below carousel - not tilted */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
        <button
          className="px-6 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            backgroundColor: '#a8c5b4',
            color: '#2d3436',
          }}
        >
          Check out our work
        </button>
      </div>

      {/* Text Overlay Layer - WORK WORK WORK */}
      <div className="absolute inset-0 z-30 flex flex-col justify-start items-start pointer-events-none overflow-visible w-full px-4 -mt-40 -ml-24 md:pt-12 md:ml-0 md:mt-0">
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
          style={{ willChange: 'transform' }}
        >
          <img src="/images/cloud1.svg" alt="" className="w-full" />
        </motion.div>

        {/* 1. WORK - Moving Left */}
        <motion.div 
          style={{ 
            x: x1,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }} 
          className="w-full flex justify-start pl-[25vw]"
        >
          <h1 className={`${textClass}`} style={{ transform: 'translateZ(0)' }}>WORK</h1>
        </motion.div>

        {/* 2. WORK - Moving Right */}
        <motion.div 
          style={{ 
            x: x2,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }} 
          className="w-full flex justify-start pl-[60vw]"
        >
          <h1 className={`${textClass}`} style={{ transform: 'translateZ(0)' }}>WORK</h1>
        </motion.div>

        {/* 3. WORK - Moving Left */}
        <motion.div 
          style={{ 
            x: x3,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }} 
          className="w-full flex justify-start pl-[16vw]"
        >
          <h1 className={`${textClass}`} style={{ transform: 'translateZ(0)' }}>WORK</h1>
        </motion.div>

        {/* 4. WORK - Moving Right */}
        <motion.div 
          style={{ 
            x: x4,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }} 
          className="w-full flex justify-start pl-[30vw]"
        >
          <h1 className={`${textClass}`} style={{ transform: 'translateZ(0)' }}>WORK</h1>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection3;