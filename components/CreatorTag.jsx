import React from 'react';

export default function CreatorTag() {
  return (
    <div className="fixed top-[100px] left-[50px] z-[2000] hidden md:flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl px-8 py-4 border-3 border-orange-600 rounded-full font-mono text-sm tracking-[4px] text-orange-500 font-extrabold shadow-[0_15px_50px_rgba(255,102,0,0.4)] animate-bounce">
      <i className="fas fa-crown"></i>
      PRATHAM DADA CREATION
      <i className="fas fa-crown"></i>
    </div>
  );
}
