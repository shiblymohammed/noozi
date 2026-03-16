import React, { useState, useEffect } from "react";
import { motion, type PanInfo } from "framer-motion";

/* ─── Types ─── */
interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

/* ─── Team Data ─── */
const teamMembers: TeamMember[] = [
  {
    name: "Sree Hari",
    role: "Lead Videographer & Director",
    specialty: "Cinematic Storytelling",
    image: "/images/team/01.jpeg",
    bio: "Sree Hari brings cinematic excellence to every project with his keen eye for visual narrative. With expertise in both traditional and modern filming techniques, he transforms concepts into compelling visual stories that captivate audiences.",
    socials: { linkedin: "#", instagram: "#", email: "sreehari@noozi.com" },
  },
  {
    name: "Aadish",
    role: "Chief Executive Officer",
    specialty: "Strategic Leadership",
    image: "/images/team/02.jpeg",
    bio: "As CEO, Aadish drives Noozi's vision forward with strategic thinking and innovative leadership. His entrepreneurial spirit and deep understanding of the creative industry guide the company's growth and client success.",
    socials: { linkedin: "#", instagram: "#", email: "aadish@noozi.com" },
  },
  {
    name: "Mayoora",
    role: "Human Resources Director",
    specialty: "Talent Development",
    image: "/images/team/03.jpeg",
    bio: "Mayoora cultivates Noozi's creative culture by nurturing talent and fostering collaboration. Her expertise in team dynamics and organizational development ensures our creative professionals thrive in an inspiring work environment.",
    socials: { linkedin: "#", instagram: "#", email: "mayoora@noozi.com" },
  },
  {
    name: "Anu",
    role: "Senior Video Editor",
    specialty: "Post-Production & VFX",
    image: "/images/team/04.jpeg",
    bio: "Anu transforms raw footage into polished masterpieces through her exceptional editing skills and creative vision. Her expertise in motion graphics, color grading, and visual effects brings stories to life with stunning precision.",
    socials: { linkedin: "#", instagram: "#", email: "anu@noozi.com" },
  },
  {
    name: "Muhammed Anees",
    role: "Creative Design Director",
    specialty: "Brand & Visual Identity",
    image: "/images/team/05.jpeg",
    bio: "Muhammed Anees crafts compelling visual identities that resonate with audiences. His innovative approach to design and deep understanding of brand psychology creates memorable experiences that drive engagement and results.",
    socials: { linkedin: "#", instagram: "#", email: "anees@noozi.com" },
  },
];
/* ─── Team Card Component ─── */
const TeamCard: React.FC<{ 
  member: TeamMember; 
  isCenter: boolean;
  position: number;
  currentIndex: number;
}> = ({ member, isCenter, position, currentIndex }) => {
  // Calculate position relative to current center
  const relativePosition = position - currentIndex;
  
  // Wrap around for infinite scroll
  let adjustedPosition = relativePosition;
  if (relativePosition > 2) {
    adjustedPosition = relativePosition - teamMembers.length;
  } else if (relativePosition < -2) {
    adjustedPosition = relativePosition + teamMembers.length;
  }
  
  // Calculate transforms
  const distance = Math.abs(adjustedPosition);
  const isVisible = distance <= 2;
  
  const xOffset = adjustedPosition * 300;
  const scale = isCenter ? 1 : Math.max(0.8, 1 - distance * 0.1);
  const opacity = isCenter ? 1 : Math.max(0.5, 1 - distance * 0.2);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      className="absolute w-80 h-96"
      animate={{
        x: xOffset,
        scale,
        opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{ zIndex: isCenter ? 50 : 10 }}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${member.image})`,
            filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-barlow font-bold text-tango mb-2">
            {member.name}
          </h3>
          <p className="text-zigma font-poppins text-sm mb-4">
            {member.role}
          </p>
          
          {isCenter && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-tango/90 text-sm leading-relaxed"
            >
              {member.bio}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
/* ─── Main Component ─── */
const TeamMembers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isDragging]);

  // Swipe handlers
  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    } else if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }
  };

  return (
    <section className="relative w-full bg-alpha flex flex-col items-center overflow-hidden min-h-screen">
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center text-center pt-32 pb-16 px-6">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-8xl font-barlow font-black text-tango uppercase tracking-wide leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MEET OUR TEAM
        </motion.h2>
        <p className="text-tango/60 text-lg font-poppins max-w-lg">
          Passionate creatives who turn bold visions into powerful stories.
        </p>
      </div>
      
      {/* Carousel */}
      <div className="relative z-10 w-full flex flex-col items-center pb-20">
        <motion.div 
          className="relative w-full h-96 flex items-center justify-center cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          dragElastic={0.1}
        >
          <div className="relative w-80 h-96">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                isCenter={index === currentIndex}
                position={index}
                currentIndex={currentIndex}
              />
            ))}
          </div>
        </motion.div>

        {/* Indicators */}
        <div className="flex gap-2 mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-tango w-8' : 'bg-tango/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;