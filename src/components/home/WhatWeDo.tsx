import React from "react";

const WhatWeDo: React.FC = () => {
  return (
    <section className="relative w-full bg-alpha">
      {/* Centered Image Container */}
      <div className="w-3/4 mx-auto relative">
        <img 
          src="/images/routebg.avif" 
          alt="Route Background" 
          className="w-full h-auto block"
        />
        
        {/* Content Overlay - Positioned within the image container */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-5xl font-bold">What We Do Section</h1>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
