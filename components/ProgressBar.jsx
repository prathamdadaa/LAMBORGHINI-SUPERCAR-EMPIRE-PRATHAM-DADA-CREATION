import React, { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[6px] bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 z-[5000] shadow-[0_0_20px_#ff6600] transition-all duration-100 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
