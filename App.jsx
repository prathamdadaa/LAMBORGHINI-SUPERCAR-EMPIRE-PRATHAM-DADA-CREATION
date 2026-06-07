import React from 'react';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import CreatorTag from './components/CreatorTag';
import AudioPanel from './components/AudioPanel';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Exclusive from './components/Exclusive';

export default function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen selection:bg-orange-600 selection:text-black overflow-x-hidden">
      <ProgressBar />
      <Navbar />
      <CreatorTag />
      <AudioPanel />
      
      <main>
        <Hero />
        <Fleet />
        <Exclusive />
      </main>
    </div>
  );
}
