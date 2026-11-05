import React from 'react';
import { motion } from 'framer-motion';

export default function GoldGlow() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {/* Top Left Golden Ambient Glow — slow float */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 168, 91, 0.08) 0%, rgba(84, 68, 34, 0.03) 45%, transparent 70%)',
          filter: 'blur(90px)'
        }}
      />

      {/* Hero Right Golden Ambient Spotlight — reverse float */}
      <motion.div
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
        style={{
          position: 'absolute',
          top: '18%',
          right: '-8%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232, 213, 163, 0.06) 0%, rgba(138, 110, 48, 0.03) 50%, transparent 75%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Mid-page Bronze Spotlight — gentle drift */}
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 16, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
        style={{
          position: 'absolute',
          top: '52%',
          left: '20%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 168, 91, 0.04) 0%, rgba(52, 48, 42, 0.03) 55%, transparent 80%)',
          filter: 'blur(120px)'
        }}
      />

      {/* Bottom Contact Warm Atmosphere — slow pulse */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [1, 0.85, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 168, 91, 0.07) 0%, rgba(84, 68, 34, 0.02) 50%, transparent 75%)',
          filter: 'blur(90px)'
        }}
      />

      {/* Ultra Subtle Grid Overlay */}
      <div
        className="bg-subtle-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
        }}
      />
    </div>
  );
}
