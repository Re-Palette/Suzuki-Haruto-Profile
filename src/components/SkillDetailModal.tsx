import React from 'react';
import { playLuxurySound } from '../utils/audio';
import { Sparkles, Trophy, CheckCircle, X } from 'lucide-react';
import { Skill } from '../types';

interface SkillDetailModalProps {
  skill: Skill | null;
  onClose: () => void;
}

export default function SkillDetailModal({ skill, onClose }: SkillDetailModalProps) {
  if (!skill) return null;

  const handleClose = () => {
    playLuxurySound('collapse');
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      {/* Click-outside backdrop */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Slide-Up Drawer Drawer Content */}
      <div 
        className="w-full bg-[#0d0e12]/95 border-t border-gold-accent/30 rounded-t-[32px] p-6 pb-8 relative z-10 shadow-3xl glass-glow-gold max-h-[80%] overflow-y-auto transform transition-transform duration-300"
        id="skill-drawer-panel"
        style={{
          boxShadow: '0 -10px 40px rgba(212, 180, 131, 0.15)'
        }}
      >
        {/* Top gold drag bar simulator */}
        <div className="w-12 h-1 bg-gold-accent/30 rounded-full mx-auto mb-5" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-accent/15 hover:border-gold-accent/30 transition-all text-white/50 hover:text-gold-accent"
          id="close-drawer-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Skill Title & Category */}
        <div className="mb-4">
          <span className="text-[10px] font-cinzel tracking-widest text-gold-accent uppercase bg-gold-accent/10 px-2.5 py-1 rounded-full">
            {skill.category}
          </span>
          <h3 className="text-xl font-cinzel tracking-wider text-white mt-2.5 font-bold flex items-center gap-2">
            {skill.name}
            <Sparkles className="w-4.5 h-4.5 text-gold-accent/80" />
          </h3>
        </div>

        {/* Proficiency Gauge */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-5">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs tracking-wider text-white/60 font-semibold uppercase">Expertise Quotient</span>
            <span className="text-sm font-cinzel text-gold-accent font-bold">{skill.level}</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-gold-accent via-[#eae0c5] to-gold-accent h-full rounded-full transition-all duration-1000"
              style={{ width: skill.level }}
            />
          </div>
        </div>

        {/* Dynamic description */}
        <p className="text-sm text-white/80 leading-relaxed mb-6 font-light">
          {skill.description}
        </p>

        {/* Highlights List */}
        <div className="space-y-4">
          <h4 className="text-xs font-cinzel tracking-widest text-[#eae0c5] uppercase font-bold border-b border-white/5 pb-2">
            Selected Workflows
          </h4>
          <ul className="space-y-3">
            {skill.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs text-white/70 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Badge Footer */}
        <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-gold-accent/80">
          <Trophy className="w-4 h-4 text-gold-accent" />
          <span className="text-[10px] font-cinzel uppercase tracking-widest text-gold-accent/70">
            MINIMAL JAPANESE MASTERCLASS CERTIFIED
          </span>
        </div>
      </div>
    </div>
  );
}
