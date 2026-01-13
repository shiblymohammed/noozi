import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based horizontal movement - direct linear transform for smooth movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Refs for text elements
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text 1 - move right
      gsap.to(text1Ref.current, {
        x: '15%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 2 - move left
      gsap.to(text2Ref.current, {
        x: '-20%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animate text 3 - move right
      gsap.to(text3Ref.current, {
        x: '25%',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const logos = [
    { src: "/images/clients/67e2cffd986c1fedc21ce500_ZWDG.png", alt: "ZWDG" },
    { src: "/images/clients/67e2cffd9ca61421d3e59b47_Arlande.png", alt: "Arlande" },
    { src: "/images/clients/icon-brands-sxsw.svg", alt: "VA Company" },
    { src: "/images/clients/67e2cffdb3fc99334ad40ff8_Menzis.png", alt: "Menzis" },
    { src: "/images/clients/67e2cffdd55b3b26895e45e2_ANVA.png", alt: "ANVA" },
  ];

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-tango flex flex-col items-center p-0 m-0">
       {/* Clients Background Image - Top Transition */}
       <img 
        src="/images/clientsbg.svg" 
        alt="Clients Background" 
        className="absolute -top-24 left-0 w-screen min-w-full max-w-none h-auto pointer-events-none object-cover z-20"
      />
      
      {/* Client Logos Sliding Carousel */}
      <div className="relative z-30 w-full pt-32 pb-16 overflow-hidden">
        <motion.div 
          className="flex items-center gap-16"
          style={{ x }}
        >
          {/* Duplicate logos 4 times for seamless scrolling */}
          {[...Array(4)].map((_, setIndex) => (
            <React.Fragment key={setIndex}>
              {logos.map((logo, index) => (
                <div 
                  key={`${setIndex}-${index}`}
                  className="h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex-shrink-0"
                  style={{ minWidth: '100px' }}
                >
                  <img 
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      
      {/* Main Content - Large Heading with Parallax */}
      <div className="relative z-10 w-full px-8 pt-16 pb-32">
        <div className="text-[15vw] leading-[0.75] font-extrabold italic text-center text-alpha uppercase font-barlow overflow-visible">
          <div ref={text1Ref}>
            THERE'S
          </div>
          <div ref={text2Ref}>
            MORE TO
          </div>
          <div ref={text3Ref}>
            EXPLORE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
