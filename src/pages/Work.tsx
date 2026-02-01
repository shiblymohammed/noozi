import React from 'react';

const Work: React.FC = () => {
  // Video data with varying heights for masonry effect
  const videos = [
    // ORIGINAL VIDEOS from IntroSection3
    {
      id: 1,
      url: "https://player.vimeo.com/video/1153483177?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[400px]', // Medium
      isOriginal: true,
    },
    {
      id: 2,
      url: "https://player.vimeo.com/video/1153483144?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[500px]', // Tall
      isOriginal: true,
    },
    {
      id: 3,
      url: "https://player.vimeo.com/video/1153483218?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[350px]', // Short
      isOriginal: true,
    },
    {
      id: 4,
      url: "https://player.vimeo.com/video/1153483192?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[450px]', // Medium-tall
      isOriginal: true,
    },
    {
      id: 5,
      url: "https://player.vimeo.com/video/1153483221?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[380px]', // Medium-short
      isOriginal: true,
    },
    {
      id: 6,
      url: "https://player.vimeo.com/video/1153483174?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[420px]', // Medium
      isOriginal: true,
    },
    
    // ADDITIONAL RANDOM VIDEOS
    {
      id: 7,
      url: "https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[480px]',
      isOriginal: false,
    },
    {
      id: 8,
      url: "https://player.vimeo.com/video/148751763?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[360px]',
      isOriginal: false,
    },
    {
      id: 9,
      url: "https://player.vimeo.com/video/115783408?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[440px]',
      isOriginal: false,
    },
    {
      id: 10,
      url: "https://player.vimeo.com/video/125095515?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[390px]',
      isOriginal: false,
    },
    {
      id: 11,
      url: "https://player.vimeo.com/video/169599296?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[520px]',
      isOriginal: false,
    },
    {
      id: 12,
      url: "https://player.vimeo.com/video/179859217?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[370px]',
      isOriginal: false,
    },
    {
      id: 13,
      url: "https://player.vimeo.com/video/94338566?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[410px]',
      isOriginal: false,
    },
    {
      id: 14,
      url: "https://player.vimeo.com/video/108018156?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[460px]',
      isOriginal: false,
    },
    {
      id: 15,
      url: "https://player.vimeo.com/video/135567990?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[340px]',
      isOriginal: false,
    },
    {
      id: 16,
      url: "https://player.vimeo.com/video/158144173?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[490px]',
      isOriginal: false,
    },
    {
      id: 17,
      url: "https://player.vimeo.com/video/190062231?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[430px]',
      isOriginal: false,
    },
    {
      id: 18,
      url: "https://player.vimeo.com/video/214729640?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[380px]',
      isOriginal: false,
    },
    {
      id: 19,
      url: "https://player.vimeo.com/video/240924178?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[470px]',
      isOriginal: false,
    },
    {
      id: 20,
      url: "https://player.vimeo.com/video/268896653?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[400px]',
      isOriginal: false,
    },
    {
      id: 21,
      url: "https://player.vimeo.com/video/290408178?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[350px]',
      isOriginal: false,
    },
    {
      id: 22,
      url: "https://player.vimeo.com/video/312629558?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[510px]',
      isOriginal: false,
    },
    {
      id: 23,
      url: "https://player.vimeo.com/video/336812660?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[420px]',
      isOriginal: false,
    },
    {
      id: 24,
      url: "https://player.vimeo.com/video/354517485?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[450px]',
      isOriginal: false,
    },
    {
      id: 25,
      url: "https://player.vimeo.com/video/370467553?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[395px]',
      isOriginal: false,
    },
    {
      id: 26,
      url: "https://player.vimeo.com/video/396371417?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[475px]',
      isOriginal: false,
    },
    {
      id: 27,
      url: "https://player.vimeo.com/video/418976961?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[365px]',
      isOriginal: false,
    },
    {
      id: 28,
      url: "https://player.vimeo.com/video/445442861?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[435px]',
      isOriginal: false,
    },
    {
      id: 29,
      url: "https://player.vimeo.com/video/462633135?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[505px]',
      isOriginal: false,
    },
    {
      id: 30,
      url: "https://player.vimeo.com/video/485149595?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[385px]',
      isOriginal: false,
    },
    {
      id: 31,
      url: "https://player.vimeo.com/video/507237812?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[445px]',
      isOriginal: false,
    },
    {
      id: 32,
      url: "https://player.vimeo.com/video/531945572?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[415px]',
      isOriginal: false,
    },
    {
      id: 33,
      url: "https://player.vimeo.com/video/558609190?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[465px]',
      isOriginal: false,
    },
    {
      id: 34,
      url: "https://player.vimeo.com/video/582945284?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[375px]',
      isOriginal: false,
    },
    {
      id: 35,
      url: "https://player.vimeo.com/video/607682715?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[495px]',
      isOriginal: false,
    },
    {
      id: 36,
      url: "https://player.vimeo.com/video/631773947?background=1&autoplay=1&loop=1&muted=1&controls=0",
      height: 'h-[425px]',
      isOriginal: false,
    },
  ];

  return (
    <div className="min-h-screen bg-alpha pt-32 pb-20">
      {/* Header */}
      <div className="px-4 md:px-8 lg:px-16 mb-12">
        <h1 className="text-6xl md:text-8xl font-extrabold italic text-beta uppercase font-barlow mb-4">
          Our Work
        </h1>
        <p className="text-lg text-beta/70 max-w-2xl">
          A collection of our creative visual storytelling projects
        </p>
      </div>

      {/* Pinterest Masonry Grid - Full Width */}
      <div className="px-2 md:px-4 lg:px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-2 md:gap-3 space-y-2 md:space-y-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="break-inside-avoid mb-2 md:mb-3 group relative"
            >
              <div 
                className={`${video.height} bg-black rounded-lg overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300`}
                style={{
                  filter: 'drop-shadow(10px 15px 10px rgba(0, 0, 0, 0.25))',
                }}
              >
                <iframe 
                  src={video.url}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ pointerEvents: 'none' }}
                  title={`Video ${video.id}`}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
                
                {/* Original badge */}
                {video.isOriginal && (
                  <div className="absolute top-4 right-4 bg-zigma text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Original
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-bold italic text-beta uppercase font-barlow mb-6">
          Like what you see?
        </h2>
        <p className="text-lg text-beta/70 mb-8">
          Let's create something amazing together
        </p>
        <button className="px-10 py-4 bg-beta text-white rounded-full text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
          Start a Project
        </button>
      </div>
    </div>
  );
};

export default Work;