/**
 * Luxury Synthesized Audio Haptics
 * Uses Web Audio API to generate high-end, tactile click chimes.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playLuxurySound(type: 'click' | 'success' | 'expand' | 'collapse' | 'sparkle' = 'click') {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Create custom nodes
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Connect
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (type === 'click') {
      // High-end, premium tactile tick
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.03);

      gainNode.gain.setValueAtTime(0.06, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.start(now);
      osc.stop(now + 0.03);
    } else if (type === 'success') {
      // Double success chime (luxury golden feel)
      const osc2 = ctx.createOscillator();
      const gainNode2 = ctx.createGain();
      osc2.connect(gainNode2);
      gainNode2.connect(ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now); // A5
      gainNode.gain.setValueAtTime(0.05, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1320, now + 0.06); // E6
      gainNode2.gain.setValueAtTime(0.04, now + 0.06);
      gainNode2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.start(now);
      osc.stop(now + 0.15);
      osc2.start(now + 0.06);
      osc2.stop(now + 0.25);
    } else if (type === 'expand') {
      // Growing disclosure hum sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.linearRampToValueAtTime(450, now + 0.12);

      gainNode.gain.setValueAtTime(0.01, now);
      gainNode.gain.linearRampToValueAtTime(0.04, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'collapse') {
      // Descending collapse signature sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.linearRampToValueAtTime(300, now + 0.12);

      gainNode.gain.setValueAtTime(0.04, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'sparkle') {
      // Golden light glitter chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2200, now);
      osc.frequency.setValueAtTime(2600, now + 0.04);
      osc.frequency.setValueAtTime(3100, now + 0.08);

      gainNode.gain.setValueAtTime(0.02, now);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.start(now);
      osc.stop(now + 0.18);
    }
  } catch (error) {
    // Audio Context might be blocked before user interaction, fail silently
    console.debug('Haptic sound context play blocked:', error);
  }
}
