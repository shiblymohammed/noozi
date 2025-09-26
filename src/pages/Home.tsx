import React, { Suspense, memo } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load all home components for better performance and code splitting
const Hero = React.lazy(() => import('../components/home/Hero'));
const Intro = React.lazy(() => import('../components/home/Intro'));
const WhatWeDo = React.lazy(() => import('../components/home/WhatWeDo'));
const Approach = React.lazy(() => import('../components/home/Approach'));
const Portfolio = React.lazy(() => import('../components/home/Portfolio'));
const TeamMembers = React.lazy(() => import('../components/home/TeamMembers'));
const Testimonials = React.lazy(() => import('../components/home/Testimonials'));
const Clients = React.lazy(() => import('../components/home/Clients'));
const Contact = React.lazy(() => import('../components/home/Contact'));
const Outro = React.lazy(() => import('../components/home/Outro'));

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

      {/* Introduction Section */}
      <LazyComponentWrapper>
        <Intro />
      </LazyComponentWrapper>

      {/* What We Do Section */}
      <LazyComponentWrapper>
        <WhatWeDo />
      </LazyComponentWrapper>

      {/* Our Approach Section */}
      <LazyComponentWrapper>
        <Approach />
      </LazyComponentWrapper>

      {/* Portfolio Section */}
      <LazyComponentWrapper>
        <Portfolio />
      </LazyComponentWrapper>

      {/* Team Members Section */}
      <LazyComponentWrapper>
        <TeamMembers />
      </LazyComponentWrapper>

      {/* Testimonials Section */}
      <LazyComponentWrapper>
        <Testimonials />
      </LazyComponentWrapper>

      {/* Clients Section */}
      <LazyComponentWrapper>
        <Clients />
      </LazyComponentWrapper>

      {/* Contact Section */}
      <LazyComponentWrapper>
        <Contact />
      </LazyComponentWrapper>

      {/* Outro Section */}
      <LazyComponentWrapper>
        <Outro />
      </LazyComponentWrapper>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;