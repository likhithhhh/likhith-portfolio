import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Layers,
  ShieldCheck,
  Zap,
  Workflow,
  MapPin,
  Calendar,
  CheckCircle2,
  FileCode2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layers size={22} style={{ color: '#C9A85B' }} />,
      title: 'Full Stack Engineering',
      desc: 'Building responsive React interfaces powered by robust, non-blocking Node.js and Express services.'
    },
    {
      icon: <ShieldCheck size={22} style={{ color: '#E8D5A3' }} />,
      title: 'Backend Security & RBAC',
      desc: 'Implementing stateless JWT authentication, fine-grained access gates, and protected route hierarchies.'
    },
    {
      icon: <Zap size={22} style={{ color: '#C9A85B' }} />,
      title: 'Database Optimization',
      desc: 'Engineering compound MongoDB indexes, aggregation pipelines, and query speedups of up to 40%.'
    },
    {
      icon: <Workflow size={22} style={{ color: '#E8D5A3' }} />,
      title: 'Enterprise Workflows',
      desc: 'Automating multi-system provisioning with ServiceNow Flow Designer, Decision Builder, and Business Rules.'
    }
  ];

  return (
    <section
      id="about"
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
          style={{ marginBottom: '3.5rem' }}
        >
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            01 // Profile
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#F5F1E8'
            }}
          >
            Beyond the <span className="text-gold-gradient">Code.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: '#A6A19A',
              letterSpacing: '0.05em',
              marginTop: '0.5rem'
            }}
          >
            Engineering scalable digital products with strong software foundations
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              height: '1px',
              width: '120px',
              background: 'linear-gradient(90deg, #C9A85B, transparent)',
              transformOrigin: 'left',
              marginTop: '1rem'
            }}
          />
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .about-grid {
                grid-template-columns: 1.2fr 0.8fr !important;
                gap: 3.5rem !important;
              }
            }
          `}</style>

          {/* Left: Professional Story & Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: '#141414',
                border: '1px solid #2d2924',
                borderRadius: '20px',
                padding: '2.25rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
              }}
              whileHover={{ borderColor: 'rgba(201, 168, 91, 0.4)' }}
            >
              {/* Gold Quote Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '25px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '8rem',
                  lineHeight: 1,
                  color: 'rgba(201, 168, 91, 0.08)',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                “
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.8,
                    color: '#F5F1E8'
                  }}
                >
                  {PERSONAL_INFO.about.intro}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.8,
                    color: '#A6A19A'
                  }}
                >
                  {PERSONAL_INFO.about.expertise} {PERSONAL_INFO.about.experienceSummary}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.0625rem',
                    lineHeight: 1.8,
                    color: '#E8D5A3',
                    fontWeight: 500
                  }}
                >
                  {PERSONAL_INFO.about.philosophy}
                </p>
              </div>
            </motion.div>

            {/* Core Architectural Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: '#C9A85B',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FileCode2 size={16} />
                <span>Core Engineering Focus</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1rem'
                }}
              >
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4, borderColor: '#C9A85B', backgroundColor: '#1c1b18' }}
                    style={{
                      backgroundColor: '#171717',
                      border: '1px solid #34302A',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.625rem',
                      transition: 'border-color 0.25s ease, background-color 0.25s ease'
                    }}
                    className="pillar-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(201, 168, 91, 0.1)',
                          border: '1px solid rgba(201, 168, 91, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {pillar.icon}
                      </div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          color: '#F5F1E8'
                        }}
                      >
                        {pillar.title}
                      </h4>
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        lineHeight: 1.6,
                        color: '#A6A19A'
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Education Card & Key Metadata */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Verified Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(201, 168, 91, 0.6)' }}
              style={{
                backgroundColor: '#151515',
                border: '1.5px solid rgba(201, 168, 91, 0.35)',
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(201, 168, 91, 0.08)',
                transition: 'border-color 0.3s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(201, 168, 91, 0.15)',
                    border: '1.5px solid #C9A85B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E8D5A3'
                  }}
                >
                  <GraduationCap size={24} />
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(201, 168, 91, 0.18)',
                    border: '1px solid #C9A85B',
                    borderRadius: '9999px',
                    padding: '0.375rem 0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: '#E8D5A3'
                  }}
                >
                  <Award size={14} style={{ color: '#C9A85B' }} />
                  <span>{PERSONAL_INFO.education.grade}</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#C9A85B',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  Academic Degree
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#F5F1E8',
                    marginTop: '0.25rem'
                  }}
                >
                  {PERSONAL_INFO.education.degree}
                </h3>
                <h4
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: '#A6A19A',
                    marginTop: '0.25rem'
                  }}
                >
                  {PERSONAL_INFO.education.institution}
                </h4>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '0.875rem 0',
                  borderTop: '1px solid #2d2924',
                  borderBottom: '1px solid #2d2924',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} style={{ color: '#C9A85B' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: '#E8D5A3' }}>
                    {PERSONAL_INFO.education.duration}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} style={{ color: '#C9A85B' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: '#A6A19A' }}>
                    Andhra Pradesh, India
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {PERSONAL_INFO.education.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <CheckCircle2 size={16} style={{ color: '#C9A85B', flexShrink: 0, marginTop: '2px' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        color: '#A6A19A'
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Metadata Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                backgroundColor: '#141414',
                border: '1px solid #2b2721',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #24221f'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#736e67' }}>
                  PRIMARY ROLE
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 600, color: '#E8D5A3' }}>
                  Full Stack Engineer
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #24221f'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#736e67' }}>
                  SPECIALIZATION
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 600, color: '#F5F1E8' }}>
                  MERN & Enterprise Workflows
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#736e67' }}>
                  STATUS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#C9A85B',
                    fontWeight: 600
                  }}
                >
                  ● Active & Interviewing
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
