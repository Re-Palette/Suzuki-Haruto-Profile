import React, { useState } from 'react';
import SmartphoneWrapper from './components/SmartphoneWrapper';
import ContactForm from './components/ContactForm';
import { playLuxurySound } from './utils/audio';
import { 
  Sparkles, 
  ChevronRight, 
  Link as LinkIcon, 
  Globe, 
  Mail, 
  Check, 
  ExternalLink,
  Facebook
} from 'lucide-react';

// Locally generated high-res assets
import BACKGROUND_IMAGE_URL from './assets/images/tokyo_sakura_street_1780099401351.png';
import PROFILE_IMAGE_URL from './assets/images/profile.png';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactSubmitToggle = () => {
    playLuxurySound('expand');
    setIsContactOpen(true);
  };

  return (
    <SmartphoneWrapper backgroundImageUrl={BACKGROUND_IMAGE_URL}>
      <div className="relative w-full h-[100dvh] md:h-auto flex flex-col items-center justify-center p-2.5 md:p-4 overflow-hidden">

        {/* 85% Frosted Glass Container panel */}
        <div 
          className="w-full max-w-sm max-h-[94dvh] md:max-h-[810px] overflow-y-auto scrollbar-none glass-glass-premium rounded-[32px] px-5 py-5 select-text animate-fade-in transition-all relative"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0px 30px rgba(212, 180, 131, 0.08)'
          }}
          id="glass-card-panel"
        >
          {/* Subtle Golden ambient glows */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold-accent/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-28 h-28 bg-gold-accent/5 blur-[40px] rounded-full pointer-events-none" />

          {/* TOP PROFILE SECTION */}
          <div className="flex flex-col items-center text-center relative z-10" id="card-top-identity">
            
            {/* Circular Profile Photo with gold border */}
            <div className="relative group shrink-0" id="profile-picture-container">
              <div className="w-24 h-24 rounded-full border-[1.5px] border-gold-accent/60 p-1 bg-gradient-to-tr from-gold-accent/20 via-transparent to-gold-accent/30 transition-all duration-700 group-hover:border-gold-accent flex items-center justify-center relative overflow-visible shadow-2xl glass-glow-gold">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt="Haruto Suzuki Profile" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover grayscale-[15%] brightness-[1.05] contrast-[1.05] transition-all duration-500 hover:scale-103"
                />
              </div>
            </div>

            {/* Japanese Name in giant elegant serif Mincho typography */}
            <h1 
              className="font-serif text-2xl font-[300] tracking-[0.25em] text-[#f8fafc] mt-4 pl-2 select-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
              id="japanese-name"
            >
              鈴木 陽大
            </h1>

            {/* English name below */}
            <p 
              className="font-cinzel text-[10px] tracking-[0.3em] text-[#D4B483] mt-1.5 font-semibold uppercase"
              id="roman-name"
            >
              HARUTO SUZUKI
            </p>

            {/* Occupation and tagline */}
            <span 
              className="block text-[10px] tracking-[0.1em] text-[#f5ebd5]/60 mt-1.5 font-semibold font-serif"
              id="occupation"
            >
              Re-Palette founder
            </span>

            {/* Elegant luxury gold divider */}
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold-accent/60 to-transparent mx-auto my-3" />

            {/* Personalized client-centric tagline */}
            <p 
              className="font-serif text-[10px] leading-relaxed text-[#eae0c5]/90 tracking-widest font-normal max-w-[270px] mx-auto mb-1 text-center"
              id="tagline"
            >
              美容福祉で、すべての若者に
              <br />
              自分らしい彩りを
            </p>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-accent/15 to-transparent my-4" />

          {/* SOCIALS CONNECT ROW */}
          <div className="text-center relative z-10" id="card-socials">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-[0.5px] bg-gold-accent/30" />
              <div className="flex items-center gap-1.5">
                <LinkIcon className="w-3 h-3 text-gold-accent" />
                <h3 className="font-cinzel text-[10px] tracking-[0.25em] text-gold-accent font-bold uppercase">
                  CONNECT
                </h3>
              </div>
              <div className="w-6 h-[0.5px] bg-gold-accent/30" />
            </div>

            {/* Social Grid with detailed premium circles */}
            <div className="grid grid-cols-5 w-full items-start justify-items-center px-1">
              
              {/* Instagram (Work) */}
              <a 
                href="https://www.instagram.com/repalette_official/?next=%2Fharu_6541%2F&hl=ja" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => playLuxurySound('click')}
                className="flex flex-col items-center group transition-transform hover:scale-105"
                id="social-instagram-work"
              >
                <div className="w-11 h-11 rounded-full border border-gold-accent/25 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-gold-accent relative overflow-hidden transition-all duration-300 shadow-md">
                  <div className="absolute inset-0 bg-radial from-[#e1306c]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#e1306c] transition-colors duration-300 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-[7px] font-sans text-white/40 tracking-wide font-medium uppercase mt-1.5 group-hover:text-white/75 transition-colors text-center leading-normal">
                  Instagram<br />
                  <span className="opacity-70 text-[6.5px]">(Work)</span>
                </span>
              </a>

              {/* Instagram (Personal) */}
              <a 
                href="https://www.instagram.com/haru_6541/?hl=ja" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => playLuxurySound('click')}
                className="flex flex-col items-center group transition-transform hover:scale-105"
                id="social-instagram-personal"
              >
                <div className="w-11 h-11 rounded-full border border-gold-accent/25 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-gold-accent relative overflow-hidden transition-all duration-300 shadow-md">
                  <div className="absolute inset-0 bg-radial from-[#e1306c]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#e1306c] transition-colors duration-300 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-[7px] font-sans text-white/40 tracking-wide font-medium uppercase mt-1.5 group-hover:text-white/75 transition-colors text-center leading-normal">
                  Instagram<br />
                  <span className="opacity-70 text-[6.5px]">(Personal)</span>
                </span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61587543673430&locale=ja_JP" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => playLuxurySound('click')}
                className="flex flex-col items-center group transition-transform hover:scale-105"
                id="social-facebook-link"
              >
                <div className="w-11 h-11 rounded-full border border-gold-accent/25 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-gold-accent relative overflow-hidden transition-all duration-300 shadow-md">
                  <div className="absolute inset-0 bg-radial from-[#1877f2]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Facebook className="w-4 h-4 text-white/70 group-hover:text-[#1877f2] transition-colors duration-300 relative" />
                </div>
                <span className="text-[7px] font-sans text-white/40 tracking-wide font-medium uppercase mt-1.5 group-hover:text-white/75 transition-colors text-center leading-normal">
                  Facebook
                </span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/haruto-suzuki-614a253b9/" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => playLuxurySound('click')}
                className="flex flex-col items-center group transition-transform hover:scale-105"
                id="social-linkedin-link"
              >
                <div className="w-11 h-11 rounded-full border border-gold-accent/25 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-gold-accent relative overflow-hidden transition-all duration-300 shadow-md">
                  <div className="absolute inset-0 bg-radial from-[#0077b5]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 text-white/70 group-hover:text-[#0077b5] transition-colors duration-300 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <span className="text-[7px] font-sans text-white/40 tracking-wide font-medium uppercase mt-1.5 group-hover:text-white/75 transition-colors text-center leading-normal">
                  LinkedIn
                </span>
              </a>

              {/* Email */}
              <button 
                onClick={handleContactSubmitToggle}
                className="flex flex-col items-center group transition-transform hover:scale-105"
                id="social-email-link"
              >
                <div className="w-11 h-11 rounded-full border border-gold-accent/25 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-gold-accent relative overflow-hidden transition-all duration-300 shadow-md">
                  <div className="absolute inset-0 bg-radial from-gold-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-4 h-4 text-white/70 group-hover:text-gold-accent transition-colors duration-300 relative" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="text-[7px] font-sans text-white/40 tracking-wide font-medium uppercase mt-1.5 group-hover:text-white/75 transition-colors text-center leading-normal">
                  Inquiry
                </span>
              </button>

            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold-accent/15 to-transparent my-4" />

          {/* CONTACT SECTION ACTIONS BUTTONS */}
          <div className="grid grid-cols-2 gap-3 relative z-10" id="card-actions">
            
            {/* Website action */}
            <a 
              href="https://re-palette-303345676668.asia-south1.run.app" 
              target="_blank" 
              rel="noreferrer"
              onClick={() => playLuxurySound('click')}
              className="flex flex-col justify-between p-3 bg-black/60 border border-gold-accent/20 hover:border-gold-accent/60 rounded-2xl text-left transition-all hover:bg-black/80 hover:shadow-lg active:scale-98 group cursor-pointer"
              id="action-website-btn"
            >
              <div className="flex justify-between items-center w-full">
                <div className="w-7 h-7 rounded-lg bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-gold-accent transition-colors" />
              </div>
              <div className="mt-4">
                <span className="block text-[8px] font-cinzel text-gold-accent tracking-widest font-bold uppercase">
                  WEBSITE
                </span>
                <span className="block text-[10px] text-white/70 font-sans truncate font-light mt-0.5 group-hover:text-white transition-colors">
                  re-palette-303345676668.asia-south1.run.app
                </span>
              </div>
            </a>

            {/* Email Contact Form trigger action */}
            <button 
              onClick={handleContactSubmitToggle}
              className="flex flex-col justify-between p-3 bg-black/60 border border-gold-accent/20 hover:border-gold-accent/60 rounded-2xl text-left transition-all hover:bg-black/80 hover:shadow-lg active:scale-98 group cursor-pointer"
              id="action-email-btn"
            >
              <div className="flex justify-between items-center w-full">
                <div className="w-7 h-7 rounded-lg bg-gold-accent/10 border border-gold-accent/30 flex items-center justify-center text-gold-accent shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-gold-accent transition-colors" />
              </div>
              <div className="mt-4">
                <span className="block text-[8px] font-cinzel text-gold-accent tracking-widest font-bold uppercase">
                  EMAIL
                </span>
                <span className="block text-[10px] text-white/70 font-sans truncate font-light mt-0.5 group-hover:text-white transition-colors">
                  repalette809@gmail.com
                </span>
              </div>
            </button>

          </div>

          {/* LOWER DESIGN CREATES VALUE STRIP ACCENT */}
          <div className="mt-5 text-center" id="card-stamp">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
              <div className="w-14 h-[0.5px] bg-[#D4B483]/30" />
              <span className="font-cinzel text-[8px] tracking-[0.4em] text-gold-accent font-bold uppercase">
                DESIGN CREATES VALUE
              </span>
              <div className="w-14 h-[0.5px] bg-[#D4B483]/30" />
              <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
            </div>
            <p className="text-[7.5px] font-mono tracking-widest text-white/20 select-none uppercase">
              RE-PALETTE © 2026 • BEAUTY & WELFARE
            </p>
          </div>

        </div>

        {/* Dynamic encrypted Contact form Inquiry sheet */}
        {isContactOpen && (
          <ContactForm onClose={() => setIsContactOpen(false)} />
        )}

      </div>
    </SmartphoneWrapper>
  );
}

