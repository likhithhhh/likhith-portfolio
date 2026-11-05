import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ExternalLink, Sparkles } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'milestones', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: isScrolled ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
              borderRadius: '9999px',
              backgroundColor: isScrolled ? 'rgba(17, 17, 17, 0.85)' : 'rgba(17, 17, 17, 0.4)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: isScrolled ? '1px solid rgba(201, 168, 91, 0.3)' : '1px solid rgba(52, 48, 42, 0.4)',
              boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(201, 168, 91, 0.08)' : 'none',
              transition: 'all 0.35s ease'
            }}
          >
            {/* Brand Monogram */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1f1d19 0%, #111111 100%)',
                  border: '1.5px solid #C9A85B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 12px rgba(201, 168, 91, 0.25)',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    color: '#E8D5A3',
                    letterSpacing: '1px'
                  }}
                >
                  LC
                </span>
                <span
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#C9A85B',
                    boxShadow: '0 0 6px #C9A85B'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    letterSpacing: '0.04em',
                    color: '#F5F1E8'
                  }}
                >
                  LIKHITH CHAPPATI
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#C9A85B',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  Full Stack Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.25rem'
              }}
              className="desktop-nav"
            >
              <style>{`
                @media (min-width: 992px) {
                  .desktop-nav { display: flex !important; }
                  .mobile-nav-toggle { display: none !important; }
                }
              `}</style>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      position: 'relative',
                      padding: '0.5rem 0.875rem',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#E8D5A3' : '#A6A19A',
                      textDecoration: 'none',
                      borderRadius: '9999px',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(201, 168, 91, 0.12)',
                          border: '1px solid rgba(201, 168, 91, 0.3)',
                          zIndex: -1
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: Resume & CTA */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.75rem'
              }}
              className="desktop-nav"
            >
              <a
                href={PERSONAL_INFO.resumePath}
                download="Likhith_Chappati_Resume.pdf"
                className="btn-gold-outline"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.8125rem',
                  borderRadius: '9999px'
                }}
                title="Download verified resume PDF"
              >
                <Download size={14} style={{ color: '#C9A85B' }} />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-gold-primary"
                style={{
                  padding: '0.5rem 1.125rem',
                  fontSize: '0.8125rem',
                  borderRadius: '9999px'
                }}
              >
                <Sparkles size={14} />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-nav-toggle"
              style={{
                background: 'rgba(23, 23, 23, 0.8)',
                border: '1px solid #34302A',
                borderRadius: '8px',
                padding: '0.5rem',
                color: '#E8D5A3',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '1rem',
              right: '1rem',
              zIndex: 998,
              backgroundColor: '#111111',
              borderRadius: '16px',
              border: '1px solid rgba(201, 168, 91, 0.35)',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(201, 168, 91, 0.15)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem'
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#E8D5A3' : '#A6A19A',
                      backgroundColor: isActive ? 'rgba(201, 168, 91, 0.12)' : 'transparent',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      borderLeft: isActive ? '3px solid #C9A85B' : '3px solid transparent'
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #34302A'
                }}
              >
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Likhith_Chappati_Resume.pdf"
                  className="btn-gold-outline"
                  style={{ flex: 1, padding: '0.75rem', fontSize: '0.875rem' }}
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn-gold-primary"
                  style={{ flex: 1, padding: '0.75rem', fontSize: '0.875rem' }}
                >
                  <Sparkles size={16} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
