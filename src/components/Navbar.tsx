import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="h-16 w-full bg-[#046353] flex items-center justify-center">
      <ul className="flex space-x-8 text-white font-bold text-xl">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
      </ul>
    </nav>
  );
};

export default Navbar;
