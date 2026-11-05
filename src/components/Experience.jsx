import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Linkedin,
  ArrowUpRight
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { isConfiguredUrl } from '../utils/links';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      style={{
        position: 'relative',
        padding: '7rem 0',
        backgroundColor: '#080909',
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
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            04 // Journey
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#F5F1E8'
            }}
          >
            Professional <span className="text-gold-gradient">Experience.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#A6A19A',
              maxWidth: '650px',
              marginTop: '0.5rem',
              lineHeight: 1.6
            }}
          >
            A timeline of hands-on software development and enterprise workflow engineering across three technical internships.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              height: '1px',
              width: '120px',
              background: 'linear-gradient(90deg, #C9A85B, transparent)',
              transformOrigin: 'left',
              marginTop: '1rem'
            }}
          />
        </motion.div>

        {/* Timeline Container with Progressively Drawing Golden Line */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            paddingLeft: '1.75rem',
            marginLeft: '0.75rem'
          }}
          className="experience-timeline"
        >
          {/* Static Background Rail */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#24211d'
            }}
          />

          {/* Animated Gold Line Drawing Progressively as User Scrolls */}
          <motion.div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              scaleY,
              transformOrigin: 'top',
              background: 'linear-gradient(180deg, #E8D5A3 0%, #C9A85B 70%, #8A6E30 100%)',
              boxShadow: '0 0 12px rgba(201, 168, 91, 0.7)'
            }}
          />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              {/* Timeline Gold Glowing Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 350, damping: 20, delay: index * 0.15 }}
                style={{
                  position: 'absolute',
                  left: '-2.375rem',
                  top: '1.5rem',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#080909',
                  border: '3px solid #C9A85B',
                  boxShadow: '0 0 15px rgba(201, 168, 91, 0.8)',
                  zIndex: 2
                }}
              />

              {/* Experience Card with Hover Elevation */}
              <motion.div
                whileHover={{ y: -5, borderColor: '#C9A85B' }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #2d2924',
                  borderRadius: '20px',
                  padding: 'clamp(1.25rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
                className="experience-card"
              >
                {/* Header: Company, Role & Duration */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: '#C9A85B',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {exp.badge}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                        fontWeight: 700,
                        color: '#F5F1E8',
                        marginTop: '0.25rem'
                      }}
                    >
                      {exp.company}
                    </h3>
                    <h4
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: '#E8D5A3',
                        marginTop: '0.25rem'
                      }}
                    >
                      {exp.role}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8125rem',
                        color: '#E8D5A3',
                        backgroundColor: 'rgba(201, 168, 91, 0.1)',
                        border: '1px solid rgba(201, 168, 91, 0.25)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '6px'
                      }}
                    >
                      <Calendar size={14} style={{ color: '#C9A85B' }} />
                      <span>{exp.duration}</span>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: '#A6A19A',
                        paddingLeft: '0.25rem'
                      }}
                    >
                      <MapPin size={12} style={{ color: '#C9A85B' }} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Brief Summary */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: '#A6A19A',
                    lineHeight: 1.6
                  }}
                >
                  {exp.summary}
                </p>

                {/* Detailed Responsibilities List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {exp.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <CheckCircle2
                        size={16}
                        style={{ color: '#C9A85B', flexShrink: 0, marginTop: '3px' }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                          color: '#D4CFCA'
                        }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {isConfiguredUrl(exp.companyLinkedIn) ? (
                  <a
                    href={exp.companyLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-linkedin-link"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      width: 'fit-content',
                      color: '#C9A85B',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.02em'
                    }}
                  >
                    <Linkedin size={14} />
                    <span>Visit Company on LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span
                    title="Company LinkedIn coming soon"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      width: 'fit-content',
                      color: '#736e67',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      opacity: 0.7
                    }}
                  >
                    <Linkedin size={14} />
                    <span>Visit Company on LinkedIn</span>
                    <ArrowUpRight size={13} />
                  </span>
                )}

                {/* Applied Skills Pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid #24211d'
                  }}
                >
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: '#E8D5A3',
                        backgroundColor: '#1a1916',
                        border: '1px solid #34302A',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '4px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-card:hover {
          background-color: #181714 !important;
          box-shadow: 0 14px 40px rgba(0, 0, 0, 0.75), 0 0 25px rgba(201, 168, 91, 0.12) !important;
        }
        .company-linkedin-link:hover {
          color: #E8D5A3 !important;
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
