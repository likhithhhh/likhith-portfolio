import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Zap, Code2, Briefcase, Sparkles, TrendingUp } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

// Animated Number Counter Hook & Component
function Counter({ targetValue, suffix, isDecimal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 2000; // ms

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * targetValue;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetValue]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const icons = [
    <Award size={26} style={{ color: '#E8D5A3' }} />,
    <Code2 size={26} style={{ color: '#C9A85B' }} />,
    <Briefcase size={26} style={{ color: '#E8D5A3' }} />,
    <TrendingUp size={26} style={{ color: '#C9A85B' }} />
  ];

  return (
    <section
      id="milestones"
      style={{
        position: 'relative',
        padding: '7rem 0',
        backgroundColor: '#0c0d0d',
        borderTop: '1px solid #1f1d19',
        borderBottom: '1px solid #1f1d19',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            05 // Metrics
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#F5F1E8'
            }}
          >
            Milestones & <span className="text-gold-gradient">Achievements.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#A6A19A',
              maxWidth: '600px',
              margin: '0.75rem auto 0',
              lineHeight: 1.6
            }}
          >
            Measurable impact through consistent problem-solving, top-tier academic rigor, and real-world software engineering.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              height: '1px',
              width: '80px',
              background: 'linear-gradient(90deg, transparent, #C9A85B, transparent)',
              margin: '1.25rem auto 0'
            }}
          />
        </motion.div>

        {/* Counter Metric Cards Progressively Revealed */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: '#C9A85B' }}
              style={{
                backgroundColor: '#141414',
                border: '1px solid #2d2924',
                borderRadius: '20px',
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
              }}
              className="achievement-card"
            >
              {/* Top Accent Icon & Sublabel */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(201, 168, 91, 0.1)',
                    border: '1px solid rgba(201, 168, 91, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {icons[idx]}
                </motion.div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#C9A85B',
                    backgroundColor: 'rgba(201, 168, 91, 0.08)',
                    border: '1px solid rgba(201, 168, 91, 0.2)',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '4px'
                  }}
                >
                  {item.sublabel}
                </span>
              </div>

              {/* Number Counter Display with Gold Sweep */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: '#F5F1E8'
                  }}
                >
                  <Counter
                    targetValue={item.value}
                    suffix={item.suffix}
                    isDecimal={item.value % 1 !== 0}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#E8D5A3',
                    marginTop: '0.625rem'
                  }}
                >
                  {item.label}
                </h3>
              </div>

              {/* Explanatory description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  lineHeight: 1.6,
                  color: '#A6A19A',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #24211d'
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .achievement-card:hover {
          background-color: #1a1915 !important;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(201, 168, 91, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
