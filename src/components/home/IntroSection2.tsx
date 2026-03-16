import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroSection2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        y: 100,
        opacity: 0,
      });

      // Animate first paragraph
      gsap.from(paragraph1Ref.current, {
        scrollTrigger: {
          trigger: paragraph1Ref.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        y: 80,
        opacity: 0,
      });

      // Animate second paragraph
      gsap.from(paragraph2Ref.current, {
        scrollTrigger: {
          trigger: paragraph2Ref.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        y: 80,
        opacity: 0,
      });

      // Animate CTA section
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
        y: 60,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-beta flex items-center justify-center overflow-visible z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20 pb-24 md:pb-32">
      <div className="max-w-7xl w-full flex flex-col gap-4 md:gap-6">
        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
          {/* Left Column - Large Heading */}
          <div className="flex items-start">
            <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-alpha">
              For Noozi Production,{" "}
              <span className="text-zigma">creativity meets storytelling</span>{" "}
              to help brands grow in the digital world.
            </h2>
          </div>

          {/* Right Column - Two Paragraphs */}
          <div className="flex flex-col justify-center gap-4 md:gap-5 text-xs md:text-sm lg:text-base">
            {/* First Paragraph */}
            <p ref={paragraph1Ref} className="text-alpha/80 leading-relaxed">
              Based in Calicut, Kerala, we specialize in crafting{" "}
              <span className="font-semibold text-alpha">high-impact Instagram Reel advertisements</span>{" "}
              and short-form video content that captures attention and drives engagement. We work with{" "}
              <span className="font-semibold text-alpha">growing brands, local businesses, and ambitious entrepreneurs</span>{" "}
              who want to stand out in today's fast-moving social media landscape. As a creative video production partner, we collaborate with our clients to transform ideas into{" "}
              <span className="font-semibold text-alpha">scroll-stopping visuals, compelling stories, and results-driven content</span>{" "}
              designed for Instagram and other social platforms. Our focus is simple:{" "}
              <span className="font-semibold text-alpha">create content that connects, engages, and converts</span>.
            </p>

            {/* Second Paragraph */}

          </div>
        </div>

        {/* CTA Section */}

      </div>
    </section>
  );
};

export default IntroSection2;
