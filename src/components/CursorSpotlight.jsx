import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorSpotlight() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse/trackpad, not touch)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsFinePointer(true);

      const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.body.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [mouseX, mouseY, isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: '520px',
        height: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201, 168, 91, 0.065) 0%, rgba(201, 168, 91, 0.02) 40%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9998,
        willChange: 'transform'
      }}
      aria-hidden="true"
    />
  );
}
