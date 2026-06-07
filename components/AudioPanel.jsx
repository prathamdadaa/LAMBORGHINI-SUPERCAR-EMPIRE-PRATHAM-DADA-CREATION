import React, { useState, useEffect, useRef } from 'react';

const TRACKS = [
  { id: 'idle', label: 'V10 Idle', icon: 'fa-play', src: 'https://www.soundjay.com/mechanical/sounds/car-engine-idling-01.mp3', loop: true },
  { id: 'rev', label: 'Rev Up', icon: 'fa-forward', src: 'https://www.soundjay.com/mechanical/sounds/car-engine-rev-01.mp3', loop: false },
  { id: 'v12', label: 'V12 Roar', icon: 'fa-bolt', src: 'https://www.soundjay.com/mechanical/sounds/car-engine-rev-high-01.mp3', loop: false },
  { id: 'ambient', label: 'Track Ambience', icon: 'fa-music', src: 'https://www.soundjay.com/ambient/sounds/race-track-ambience-01.mp3', loop: true }
];

export default function AudioPanel() {
  const [activeTrack, setActiveTrack] = useState(null);
  const audioRefs = useRef({});

  useEffect(() => {
    // Initial global gesture trigger setup
    const handleFirstClick = () => {
      if (!activeTrack) {
        handleTrackChange('idle');
      }
      document.removeEventListener('click', handleFirstClick);
    };
    document.addEventListener('click', handleFirstClick);
    return () => document.removeEventListener('click', handleFirstClick);
  }, [activeTrack]);

  const handleTrackChange = (trackId) => {
    // Stop currently running tracks
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (activeTrack === trackId) {
      setActiveTrack(null);
      return;
    }

    const targetAudio = audioRefs.current[trackId];
    if (targetAudio) {
      targetAudio.play().catch(() => console.log("Audio Playback Interrupted Safely"));
      setActiveTrack(trackId);
    }
  };

  return (
    <div className="fixed top-[100px] right-[50px] z-[2000] bg-white/[0.03] backdrop-blur-xl p-6 border-3 border-orange-600 rounded-[25px] shadow-[0_20px_60px_rgba(0,0,0,0.7)] text-center min-w-[200px] hidden sm:block">
      <div className="font-mono text-sm text-orange-500 mb-4 tracking-widest font-bold">🔥 ENGINE SOUNDS</div>
      <div className="flex flex-col gap-4 items-center">
        {TRACKS.map(track => (
          <div key={track.id} className="w-full">
            <audio ref={el => audioRefs.current[track.id] = el} src={track.src} loop={track.loop} preload="auto" />
            <button
              onClick={() => handleTrackChange(track.id)}
              title={track.label}
              className={`w-12 h-12 rounded-full border-2 border-orange-600 bg-transparent flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,102,0,0.5)] ${
                activeTrack === track.id ? 'bg-orange-600 text-black shadow-[0_10px_30px_rgba(255,102,0,0.5)]' : 'text-orange-500'
              }`}
            >
              <i className={`fas ${track.icon}`}></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
