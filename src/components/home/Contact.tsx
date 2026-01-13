import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="relative h-[170vh] w-full bg-zigma flex items-center justify-center p-0 m-0">
      {/* Contact Background Image - Top Transition */}
      <img 
        src="/images/contactbg.svg" 
        alt="Contact Background Top" 
        className="absolute -top-24 left-0 w-screen min-w-full max-w-none h-auto pointer-events-none object-cover z-20"
      />
      
      <div className="relative z-10">
        <h1 className="text-black text-5xl font-bold">Contact Section</h1>
      </div>

      {/* Contact Background Image - Bottom Transition (Flipped) */}
      <img 
        src="/images/contactbg.svg" 
        alt="Contact Background Bottom" 
        className="absolute -bottom-24 left-0 w-screen min-w-full max-w-none h-auto pointer-events-none object-cover z-20 scale-y-[-1]" 
      />
    </section>
  );
};

export default Contact;
