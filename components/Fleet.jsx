import React from 'react';
import CarCard from './CarCard';

const CAR_DATA = [
  { name: "HURACÁN STO", price: "$350,000+", desc: "Track-focused weapon. Pure V10 analog experience. 630 HP fury.", specs: ["5.2L V10", "3.0s 0-100", "Track Only"], img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1000&q=80" },
  { name: "URUS PERFORMANTE", price: "$280,000+", desc: "Super SUV king. 666 HP twin-turbo V8. Fastest SUV ever.", specs: ["4.0L V8 TT", "3.3s 0-100", "190 mph"], img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80" },
  { name: "COUNTACH LPI 800-4", price: "$2.5M+", desc: "Icon reborn. 803 HP hybrid V12. 112 units only.", specs: ["6.5L V12 Hybrid", "2.8s 0-100", "221 mph"], img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80" },
  { name: "AVENTADOR ULTIMAE", price: "$500,000+", desc: "Final V12 symphony. 780 HP naturally aspirated legend.", specs: ["6.5L V12", "2.8s 0-100", "217 mph"], img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?auto=format&fit=crop&w=1000&q=80" },
  { name: "SIÁN FKP 37", price: "$3.6M+", desc: "Most powerful Lambo. 819 HP hybrid. 63 units only.", specs: ["6.5L V12 Hybrid", "2.8s 0-100", "217 mph"], img: "https://images.unsplash.com/photo-1632243193741-b308ad3d02c3?auto=format&fit=crop&w=1000&q=80" },
  { name: "REVUELTO", price: "$600,000+", desc: "First V12 HPEV. 1,015 HP plug-in hybrid revolution.", specs: ["6.5L V12 PHEV", "2.5s 0-100", "217+ mph"], img: "https://images.unsplash.com/photo-1617814076367-b759c7d8e73a?auto=format&fit=crop&w=1000&q=80" }
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-32 px-[8%] max-w-[1600px] mx-auto">
      <h2 className="text-center font-mono text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-20 tracking-[10px] md:tracking-[15px] drop-shadow-[0_0_50px_rgba(255,102,0,0.5)]">
        ULTIMATE SUPERCAR FLEET
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {CAR_DATA.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </section>
  );
}
