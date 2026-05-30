import React, { useState } from 'react';
import { playLuxurySound } from '../utils/audio';
import { Mail, Send, CheckCircle2, Shield, ArrowRight, X } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactFormProps {
  onClose: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Luxury Branding');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    playLuxurySound('click');

    setTimeout(() => {
      // Create message log
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        company: company || undefined,
        service,
        message,
        timestamp: new Date().toISOString()
      };

      // Store in local storage to keep history
      const savedMessages = JSON.parse(localStorage.getItem('haruto_inquiries') || '[]');
      savedMessages.push(newMessage);
      localStorage.setItem('haruto_inquiries', JSON.stringify(savedMessages));

      setIsSubmitting(false);
      setIsSuccess(true);
      playLuxurySound('success');
    }, 1500); // Luxury artificial speed delay for high status feeling
  };

  const handleClose = () => {
    playLuxurySound('collapse');
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-md transition-all duration-300">
      <div className="absolute inset-0" onClick={handleClose} />

      <div 
        className="w-full bg-[#0c0d10]/98 border-t border-gold-accent/40 rounded-t-[36px] p-6 pb-9 relative z-10 shadow-3xl glass-glow-gold max-h-[85%] overflow-y-auto"
        style={{ boxShadow: '0 -15px 40px rgba(212, 180, 131, 0.2)' }}
        id="contact-form-panel"
      >
        {/* Notch handle */}
        <div className="w-12 h-1 bg-gold-accent/20 rounded-full mx-auto mb-5" />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold-accent/15 hover:border-gold-accent/30 transition-all text-white/50 hover:text-gold-accent"
          id="close-form-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 flex flex-col items-center text-center animate-fade-in" id="submit-success-state">
            <div className="w-16 h-16 rounded-full bg-gold-accent/10 border border-gold-accent/40 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-gold-accent animate-pulse" />
            </div>
            
            <span className="text-[10px] font-cinzel tracking-[0.25em] text-gold-accent uppercase mb-2">
              Transmission Confirmed
            </span>
            <h3 className="text-xl font-cinzel text-white uppercase font-bold mb-3.5 tracking-wider">
              INQUIRY TRANSCRIBED
            </h3>
            <p className="text-xs text-white/70 max-w-xs leading-relaxed mb-8">
              Thank you for initiating contact. Custom briefing channels have logged your proposal. Haruto Suzuki will respond to your security enclave personally within 24 hours.
            </p>

            <button
              onClick={handleClose}
              className="w-full max-w-xs py-3.5 rounded-full font-cinzel text-xs tracking-widest text-[#0c0d10] bg-[#D4B483] hover:bg-[#eae0c5] transition-all font-bold shadow-lg"
              id="success-acknowledgement-btn"
            >
              RETURN TO BOARD
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="mb-4">
              <span className="text-[10px] font-cinzel tracking-widest text-gold-accent uppercase bg-gold-accent/10 px-2.5 py-1 rounded-full">
                Encrypted Inquiry
              </span>
              <h3 className="text-lg font-cinzel tracking-wider text-white mt-2 font-bold flex items-center gap-2">
                INITIATE PROJECT RECRUITMENT
              </h3>
            </div>

            {/* Service Selection Suite */}
            <div>
              <label className="block text-[8px] font-cinzel uppercase tracking-widest text-white/40 mb-1.5 font-bold">
                Project Suite Spectrum
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Luxury Branding', 'UI/UX Design', 'Full-Stack Web', 'Creative Direction'].map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => {
                      playLuxurySound('click');
                      setService(srv);
                    }}
                    className={`text-[10px] tracking-wide font-cinzel py-2.5 px-3 rounded-xl border transition-all text-center ${
                      service === srv 
                        ? 'bg-gold-accent/15 border-gold-accent/60 text-gold-accent font-bold' 
                        : 'bg-white/5 border-white/5 text-white/60 hover:text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Coordinates */}
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-[8px] font-cinzel uppercase tracking-widest text-white/40 mb-1 font-bold">
                  Client Identity Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Mercer"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold-accent/60 focus:bg-white/10 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-[8px] font-cinzel uppercase tracking-widest text-white/40 mb-1 font-bold">
                  Secure Communication Portal (Email) *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. corporate@enclave.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold-accent/60 focus:bg-white/10 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-[8px] font-cinzel uppercase tracking-widest text-white/40 mb-1 font-bold">
                  Corporate Nexus (Company / Optional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Omnichannel Inc."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold-accent/60 focus:bg-white/10 transition-all font-medium"
                />
              </div>
            </div>

            {/* Brief descriptor */}
            <div>
              <label className="block text-[8px] font-cinzel uppercase tracking-widest text-white/40 mb-1 font-bold">
                Project Mandate Strategy Detail *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail high-concept outlines, timeline horizons, and aesthetic aspirations..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold-accent/60 focus:bg-white/10 transition-all resize-none leading-relaxed font-light"
              />
            </div>

            {/* Safety badge */}
            <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40 font-mono mt-1">
              <Shield className="w-3.5 h-3.5 text-gold-accent/60" />
              <span>AES-256 Transport Encryption Active</span>
            </div>

            {/* Transmission Action button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-cinzel text-xs tracking-widest text-[#0c0d10] bg-[#D4B483] hover:bg-[#eae0c5] active:scale-[0.99] transition-all font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              id="submit-form-btn"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <span>NEGOTIATING CHANNELS...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT SECRET INQUIRY</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
