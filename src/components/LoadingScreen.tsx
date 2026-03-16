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
      {/* Lightweight Static Grain Noise Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAP//////////////////////////qO1o9gAAAARRSTlMAHR0d9Q00KAAAAVVJREFUeJxt1D0OwzAMQlE00L13H6Hn2n2E7j41V0hTJEHkP2MbcF7IwgD8Mxb3F/T2Tz29j6L3V3T4/D7S4fcZ/P0XkZ1D2R/l+Yuyvyj7m7I/yPsnZf+k7E/K/krZPyv7F2X/ouwvyv6m7B/K/lv2f1b2x7L/VvYHsv9T9oey/2/Z/1f2/1/2/8v+/8n+/8r+H2R/WfYXsq8oex1lr1H2Hcp+QtlvKPsnZf+k7F+U/ZPsh5ePcv8s989z/xz3L3D/Bvcvcv8E909x/xT3x31f2/oV3A//y6fXj3L/v9y/0v1vcv9y91+jX2jK/KXZP6l/avZf6v+Q/e/of8L+b+m/zv6L2f8y+19m/8vsv5j9p9m/MvsP2X+v7P9S9v8t+2/Z/6Psf2T/j7L/h/0/yv4f9r/M/s/Z/xX7P2X/X+wHn/RerjJ37R4AAAAASUVORK5CYII=")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
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
