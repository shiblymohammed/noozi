import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Grid3x3, LayoutGrid } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface VideoItem {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  category: string;
  client: string;
  year: string;
  height: string;
}

const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [layout, setLayout] = useState<'masonry' | 'grid'>('masonry');
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(text1Ref.current, {
        x: '15%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(text2Ref.current, {
        x: '-20%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const videos: VideoItem[] = [
    {
      id: 1,
      url: "https://player.vimeo.com/video/1153483177?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/1153483177_640.jpg",
      title: "Brand Story",
      category: "branding",
      client: "Tech Startup",
      year: "2024",
      height: 'h-[400px]',
    },
    {
      id: 2,
      url: "https://player.vimeo.com/video/1153483144?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/1153483144_640.jpg",
      title: "Product Launch",
      category: "commercial",
      client: "Fashion Brand",
      year: "2024",
      height: 'h-[500px]',
    },
    {
      id: 3,
      url: "https://player.vimeo.com/video/1153483218?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/1153483218_640.jpg",
      title: "Motion Graphics",
      category: "motion",
      client: "Digital Agency",
      year: "2024",
      height: 'h-[350px]',
    },
    {
      id: 4,
      url: "https://player.vimeo.com/video/1153483192?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/1153483192_640.jpg",
      title: "Documentary",
      category: "film",
      client: "Non-Profit Org",
      year: "2023",
      height: 'h-[450px]',
    },
    {
      id: 5,
      url: "https://player.vimeo.com/video/1153483221?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/1153483221_640.jpg",
      title: "Social Campaign",
      category: "commercial",
      client: "Beverage Co",
      year: "2023",
      height: 'h-[380px]',
    },
    {
      id: 6,
      url: "https://player.vimeo.com/video/1153483174?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/1153483174_640.jpg",
      title: "Brand Identity",
      category: "branding",
      client: "Retail Chain",
      year: "2023",
      height: 'h-[420px]',
    },
    {
      id: 7,
      url: "https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/76979871_640.jpg",
      title: "Creative Reel",
      category: "motion",
      client: "Studio Project",
      year: "2023",
      height: 'h-[480px]',
    },
    {
      id: 8,
      url: "https://player.vimeo.com/video/148751763?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/148751763_640.jpg",
      title: "Event Coverage",
      category: "film",
      client: "Music Festival",
      year: "2022",
      height: 'h-[360px]',
    },
    {
      id: 9,
      url: "https://player.vimeo.com/video/115783408?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/115783408_640.jpg",
      title: "Product Demo",
      category: "commercial",
      client: "Tech Company",
      year: "2022",
      height: 'h-[440px]',
    },
    {
      id: 10,
      url: "https://player.vimeo.com/video/125095515?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/125095515_640.jpg",
      title: "Animation Showcase",
      category: "motion",
      client: "Animation Studio",
      year: "2022",
      height: 'h-[390px]',
    },
    {
      id: 11,
      url: "https://player.vimeo.com/video/169599296?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/169599296_640.jpg",
      title: "Brand Film",
      category: "branding",
      client: "Luxury Brand",
      year: "2022",
      height: 'h-[520px]',
    },
    {
      id: 12,
      url: "https://player.vimeo.com/video/179859217?background=1&autoplay=1&loop=1&muted=1&controls=0",
      thumbnail: "https://i.vimeocdn.com/video/179859217_640.jpg",
      title: "Short Film",
      category: "film",
      client: "Independent",
      year: "2021",
      height: 'h-[370px]',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'motion', label: 'Motion' },
    { id: 'film', label: 'Film' },
  ];

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(video => video.category === filter);

  return (
    <div ref={containerRef} className="min-h-screen bg-tango overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/herobg.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none overflow-hidden">
          <motion.div
            ref={text1Ref}
            className="text-[25vw] font-black italic text-alpha/5 uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            PORTFOLIO
          </motion.div>
          <motion.div
            ref={text2Ref}
            className="text-[25vw] font-black italic text-alpha/5 uppercase font-barlow whitespace-nowrap will-change-transform"
          >
            SHOWCASE
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-beta text-sm md:text-base font-poppins font-semibold tracking-[0.3em] uppercase mb-6">
              <Play className="w-4 h-4" />
              Our Work
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic text-alpha uppercase font-barlow leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            CREATIVE
            <br />
            <span className="text-beta">PORTFOLIO</span>
          </motion.h1>

          <motion.p
            className="text-alpha/60 text-base md:text-lg font-poppins max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            A curated collection of our finest work. From brand films to motion graphics, each project tells a unique story.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter & Layout Controls */}
      <section className="sticky top-20 z-40 bg-tango/95 backdrop-blur-md border-b border-alpha/10 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-poppins font-medium tracking-wide uppercase transition-all duration-300 ${
                    filter === cat.id
                      ? 'bg-alpha text-tango'
                      : 'bg-alpha/5 text-alpha/60 hover:bg-alpha/10 hover:text-alpha'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center gap-2 bg-alpha/5 rounded-full p-1">
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  layout === 'masonry' ? 'bg-alpha text-tango' : 'text-alpha/40 hover:text-alpha/60'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  layout === 'grid' ? 'bg-alpha text-tango' : 'text-alpha/40 hover:text-alpha/60'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-[1800px] mx-auto">
          {layout === 'masonry' ? (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {filteredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} isGrid />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 px-6 bg-alpha/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-alpha uppercase font-barlow leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            READY TO CREATE
            <br />
            <span className="text-beta">YOUR STORY?</span>
          </motion.h2>

          <motion.p
            className="text-alpha/60 text-sm md:text-base font-poppins max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's collaborate on your next project. Whether it's a brand film, commercial, or motion graphics, we're here to bring your vision to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="group relative px-8 py-4 rounded-full bg-alpha text-tango text-sm font-poppins font-semibold tracking-[0.1em] uppercase overflow-hidden transition-all duration-500 w-full sm:w-auto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 bg-beta translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start a Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 rounded-full border border-alpha/20 hover:border-alpha/40 text-alpha text-sm font-poppins font-medium tracking-[0.1em] uppercase transition-all duration-500 w-full sm:w-auto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Video Card Component
const VideoCard: React.FC<{
  video: VideoItem;
  index: number;
  isGrid?: boolean;
}> = ({ video, index, isGrid = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px", once: true });

  return (
    <motion.div
      ref={ref}
      className="break-inside-avoid group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${isGrid ? 'h-[400px]' : video.height} bg-black/20 rounded-xl overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl`}
        style={{
          filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))',
        }}
      >
        {/* Thumbnail */}
        {!isLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${video.thumbnail})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Video */}
        {isInView && (
          <iframe
            src={video.url}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{
              pointerEvents: 'none',
              opacity: isLoaded ? 1 : 0,
            }}
            title={video.title}
          />
        )}

        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Info */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span className="inline-block text-beta text-[10px] font-poppins font-semibold tracking-[0.2em] uppercase mb-2">
            {video.category}
          </span>
          <h3 className="text-white text-xl font-barlow font-bold mb-1">
            {video.title}
          </h3>
          <p className="text-white/60 text-sm font-poppins">
            {video.client} • {video.year}
          </p>
        </div>

        {/* Play Icon */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
