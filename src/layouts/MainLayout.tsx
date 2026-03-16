import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { LoadingProvider } from '../contexts/LoadingContext';
import Lenis from '@studio-freight/lenis';
import LoadingScreen from '../components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

const MainLayout: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const grainCanvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Balanced duration for smooth flow
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smoother deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7, // Balanced multiplier for heavy but smooth scroll
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Generate grain texture
  useEffect(() => {
    const canvas = grainCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = 400; // Increased size for more grain detail
    const h = 400;
    canvas.width = w;
    canvas.height = h;

    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.random() * 255;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 35; // Reduced from 60 to 35 for subtler grain
    }
    
    ctx.putImageData(imageData, 0, 0);
  }, []);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip splash screen for returning visitors in same session
      setShowSplash(false);
      setIsLoading(false);
    } else {
      // Show splash for first-time visitors
      sessionStorage.setItem('hasVisited', 'true');
      
      // Faster loading - reduced from 3000ms to 1500ms
      const timer = setTimeout(() => {
        setShowSplash(false);
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <LoadingProvider>
      <AnimatePresence mode="wait">
        {showSplash && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      <Router>
        <div className={`min-h-screen flex flex-col relative overflow-x-hidden transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {/* Enhanced Grain Overlay using Canvas */}
          <canvas
            ref={grainCanvasRef}
            className="fixed inset-0 pointer-events-none z-[9999] w-full h-full opacity-20"
            style={{
              mixBlendMode: 'overlay',
              imageRendering: 'pixelated',
            }}
          />
          
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
          
          {/* WhatsApp Button */}
          <WhatsAppButton />
        </div>
      </Router>
    </LoadingProvider>
  );
};

export default MainLayout;