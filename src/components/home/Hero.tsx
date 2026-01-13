// Example section component (Hero.tsx)
import React from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const [transformStyle, setTransformStyle] = React.useState({});
  const { scrollY } = useScroll();
  
  // Animate the gradient stop position from 100% (fully visible) to 0% (faded)
  // This ensure the image is fully visible at the start and fades out as you scroll down.
  const gradientStop = useTransform(scrollY, [0, 500], [100, 0]);
  const maskImage = useMotionTemplate`linear-gradient(to bottom, black ${gradientStop}%, transparent 100%)`;

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate position relative to center (-1 to 1)
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);

      // Rotate values (adjust multiplier for intensity)
      const rotateX = -y * 5; // Max 5 degrees tilt (inverted for natural feel)
      const rotateY = x * 5;  // Max 5 degrees tilt

      setTransformStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
        transition: 'transform 0.1s ease-out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full bg-alpha flex items-center justify-center overflow-hidden">
      {/* Background Image with Opacity and 3D Effect - Fixed Position */}
      <motion.img 
        src="/images/herobg.svg" 
        alt="Hero Background"  
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{ 
          ...transformStyle, 
          opacity: 0.05, // Static subtle opacity
          maskImage,     // Dynamic mask
          WebkitMaskImage: maskImage
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 text-beta"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-12 h-12 stroke-[3]" />
      </motion.div>
    </section>
  );
};

export default Hero;
