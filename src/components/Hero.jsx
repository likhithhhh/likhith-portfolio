import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Terminal,
  Zap,
  ShieldCheck,
  Sparkles,
  Database,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        delay: custom * 0.18,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8.25rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Floating Background Ambient Particles */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1
        }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '8%',
            width: '12px',
            height: '12px',
            border: '1px solid #C9A85B',
            transform: 'rotate(45deg)',
            opacity: 0.35
          }}
        />
        <motion.div
          animate={{ y: [18, -18, 18], rotate: [45, 90, 45] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            position: 'absolute',
            top: '65%',
            left: '12%',
            width: '8px',
            height: '8px',
            backgroundColor: '#C9A85B',
            transform: 'rotate(45deg)',
            opacity: 0.25
          }}
        />
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, -45, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{
            position: 'absolute',
            top: '25%',
            right: '10%',
            width: '14px',
            height: '14px',
            border: '1px solid #E8D5A3',
            transform: 'rotate(45deg)',
            opacity: 0.3
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .hero-grid {
                grid-template-columns: 1.15fr 0.85fr !important;
                gap: 4rem !important;
              }
            }
          `}</style>

          {/* Left Column: Typography & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Status Chip with Pulse */}
            <motion.div variants={itemVariants}>
              <div className="section-badge" style={{ gap: '0.625rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#C9A85B',
                    boxShadow: '0 0 10px #C9A85B'
                  }}
                  className="animate-pulse-glow"
                />
                <span style={{ letterSpacing: '0.12em' }}>Available for Software Engineering Roles</span>
              </div>
            </motion.div>

            {/* Professional Title */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9A85B',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 28 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ height: '1px', backgroundColor: '#C9A85B', display: 'inline-block' }}
                />
                <span>{PERSONAL_INFO.title}</span>
              </div>

              {/* Name Typography Appearing Word by Word */}
              <h1
                className="section-heading"
                style={{
                  fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#F5F1E8'
                }}
              >
                <div style={{ overflow: 'hidden', display: 'block' }}>
                  <motion.span
                    custom={0}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'inline-block' }}
                  >
                    LIKHITH
                  </motion.span>
                </div>
                <div style={{ overflow: 'hidden', display: 'block' }}>
                  <motion.span
                    custom={1}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-gold-sweep"
                    style={{ display: 'inline-block' }}
                  >
                    CHAPPATI
                  </motion.span>
                </div>
              </h1>
            </motion.div>

            {/* Specialization Badge Pill */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.875rem',
                  backgroundColor: 'rgba(23, 23, 23, 0.7)',
                  border: '1px solid #34302A',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: '#E8D5A3'
                }}
              >
                <Terminal size={14} style={{ color: '#C9A85B' }} />
                <span>{PERSONAL_INFO.specialization}</span>
              </div>
            </motion.div>

            {/* Main Headline & Supporting Paragraph with Smooth Upward Movement */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 600,
                  color: '#E8D5A3',
                  lineHeight: 1.3
                }}
              >
                "{PERSONAL_INFO.headline}"
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                  lineHeight: 1.7,
                  color: '#A6A19A',
                  maxWidth: '580px'
                }}
              >
                {PERSONAL_INFO.subheadline}
              </p>
            </motion.div>

            {/* Action Buttons with Spring Hover Effects */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '0.5rem'
              }}
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn-gold-primary"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                href={PERSONAL_INFO.resumePath}
                download="Likhith_Chappati_Resume.pdf"
                className="btn-gold-outline"
                title="Download verified resume PDF"
              >
                <Download size={18} style={{ color: '#C9A85B' }} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links & Direct Quick Connect */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '0.75rem'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: '#736e67',
                  textTransform: 'uppercase'
                }}
              >
                Connect With Me
              </span>
              <div style={{ height: '1px', width: '24px', backgroundColor: '#34302A' }} />

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#171717',
                    border: '1px solid #34302A',
                    color: '#A6A19A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  className="social-icon-btn"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#171717',
                    border: '1px solid #34302A',
                    color: '#A6A19A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#171717',
                    border: '1px solid #34302A',
                    color: '#A6A19A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  className="social-icon-btn"
                  title="Email Directly"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image Sliding in from Right with Subtle Scale */}
          <motion.div
            initial={{ opacity: 0, x: 70, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Ambient Back Glow Ring */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201, 168, 91, 0.18) 0%, rgba(138, 110, 48, 0.05) 50%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }}
            />

            {/* Concentric Rotating Gold Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '105%',
                maxWidth: '460px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                border: '1px dashed rgba(201, 168, 91, 0.25)',
                pointerEvents: 'none'
              }}
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '118%',
                maxWidth: '510px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                border: '1px dotted rgba(232, 213, 163, 0.15)',
                pointerEvents: 'none'
              }}
            />

            {/* Main Creative Portrait Frame */}
            <motion.div
              whileHover={{ y: -4, boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(201, 168, 91, 0.25)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '4/5',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #1f1d19 0%, #121212 100%)',
                border: '1.5px solid rgba(201, 168, 91, 0.4)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(201, 168, 91, 0.15)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem'
              }}
            >
              {/* Inner Decorative Accent Corner Marks */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  width: '16px',
                  height: '16px',
                  borderTop: '2px solid #C9A85B',
                  borderLeft: '2px solid #C9A85B'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '16px',
                  height: '16px',
                  borderTop: '2px solid #C9A85B',
                  borderRight: '2px solid #C9A85B'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  width: '16px',
                  height: '16px',
                  borderBottom: '2px solid #C9A85B',
                  borderLeft: '2px solid #C9A85B'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '16px',
                  height: '16px',
                  borderBottom: '2px solid #C9A85B',
                  borderRight: '2px solid #C9A85B'
                }}
              />

              {/* Portrait Top Header / HUD */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    color: '#C9A85B',
                    textTransform: 'uppercase'
                  }}
                >
                  <Sparkles size={12} />
                  <span>Developer Identity</span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#736e67'
                  }}
                >
                  SEC_ID // 2026
                </span>
              </div>

              {/* Center Portrait Visual */}
              <div
                style={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '1rem 0',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #25231e 0%, #111111 75%)',
                    border: '2px solid #C9A85B',
                    boxShadow: '0 0 25px rgba(201, 168, 91, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src="/images/portfolio_profile.jpeg"
                    alt="Likhith"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '110%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center 35%'
                    }}
                  />
                  {/* Gold Beam Highlight */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background: 'linear-gradient(180deg, rgba(201, 168, 91, 0.15) 0%, transparent 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Portrait Bottom Details */}
              <div
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid #34302A',
                  borderRadius: '12px',
                  padding: '0.875rem 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      color: '#F5F1E8'
                    }}
                  >
                    RGUKT CSE
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: '#A6A19A'
                    }}
                  >
                    B.Tech (2022–2026)
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(201, 168, 91, 0.15)',
                    border: '1px solid #C9A85B',
                    borderRadius: '6px',
                    padding: '0.25rem 0.625rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#E8D5A3'
                  }}
                >
                  8.7 CGPA
                </div>
              </div>
            </motion.div>

            {/* Floating Satellite Badge 1: MERN Stack */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '15%',
                left: '-10%',
                backgroundColor: 'rgba(23, 23, 23, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201, 168, 91, 0.4)',
                borderRadius: '10px',
                padding: '0.5rem 0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(201, 168, 91, 0.15)',
                zIndex: 4
              }}
              className="floating-chip"
            >
              <Zap size={16} style={{ color: '#C9A85B' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#F5F1E8' }}>
                  Java
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#A6A19A' }}>
                  Javascript & Python
                </div>
              </div>
            </motion.div>

            {/* Floating Satellite Badge 2: 40% DB Optimization */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '25%',
                right: '-8%',
                backgroundColor: 'rgba(23, 23, 23, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(201, 168, 91, 0.4)',
                borderRadius: '10px',
                padding: '0.5rem 0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(201, 168, 91, 0.15)',
                zIndex: 4
              }}
              className="floating-chip"
            >
              <Database size={16} style={{ color: '#E8D5A3' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#E8D5A3' }}>
                  Full Stack Developer
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#A6A19A' }}>
                  React | Node.js | MongoDB | Express
                </div>
              </div>
            </motion.div>

            {/* Floating Satellite Badge 3: ServiceNow */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                top: '15%',
                right: '4%',
                backgroundColor: 'rgba(23, 23, 23, 0.95)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #34302A',
                borderRadius: '10px',
                padding: '0.5rem 0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
                zIndex: 4
              }}
              className="floating-chip"
            >
              <ShieldCheck size={16} style={{ color: '#C9A85B' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: '#F5F1E8' }}>
                  ServiceNow Analyst Trainee
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: '#A6A19A' }}>
                  Enterprise Workflows
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '3.5rem'
          }}
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.375rem',
              color: '#736e67',
              transition: 'color 0.25s ease'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown size={18} style={{ color: '#C9A85B' }} />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <style>{`
        .social-icon-btn:hover {
          color: #E8D5A3 !important;
          border-color: #C9A85B !important;
          background-color: rgba(201, 168, 91, 0.15) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(201, 168, 91, 0.2);
        }
        @media (max-width: 640px) {
          .floating-chip {
            display: none !important;
          }
          #hero {
            padding-top: 7.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
