import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const services = [
    {
      title: "Instagram Reels",
      subtitle: "Short-Form Video Ads",
      description: "High-impact vertical video content designed to stop the scroll and drive engagement on Instagram.",
      features: [
        "15-60 second reels",
        "Trending audio integration",
        "Hook-driven storytelling",
        "Platform-optimized editing"
      ],
      icon: "📱",
      color: "beta"
    },
    {
      title: "Brand Videos",
      subtitle: "Visual Identity",
      description: "Compelling brand stories that communicate your values and connect with your audience emotionally.",
      features: [
        "Brand storytelling",
        "Product showcases",
        "Company culture videos",
        "Mission & vision content"
      ],
      icon: "🎬",
      color: "zigma"
    },
    {
      title: "Social Media Content",
      subtitle: "Multi-Platform Strategy",
      description: "Scroll-stopping content tailored for Instagram, Facebook, YouTube Shorts, and other platforms.",
      features: [
        "Platform-specific formats",
        "Content calendars",
        "Engagement-focused",
        "Consistent brand voice"
      ],
      icon: "✨",
      color: "tango"
    },
    {
      title: "Product Videos",
      subtitle: "E-commerce & Retail",
      description: "Dynamic product demonstrations that showcase features, benefits, and drive purchase decisions.",
      features: [
        "Product demos",
        "Unboxing videos",
        "Feature highlights",
        "Lifestyle integration"
      ],
      icon: "🛍️",
      color: "beta"
    },
    {
      title: "Event Coverage",
      subtitle: "Capture the Moment",
      description: "Professional event documentation that preserves memories and creates shareable highlight content.",
      features: [
        "Live event filming",
        "Highlight reels",
        "Behind-the-scenes",
        "Social media cuts"
      ],
      icon: "🎥",
      color: "zigma"
    },
    {
      title: "Content Strategy",
      subtitle: "Planning & Consulting",
      description: "Strategic guidance to help you plan, create, and distribute video content that achieves your goals.",
      features: [
        "Content planning",
        "Audience analysis",
        "Platform strategy",
        "Performance tracking"
      ],
      icon: "📊",
      color: "tango"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-alpha overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 md:px-8 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #248a61 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-zigma text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              What We Do
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-tango mb-6 font-barlow leading-tight">
              Our Services
            </h1>
            
            <p className="text-lg md:text-xl text-tango/70 max-w-3xl mx-auto leading-relaxed font-poppins">
              From concept to creation, we craft video content that captures attention, 
              tells your story, and drives real results on social media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-beta/10 border border-beta/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-tango mb-6 font-barlow">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg md:text-xl text-tango/70 mb-8 font-poppins">
              Let's discuss your project and bring your vision to life with compelling video content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919495885632?text=Hello!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-beta text-alpha rounded-full font-semibold text-sm md:text-base uppercase tracking-wider hover:bg-beta/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start a Project
              </a>
              <a
                href="tel:+919495885632"
                className="px-8 py-4 bg-transparent border-2 border-beta text-beta rounded-full font-semibold text-sm md:text-base uppercase tracking-wider hover:bg-beta hover:text-alpha transition-all duration-300 hover:scale-105"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component
const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-beta/5 border border-beta/10 rounded-2xl p-6 md:p-8 hover:bg-beta/10 hover:border-beta/20 transition-all duration-500"
    >
      {/* Icon */}
      <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-tango mb-2 font-barlow">
        {service.title}
      </h3>
      
      {/* Subtitle */}
      <p className="text-sm md:text-base text-zigma font-semibold uppercase tracking-wider mb-4">
        {service.subtitle}
      </p>

      {/* Description */}
      <p className="text-sm md:text-base text-tango/70 mb-6 leading-relaxed font-poppins">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-tango/60">
            <span className="text-beta mt-1">→</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-beta/30 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default Services;
