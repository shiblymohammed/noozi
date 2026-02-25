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
          scrub: 1,
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
          scrub: 1,
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
          scrub: 1,
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
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-beta flex items-center justify-center overflow-hidden z-10 px-8 md:px-16 py-32 md:py-48">
      <div className="max-w-7xl w-full flex flex-col gap-16">
        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Large Heading */}
          <div className="flex items-start">
            <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-alpha">
              For over{" "}
              <span className="text-zigma">10 years</span>{" "}
              we have been developing brands, concepts, campaigns and activations at the intersection of creative communication and commerce.
            </h2>
          </div>

          {/* Right Column - Two Paragraphs */}
          <div className="flex flex-col justify-center gap-8 text-sm md:text-base">
            {/* First Paragraph */}
            <p ref={paragraph1Ref} className="text-alpha/80 leading-relaxed">
              We work for challengers who{" "}
              <span className="font-semibold text-alpha">want to conquer markets</span>{" "}
              and market leaders who want to{" "}
              <span className="font-semibold text-alpha">stay one step ahead of</span>{" "}
              the rest. As a strategic, creative partner, we work together to reposition your organization or create campaigns and activations with{" "}
              <span className="font-semibold text-alpha">distinctive concepts</span>{" "}
              that your market is waiting for.
            </p>

            {/* Second Paragraph */}
            <p ref={paragraph2Ref} className="text-alpha/80 leading-relaxed">
              We work hard and{" "}
              <span className="font-semibold text-alpha">laugh a lot</span>. And that is necessary to create{" "}
              <span className="font-semibold text-alpha">good work</span>{" "}
              that helps our clients move forward. Our client base is very diverse, but they have one common denominator:{" "}
              <span className="font-semibold text-alpha">ambition</span>. Just like us. And to prove it, we would like to show{" "}
              <span className="font-semibold text-alpha">what we are capable of</span>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="flex flex-col items-center gap-6 mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-alpha text-center">
            Ready to work with us? Call or email us directly!
          </h3>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Phone Button */}
            <a 
              href="tel:0334220066" 
              className="flex items-center gap-3 px-8 py-4 bg-tango/80 hover:bg-tango rounded-full transition-colors duration-300 text-alpha font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              033 422 00 66
            </a>

            {/* Email Button */}
            <a 
              href="mailto:nooziproductions@gmail.com" 
              className="flex items-center gap-3 px-8 py-4 bg-tango/80 hover:bg-tango rounded-full transition-colors duration-300 text-alpha font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              nooziproductions@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection2;
