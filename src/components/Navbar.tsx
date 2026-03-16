import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ContactModal from "./ContactModal";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eyeRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smooth out the mouse values to avoid jitter
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a derived transform value calculating the rotation angle based on mouse position
  const rotateAngle = useTransform([smoothX, smoothY], ([x, y]) => {
    if (!eyeRef.current) return 0;
    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle in degrees
    const angle = Math.atan2((y as number) - centerY, (x as number) - centerX);
    return angle * (180 / Math.PI);
  });

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
          <li>
            <Link to="/services" className="flex items-center gap-1 cursor-pointer hover:text-[#c9654f] transition-colors group">
              SERVICES <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 opacity-70" />
            </Link>
          </li>
          <li>
            <Link to="/work" className="cursor-pointer hover:text-[#c9654f] transition-colors">
              WORK
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-[#c9654f] transition-colors">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer hover:text-[#c9654f] transition-colors">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Right 'Let's Talk' Button */}
      <div className="flex-shrink-0">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative flex items-center gap-2 bg-beta shadow-[0_0_20px_rgba(201,101,79,0.35)] hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(201,101,79,0.5)] transition-all duration-300 rounded-full pl-2 pr-6 py-3 group overflow-hidden"
        >
          {/* Top highlight for 3D effect */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

          <div
            ref={eyeRef}
            className="relative w-6 h-6 rounded-full bg-black/10 flex items-center justify-center overflow-hidden shadow-inner"
          >
            <motion.img
              src="/images/eyeball.png"
              alt="Eye"
              className="w-full h-full object-cover"
              style={{ rotate: rotateAngle }}
            />
          </div>
          <span className="relative text-white font-bold text-xs uppercase tracking-wider font-paytone leading-none drop-shadow-sm">
            Let's Talk
          </span>
        </button>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
