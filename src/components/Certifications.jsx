import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  ExternalLink,
  Workflow,
  Building2,
  Layers,
  Box,
  Cpu,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { isConfiguredUrl } from '../utils/links';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    const props = { size: 24, style: { color: '#C9A85B' } };
    switch (iconName) {
      case 'Workflow': return <Workflow {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Sparkles': return <Sparkles {...props} style={{ color: '#E8D5A3' }} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section
      id="certifications"
      style={{
        position: 'relative',
        padding: '7rem 0',
        backgroundColor: '#080909',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            06 // Credentials
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#F5F1E8'
            }}
          >
            My <span className="text-gold-gradient">Certifications.</span>
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
            Continuous professional education covering enterprise workflows, full-stack systems, object-oriented design, and generative AI.
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

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {CERTIFICATIONS.map((cert, index) => {
            const hasCertificate = isConfiguredUrl(cert.certificateUrl);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, borderColor: '#C9A85B' }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #2d2924',
                  borderRadius: '18px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
                }}
                className="cert-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(201, 168, 91, 0.1)',
                      border: '1px solid rgba(201, 168, 91, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getCertIcon(cert.icon)}
                  </motion.div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6875rem',
                        color: '#A6A19A',
                        backgroundColor: '#1a1916',
                        border: '1px solid #34302A',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {cert.category}
                    </span>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#E8D5A3',
                        backgroundColor: 'rgba(201, 168, 91, 0.12)',
                        border: '1px solid rgba(201, 168, 91, 0.3)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: '#F5F1E8',
                      lineHeight: 1.3
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: '#C9A85B',
                      marginTop: '0.375rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.375rem'
                    }}
                  >
                    <FileCheck size={14} />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    lineHeight: 1.55,
                    color: '#A6A19A'
                  }}
                >
                  {cert.description}
                </p>

                <div
                  style={{
                    paddingTop: '0.875rem',
                    borderTop: '1px solid #24211d',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.75rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <CheckCircle size={14} style={{ color: '#27c93f' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#A6A19A' }}>
                      Verified Credential
                    </span>
                  </div>

                  {hasCertificate ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-btn"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#E8D5A3',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0'
                      }}
                    >
                      <span>Details</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span
                      title="Certificate link coming soon"
                      style={{
                        color: '#736e67',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0',
                        opacity: 0.7
                      }}
                    >
                      <span>Details</span>
                      <ExternalLink size={12} />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cert-card:hover {
          background-color: #191815 !important;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7), 0 0 22px rgba(201, 168, 91, 0.12) !important;
        }
        .cert-verify-btn:hover {
          color: #C9A85B !important;
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
