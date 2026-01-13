import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { LoadingProvider } from '../contexts/LoadingContext';
import SmoothScroll from '../components/SmoothScroll';

const MainLayout: React.FC = () => {
  return (
    <LoadingProvider>
      <Router>
        <SmoothScroll />
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
          {/* Grain Noise Overlay */}
          <div 
            className="fixed inset-0 pointer-events-none z-[9999] opacity-80"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              mixBlendMode: 'multiply',
            }}
          />
          
          <Navbar />
          <main className="flex-grow">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </Router>
    </LoadingProvider>
  );
};

export default MainLayout;