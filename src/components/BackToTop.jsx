import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 900,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: '#171717',
            border: '1.5px solid #C9A85B',
            color: '#E8D5A3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 16px rgba(201, 168, 91, 0.35)',
            transition: 'background-color 0.25s ease, color 0.25s ease'
          }}
          className="back-to-top-btn"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
          <style>{`
            .back-to-top-btn:hover {
              background-color: #C9A85B !important;
              color: #080909 !important;
            }
          `}</style>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
