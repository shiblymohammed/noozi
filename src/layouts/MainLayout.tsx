import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { LoadingProvider } from '../contexts/LoadingContext';

import LoadingScreen from '../components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

const MainLayout: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingProvider>
      <AnimatePresence mode="wait">
        {showSplash && <LoadingScreen />}
      </AnimatePresence>
      
      <Router>

        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          {/* Lightweight Static Grain Noise Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAP//////////////////////////qO1o9gAAAARRSTlMAHR0d9Q00KAAAAVVJREFUeJxt1D0OwzAMQlE00L13H6Hn2n2E7j41V0hTJEHkP2MbcF7IwgD8Mxb3F/T2Tz29j6L3V3T4/D7S4fcZ/P0XkZ1D2R/l+Yuyvyj7m7I/yPsnZf+k7E/K/krZPyv7F2X/ouwvyv6m7B/K/lv2f1b2x7L/VvYHsv9T9oey/2/Z/1f2/1/2/8v+/8n+/8r+H2R/WfYXsq8oex1lr1H2Hcp+QtlvKPsnZf+k7F+U/ZPsh5ePcv8s989z/xz3L3D/Bvcvcv8E909x/xT3x31f2/oV3A//y6fXj3L/v9y/0v1vcv9y91+jX2jK/KXZP6l/avZf6v+Q/e/of8L+b+m/zv6L2f8y+19m/8vsv5j9p9m/MvsP2X+v7P9S9v8t+2/Z/6Psf2T/j7L/h/0/yv4f9r/M/s/Z/xX7P2X/X+wHn/RerjJ37R4AAAAASUVORK5CYII=")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '100px 100px',
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