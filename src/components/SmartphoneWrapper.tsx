import React, { useState, useEffect } from 'react';
import { playLuxurySound } from '../utils/audio';
import { Smartphone, Monitor, Volume2, VolumeX, Sparkles, RefreshCw } from 'lucide-react';

interface SmartphoneWrapperProps {
  children: React.ReactNode;
  backgroundImageUrl: string;
}

export default function SmartphoneWrapper({ children, backgroundImageUrl }: SmartphoneWrapperProps) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Handle subtle tilt and screen glare reflection based on mouse movement (Desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      if (width < 768) return; // Skip on real mobile viewports for fluid scroll

      const { clientX, clientY } = e;
      const height = window.innerHeight;
      
      // Calculate glare percentage path
      const xPercent = (clientX / width) * 100;
      const yPercent = (clientY / height) * 100;
      setGlarePosition({ x: xPercent, y: yPercent });

      // Subtle mechanical tilt effect
      const tiltX = ((clientY - height / 2) / (height / 2)) * 3; // Max 3 deg
      const tiltY = ((clientX - width / 2) / (width / 2)) * -3; // Max 3 deg
      setTilt({ x: tiltX, y: tiltY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    if (newState) {
      // Trigger a direct AudioContext activation
      playLuxurySound('sparkle');
    }
  };

  return (
    <div className="relative h-[100dvh] w-full bg-[#07080a] flex flex-col items-center justify-center p-0 md:p-6 overflow-hidden">
      
      {/* Immersive Fixed Background for actual mobile and widescreen context (Beautiful, rich Sakura street with realistic lighting) */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-1000 scale-102 z-0"
        style={{ 
          backgroundImage: `url(${backgroundImageUrl})`,
          filter: 'brightness(0.9) contrast(1.02)'
        }}
        id="bg-blur-ambient"
      />
      <div className="fixed inset-0 bg-gradient-to-t from-[#07080a]/70 via-[#07080a]/10 to-[#07080a]/65 z-0 pointer-events-none" />

      {/* Luxury Controlling Console Bar (Only visible on desktop/tablet) */}
      <div className="hidden md:flex items-center gap-4 bg-black/45 backdrop-blur-md rounded-full px-6 py-3 border border-gold-accent/20 mb-6 z-40 shadow-2xl transition-all hover:border-gold-accent/40 relative">
        <div className="flex items-center gap-2 pr-4 border-r border-white/10">
          <Sparkles className="w-4 h-4 text-gold-accent animate-pulse" />
          <span className="font-cinzel text-xs uppercase tracking-widest text-[#f5ebd5]">Haruto Suzuki • Premium Interactive Studio</span>
        </div>

        {/* Sound unmute helper */}
        <button
          onClick={toggleSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
            soundEnabled 
              ? 'text-gold-accent bg-gold-accent/10 hover:bg-gold-accent/20 border border-gold-accent/20' 
              : 'text-white/40 hover:text-white/75 bg-white/5 hover:bg-white/10 border border-white/5'
          }`}
          title={soundEnabled ? "Mute interactive audio haptics" : "Unmute interactive audio haptics"}
          id="sound-unmute-btn"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              <span>HAPTICS ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>HAPTICS OFF</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content Area */}
      
      {/* 1. NATIVE MOBILE DIRECT LAYOUT (Hides on desktop md+ to bypass nested phone borders) */}
      <div className="block md:hidden w-full h-[100dvh] overflow-hidden relative z-10 px-3.5 py-4 flex items-center justify-center">
        {children}
      </div>

      {/* 2. PC SMARTPHONE MOCKUP FRAME (1290×2796 Aspect ratio scaled nicely on desktop) */}
      <div
        className="hidden md:block relative transition-all duration-700 ease-out z-20 select-none pb-4"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        id="smartphone-bezel-wrapper"
      >
        {/* Subtle phone shadow */}
        <div className="absolute -inset-1 rounded-[54px] bg-gradient-to-tr from-gold-accent/35 via-transparent to-black/80 blur-2xl opacity-45 transition-all duration-500" />
        
        {/* Smartphone outer body casing (Titanium dark border and bezel) */}
        <div className="relative w-[385px] h-[835px] rounded-[52px] p-3.5 bg-gradient-to-b from-[#2E2C2A] via-[#100F0E] to-[#141312] border-[3px] border-[#43403D] shadow-2xl flex flex-col justify-stretch overflow-hidden">
          
          {/* Dynamic Island / Bezel Notch */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-50 flex items-center justify-between px-3 pointer-events-none shadow-inner border border-white/5">
            <div className="w-2.5 h-2.5 bg-[#09090b] rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-[#1d4ed8] rounded-full animate-pulse" />
            </div>
            <div className="w-3.5 h-1.5 bg-[#171717] rounded-full relative">
              <div className="absolute inset-0 bg-gold-accent/20 blur-[1px] animate-pulse rounded-full" />
            </div>
          </div>

          {/* Simulated side hardware keys */}
          <div className="absolute left-[-3px] top-[140px] w-[3px] h-[36px] bg-[#43403D] rounded-r-sm shadow" />
          <div className="absolute left-[-3px] top-[188px] w-[3px] h-[48px] bg-[#43403D] rounded-r-sm shadow" />
          <div className="absolute left-[-3px] top-[244px] w-[3px] h-[48px] bg-[#43403D] rounded-r-sm shadow" />
          <div className="absolute right-[-3px] top-[204px] w-[3px] h-[64px] bg-[#43403D] rounded-l-sm shadow" />

          {/* Inner Phone Screen Content container with rounded corner screen clip */}
          <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-[#0d0e12] flex flex-col shadow-inner z-10 select-text">
            
            {/* Ambient image mirrored inside the simulated screen underlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center pointer-events-none filter scale-102"
              style={{ 
                backgroundImage: `url(${backgroundImageUrl})`,
                filter: 'brightness(0.9) contrast(1.02)'
              }}
            />
            {/* Screen glare reflection overlay */}
            <div 
              className="absolute inset-0 pointer-events-none z-40 opacity-[0.05] transition-all duration-300"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)`
              }}
            />

            {/* True Digital Profile Page Content scrollable internally in frame */}
            <div className="w-full h-full overflow-y-auto overflow-x-hidden relative scrollbar-none flex flex-col justify-start p-3 py-5">
              {children}
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}
