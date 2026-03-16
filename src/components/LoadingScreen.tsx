import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const fullText = "NOOZI PRODUCTIONS";

  useEffect(() => {
    // Faster loading - reduced from 2500ms to 1200ms
    const duration = 1200;
    const interval = 20;
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
      exit={{ 
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
      }}
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

      <motion.div 
        className="relative z-20 flex flex-col items-center w-full px-4 md:px-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo/Brand */}
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/logo.png"
            alt="Noozi Productions"
            className="h-16 md:h-20 object-contain"
          />
        </motion.div>
        
        {/* Revealed Text */}
        <div className="flex flex-wrap justify-center text-center mb-8">
          <h1 className="text-[8vw] md:text-[6vw] leading-none font-black italic uppercase text-tango tracking-tight">
            {fullText.split('').map((char, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: index < charsRevealed ? 1 : 0.1 }}
                transition={{ duration: 0.1 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Modern Loading Bar */}
        <div className="w-64 md:w-96 h-1.5 bg-tango/10 overflow-hidden rounded-full relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-tango via-beta to-tango rounded-full relative"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.05 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-tango blur-sm opacity-50" />
          </motion.div>
        </div>

        {/* Progress Percentage */}
        <motion.div 
          className="mt-4 text-tango/60 text-sm font-poppins font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.floor(progress)}%
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
