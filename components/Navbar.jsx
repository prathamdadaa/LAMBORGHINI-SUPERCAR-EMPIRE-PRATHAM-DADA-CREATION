import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <header className={`fixed top-0 w-full px-[5%] py-5 flex justify-between items-center z-[3000] transition-all duration-300 ${
      isScrolled ? 'bg-black/95 border-b border-orange-600/30 backdrop-blur-xl' : 'bg-black/90 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="font-mono text-2xl font-black tracking-[5px] bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
        LAMBORGHINI
      </div>
      <nav className="hidden lg:block">
        <ul className="flex gap-10 list-none">
          {['Home', 'Fleet', 'Exclusive'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="relative text-white no-underline font-semibold text-lg group transition-colors duration-300"
              >
                {item}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
