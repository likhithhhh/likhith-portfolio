import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckCircle2,
  Server,
  Database,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { isConfiguredUrl } from '../utils/links';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem'
        }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(8, 9, 9, 0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '860px',
            maxHeight: '90vh',
            backgroundColor: '#121212',
            border: '1.5px solid rgba(201, 168, 91, 0.4)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(201, 168, 91, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 10
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: '1.5rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #28241f',
              backgroundColor: '#171717'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: '#C9A85B',
                  backgroundColor: 'rgba(201, 168, 91, 0.12)',
                  border: '1px solid rgba(201, 168, 91, 0.3)',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '6px'
                }}
              >
                PROJ // {project.featuredNumber}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: '#F5F1E8'
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: '#A6A19A'
                  }}
                >
                  {project.subtitle} • {project.category}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#21201d',
                border: '1px solid #34302A',
                color: '#A6A19A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              className="modal-close-btn"
              aria-label="Close Project Details"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div
            style={{
              padding: '2rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            {/* Impact Metric Banner */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'rgba(201, 168, 91, 0.08)',
                border: '1px solid rgba(201, 168, 91, 0.3)',
                borderRadius: '12px',
                padding: '1rem 1.25rem'
              }}
            >
              <Zap size={22} style={{ color: '#E8D5A3', flexShrink: 0 }} />
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    color: '#C9A85B',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  Key Architectural Impact
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#F5F1E8',
                    marginTop: '2px'
                  }}
                >
                  {project.impactMetric}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A85B',
                  marginBottom: '0.75rem'
                }}
              >
                Project Overview
              </h4>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#D4CFCA'
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Architecture Stack Breakdown */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A85B',
                  marginBottom: '1rem'
                }}
              >
                System Architecture
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem'
                }}
              >
                <div style={{ backgroundColor: '#181715', border: '1px solid #2d2924', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <Layers size={16} style={{ color: '#C9A85B' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E8D5A3' }}>Frontend</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#A6A19A' }}>
                    {project.architecture.frontend}
                  </p>
                </div>

                <div style={{ backgroundColor: '#181715', border: '1px solid #2d2924', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <Server size={16} style={{ color: '#C9A85B' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E8D5A3' }}>Backend</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#A6A19A' }}>
                    {project.architecture.backend}
                  </p>
                </div>

                <div style={{ backgroundColor: '#181715', border: '1px solid #2d2924', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <Database size={16} style={{ color: '#C9A85B' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E8D5A3' }}>Database</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#A6A19A' }}>
                    {project.architecture.database}
                  </p>
                </div>

                <div style={{ backgroundColor: '#181715', border: '1px solid #2d2924', borderRadius: '10px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                    <ShieldCheck size={16} style={{ color: '#C9A85B' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E8D5A3' }}>Security</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: '#A6A19A' }}>
                    {project.architecture.security}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features & Engineering Highlights */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A85B',
                  marginBottom: '1rem'
                }}
              >
                Key Features & Workflows
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.75rem'
                }}
              >
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(23, 23, 23, 0.6)',
                      border: '1px solid #28241f',
                      borderRadius: '8px'
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: '#C9A85B', flexShrink: 0, marginTop: '2px' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: '#F5F1E8'
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A85B',
                  marginBottom: '0.75rem'
                }}
              >
                My Core Contributions
              </h4>
              <ul
                style={{
                  paddingLeft: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: '#A6A19A',
                  lineHeight: 1.6
                }}
              >
                {project.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A85B',
                  marginBottom: '0.75rem'
                }}
              >
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#E8D5A3',
                      backgroundColor: '#1b1a17',
                      border: '1px solid #34302A',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '6px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              padding: '1.25rem 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderTop: '1px solid #28241f',
              backgroundColor: '#171717'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#C9A85B'
                }}
              />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#A6A19A' }}>
                {project.links.statusBadge}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline"
                style={{ padding: '0.5rem 1.125rem', fontSize: '0.875rem' }}
              >
                <Github size={16} />
                <span>GitHub Repository</span>
              </a>

              {project.links?.hasLive && isConfiguredUrl(project.links.live) ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary"
                  style={{ padding: '0.5rem 1.125rem', fontSize: '0.875rem' }}
                  title="Visit live website"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span
                  className="btn-gold-primary"
                  aria-disabled="true"
                  title="Live site coming soon"
                  style={{
                    padding: '0.5rem 1.125rem',
                    fontSize: '0.875rem',
                    opacity: 0.45,
                    cursor: 'not-allowed',
                    pointerEvents: 'none'
                  }}
                >
                  <span>Visit Website</span>
                  <ExternalLink size={16} />
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .modal-close-btn:hover {
          color: #E8D5A3 !important;
          border-color: #C9A85B !important;
          background-color: rgba(201, 168, 91, 0.15) !important;
        }
      `}</style>
    </AnimatePresence>
  );
}
