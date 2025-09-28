import React from 'react';

// A high-quality placeholder image that fits a dining theme.
// You can replace this URL with your own image.
const imageUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074';

/**
 * A full-width, 80vh height footer for "NOOZI".
 * It features a dark green background with bold, transparent text
 * that reveals a background image through it.
 *
 * This component also includes custom floating and glowing text animations.
 * Make sure to add the required keyframes and animations to your tailwind.config.js file.
 */
const NooziFooter: React.FC = () => {
  return (
    <footer className="w-full h-[80vh] bg-emerald-950 flex justify-center items-center overflow-hidden">
      <h1
        className="
          text-center font-black 
          text-[30vw] md:text-[25vw] lg:text-[20vw] /* Responsive text size for impact */
          leading-none 
          uppercase 
          text-transparent 
          bg-cover 
          bg-center 
          bg-clip-text
          animate-subtle-glow  /* Custom glowing text animation */
          animate-subtle-float /* Custom floating title animation */
        "
        // The background image is clipped to the text's shape here
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        NOOZI
      </h1>
    </footer>
  );
};

export default NooziFooter;