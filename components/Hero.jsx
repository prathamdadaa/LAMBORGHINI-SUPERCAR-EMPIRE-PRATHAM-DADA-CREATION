import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-[120vh] flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2560&q=80')`,
        transform: `translateY(${offsetY * 0.15}px)`
      }}
    >
      <div className="absolute inset-0 bg-radial-glow opacity-60 animate-pulse pointer-events-none" />

      <h1 className="relative z-10 font-mono text-6xl md:text-[10rem] font-black tracking-[15px] md:tracking-[30px] uppercase text-white drop-shadow-[0_0_80px_rgba(255,102,0,0.8)] mix-blend-lighten scale-95 hover:scale-100 transition-transform duration-700">
        THE BULL EMPIRE
      </h1>
      
      <p className="relative z-10 text-xl md:text-3xl my-8 font-light tracking-[3px] text-white/90">
        ENGINEERED BY LEGENDS | <span className="text-orange-500 font-bold">PRATHAM DADA</span>
      </p>

      <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 my-10">
        {[
          { num: '+15', label: 'SUPERCARS' },
          { num: '2,500+', label: 'COLLECTIVE HP' },
          { num: '0-100', label: 'UNDER 3 SEC' }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <span className="block font-sans text-5xl md:text-6xl font-extrabold text-orange-500">{stat.num}</span>
            <span className="text-sm uppercase tracking-widest text-white/60">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-6 mt-8">
        <a href="#fleet" className="px-8 py-4 bg-orange-600 text-black font-bold tracking-widest rounded-lg hover:bg-orange-500 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300">
          🚀 EXPLORE FLEET
        </a>
      </div>
    </section>
  );
}
