import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const fullText = "NOOZI PRODUCTIONS";

  useEffect(() => {
    const duration = 2500; // slightly less than 3s
    const interval = 25;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const charsRevealed = Math.floor((progress / 100) * fullText.length);

  return (
    <motion.div 
      className="fixed inset-0 z-[10000] bg-alpha flex flex-col items-center justify-center font-barlow overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Grain Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="relative z-20 flex flex-col items-center w-full px-4 md:px-10">
        
        {/* Revealed Text */}
        <div className="flex flex-wrap justify-center text-center">
             <h1 className="text-[10vw] md:text-[8vw] leading-none font-extrabold italic uppercase text-tango tracking-tighter">
            {fullText.split('').map((char, index) => (
              <span 
                key={index} 
                className="transition-opacity duration-75"
                style={{ opacity: index < charsRevealed ? 1 : 0.1 }} // 0.1 opacity for unrevealed to hold shape but stay dim/invisible
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Loading Bar */}
        <div className="w-64 md:w-96 h-1 bg-gray-700/30 overflow-hidden mt-8 rounded-full">
          <motion.div 
            className="h-full bg-tango"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.05 }}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
