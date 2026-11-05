import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 9999,
        background: 'rgba(52, 48, 42, 0.4)'
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #8A6E30 0%, #C9A85B 50%, #E8D5A3 100%)',
          boxShadow: '0 0 10px rgba(201, 168, 91, 0.7)'
        }}
      />
    </div>
  );
}
