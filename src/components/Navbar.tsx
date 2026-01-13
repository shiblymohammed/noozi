import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate the angle between the center of the eye and the mouse cursor
      const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
      
      // Convert radians to degrees and add 90 degrees if the original image is facing up, 
      // or 0 if facing right. Assuming typical "up" or "forward" facing, let's try standard mapping.
      // Math.atan2(0, 1) is 0 (right). Math.atan2(1, 0) is PI/2 (down).
      // If image pupil is at top (12 o'clock), we need to add 90deg to align 0deg (right) to 3 o'clock?
      // Actually, if image is facing UP (12 o'clcok), and we want it to look Right (0 rad), that's +90deg rotation.
      // Let's assume standard orientation and adjust. 
      // angle * (180 / Math.PI) gives degrees.
      // Let's assume standard rotation first.
      const degrees = angle * (180 / Math.PI);
      
      // The image is facing right by default (0 degrees).
      // Math.atan2(y, x) returns 0 for the positive X axis (right).
      // So no offset is needed.
      setRotation(degrees);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-24 lg:px-44 xl:px-60 py-6 fixed top-0 left-0 z-50 bg-transparent">
      {/* Left Logo */}
      <div className="flex-shrink-0">
        <img 
          src="/images/logo.png" 
          alt="Techy Scouts" 
          className="h-10 object-contain" 
        />
      </div>

      {/* Center Navigation Links */}
      <div className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/5 rounded-full px-8 py-3 shadow-lg shadow-black/10">
        <ul className="flex items-center space-x-8 text-white text-xs font-medium tracking-widest font-poppins">
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#c9654f] transition-colors group">
            SERVICES <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 opacity-70" />
          </li>
          <li>
            <Link to="/work" className="cursor-pointer hover:text-[#c9654f] transition-colors">
              WORK
            </Link>
          </li>
          <li className="cursor-pointer hover:text-[#c9654f] transition-colors">
            ABOUT
          </li>
        </ul>
      </div>

      {/* Right 'Let's Talk' Button */}
      <div className="flex-shrink-0">
        <button className="relative flex items-center gap-2 bg-beta shadow-[0_0_20px_rgba(201,101,79,0.35)] hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(201,101,79,0.5)] transition-all duration-300 rounded-full pl-2 pr-6 py-3 group overflow-hidden">
          {/* Top highlight for 3D effect */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          
          <div 
            ref={eyeRef}
            className="relative w-6 h-6 rounded-full bg-black/10 flex items-center justify-center overflow-hidden shadow-inner"
          >
             <img 
               src="/images/eyeball.png" 
               alt="Eye" 
               className="w-full h-full object-cover"
               style={{ transform: `rotate(${rotation}deg)` }}
             />
          </div>
          <span className="relative text-white font-bold text-xs uppercase tracking-wider font-paytone leading-none drop-shadow-sm">
            Let's Talk
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
