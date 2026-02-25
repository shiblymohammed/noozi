// Intro.tsx
const Intro = () => (
  <section className="relative h-[175vh] w-full bg-alpha flex items-center justify-center overflow-hidden">
    {/* Background Pattern */}
    <img 
      src="/images/introbg.svg" 
      alt="Intro Background" 
      className="absolute bottom-0 left-0 w-[160%] max-w-none z-[1] pointer-events-none" 
    />
    
    {/* Content */}
    <div className="relative z-10">
    </div>
  </section>
);

export default Intro;
