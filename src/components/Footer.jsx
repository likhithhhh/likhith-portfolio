import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Download } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#050606',
        borderTop: '1px solid #1f1d19',
        padding: '5rem 0 2.5rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Top Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid #1f1d19'
          }}
          className="footer-grid"
        >
          <style>{`
            @media (min-width: 900px) {
              .footer-grid {
                grid-template-columns: 1.4fr 0.8fr 0.8fr !important;
              }
            }
          `}</style>

          {/* Col 1: Identity & Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <motion.div
                whileHover={{ scale: 1.1, borderColor: '#E8D5A3' }}
                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1f1d19 0%, #111111 100%)',
                  border: '1.5px solid #C9A85B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    color: '#E8D5A3'
                  }}
                >
                  LC
                </span>
              </motion.div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  letterSpacing: '0.04em',
                  color: '#F5F1E8'
                }}
              >
                LIKHITH CHAPPATI
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: '#A6A19A',
                maxWidth: '420px'
              }}
            >
              Full Stack Developer specializing in MERN stack architectures, high-performance database optimization, and enterprise workflows.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              {[
                { href: PERSONAL_INFO.social.github, icon: <Github size={16} />, label: 'GitHub' },
                { href: PERSONAL_INFO.social.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn' },
                { href: `mailto:${PERSONAL_INFO.contact.email}`, icon: <Mail size={16} />, label: 'Email' }
              ].map(({ href, icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -2, borderColor: '#C9A85B', color: '#E8D5A3', backgroundColor: 'rgba(201,168,91,0.12)' }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: '#141414',
                    border: '1px solid #2d2924',
                    color: '#A6A19A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                  title={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Navigation Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0.1}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C9A85B',
                display: 'block',
                marginBottom: '1.25rem'
              }}
            >
              Navigation
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                  whileHover={{ color: '#E8D5A3', x: 3 }}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: '#A6A19A',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Verified Assets */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0.2}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C9A85B',
                display: 'block',
                marginBottom: '1.25rem'
              }}
            >
              Verified Document
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#A6A19A', lineHeight: 1.6, marginBottom: '1rem' }}>
              Download the official verified single-page technical curriculum vitae.
            </p>
            <motion.a
              href={PERSONAL_INFO.resumePath}
              download="Likhith_Chappati_Resume.pdf"
              className="btn-gold-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem', width: 'fit-content', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={14} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '2rem'
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#736e67' }}>
            © {new Date().getFullYear()} Likhith Chappati. All Rights Reserved.
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#A6A19A',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem'
            }}
          >
            <span>Engineered with React, Vite &amp; Framer Motion</span>
            <span style={{ color: '#C9A85B' }}>•</span>
            <span style={{ color: '#E8D5A3' }}>Black &amp; Gold Edition</span>
          </div>

          <motion.a
            href="#hero"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2, color: '#E8D5A3' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#C9A85B',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
