import React from 'react';

export default function CarCard({ car }) {
  return (
    <div className="group relative bg-white/[0.02] border-3 border-orange-600/30 backdrop-blur-xl rounded-[30px] overflow-hidden h-[560px] transition-all duration-500 cubic-bezier(0.25,0.46,0.45,0.94) hover:border-orange-500 hover:-translate-y-5 hover:shadow-[0_40px_100px_rgba(255,102,0,0.4)]">
      {/* Dynamic Top Edge Indicator */}
      <span className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-orange-600 to-yellow-400 scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-10" />
      
      <div className="overflow-hidden h-[320px]">
        <img 
          src={car.img} 
          alt={car.name} 
          loading="lazy"
          className="w-full h-full object-cover transform scale-100 transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8 relative z-10">
        <h3 className="font-mono text-2xl font-black tracking-wider text-orange-500 mb-2">{car.name}</h3>
        <div className="text-2xl font-extrabold text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] mb-3">
          {car.price}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{car.desc}</p>
        
        <div className="flex justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
          {car.specs.map((spec, index) => (
            <span key={index} className="font-semibold">{spec}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
