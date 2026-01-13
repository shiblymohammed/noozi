import React, { Suspense, memo } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load all home components for better performance and code splitting
const Hero = React.lazy(() => import('../components/home/Hero'));
const IntroTextLayer = React.lazy(() => import('../components/home/IntroTextLayer'));
const Intro = React.lazy(() => import('../components/home/Intro'));
const IntroSection2 = React.lazy(() => import('../components/home/IntroSection2'));
const IntroSection3 = React.lazy(() => import('../components/home/IntroSection3'));
const WhatWeDo = React.lazy(() => import('../components/home/WhatWeDo'));
const Clients = React.lazy(() => import('../components/home/Clients'));
const Contact = React.lazy(() => import('../components/home/Contact'));

// Optimized component wrapper with Suspense
const LazyComponentWrapper: React.FC<{ children: React.ReactNode }> = memo(({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
));

LazyComponentWrapper.displayName = 'LazyComponentWrapper';

const Home: React.FC = memo(() => {
  return (
    <div className="home-page">
      {/* Hero Section - First impression, load immediately */}
      <LazyComponentWrapper>
        <Hero />
      </LazyComponentWrapper>

      {/* Unified Intro Section with Text Overlay */}
      <div className="relative w-full">
        <LazyComponentWrapper>
          <IntroTextLayer />
        </LazyComponentWrapper>

        <LazyComponentWrapper>
          <Intro />
        </LazyComponentWrapper>

        <LazyComponentWrapper>
          <IntroSection2 />
        </LazyComponentWrapper>

        <LazyComponentWrapper>
          <IntroSection3 />
        </LazyComponentWrapper>
      </div>

      {/* Clients Section */}
      <LazyComponentWrapper>
        <Clients />
      </LazyComponentWrapper>

      {/* What We Do Section */}
      <LazyComponentWrapper>
        <WhatWeDo />
      </LazyComponentWrapper>

      {/* Contact Section */}
      <LazyComponentWrapper>
        <Contact />
      </LazyComponentWrapper>












    </div>
  );
});

Home.displayName = 'Home';

export default Home;