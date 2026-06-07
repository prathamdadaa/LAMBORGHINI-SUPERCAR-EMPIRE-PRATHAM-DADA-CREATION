import React from 'react';

export default function Exclusive() {
  return (
    <section id="exclusive" className="relative py-40 px-[8%] bg-gradient-to-br from-black to-red-950/20 text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605280746813-6a0efcbbe4d5?auto=format&fit=crop&w=2560&q=80')] bg-center bg-cover opacity-10 pointer-events-none"
      />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h2 className="font-mono text-5xl md:text-7xl font-black tracking-widest text-white mb-8">
          🏆 EXCLUSIVE COLLECTION
        </h2>
        <p className="text-xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          The world's most insane Lamborghini collection. Limited editions. One-of-one masterpieces.
        </p>
        <div className="text-5xl md:text-7xl font-black text-orange-600 tracking-wide animate-pulse bg-black/40 inline-block px-10 py-5 rounded-2xl border border-orange-500/20">
          🔥 1 OF 1 🔥
        </div>
      </div>
    </section>
  );
}
