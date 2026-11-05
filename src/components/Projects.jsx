import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowUpRight,
  Zap,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { isConfiguredUrl } from '../utils/links';

function VisitWebsiteButton({ project, compact = false }) {
  const liveUrl = project.links?.live;
  const canVisit = Boolean(project.links?.hasLive) && isConfiguredUrl(liveUrl);
  const padding = compact ? '0.5rem 1rem' : '0.55rem 1.125rem';

  if (!canVisit) {
    return (
      <span
        className="btn-gold-outline"
        aria-disabled="true"
        title="Live site coming soon"
        style={{
          padding,
          fontSize: '0.8125rem',
          opacity: 0.45,
          cursor: 'not-allowed',
          pointerEvents: 'none'
        }}
      >
        <ExternalLink size={16} />
        <span>Visit Website</span>
      </span>
    );
  }

  return (
    <a
      href={liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-gold-outline"
      style={{ padding, fontSize: '0.8125rem' }}
      title="Visit live website"
    >
      <ExternalLink size={16} />
      <span>Visit Website</span>
    </a>
  );
}

function ProjectInfo({ project, onOpenDetails, showTotal = false }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        maxWidth: '720px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            color: '#C9A85B',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          FEATURED PROJECT {project.featuredNumber}{showTotal ? ' / 05' : ''}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            color: '#A6A19A',
            backgroundColor: '#1b1a17',
            border: '1px solid #34302A',
            padding: '0.2rem 0.6rem',
            borderRadius: '4px'
          }}
        >
          {project.category}
        </span>
      </div>

      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.375rem)',
            fontWeight: 700,
            color: '#F5F1E8'
          }}
        >
          {project.title}
        </h3>
        <h4
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#E8D5A3',
            marginTop: '0.25rem'
          }}
        >
          {project.subtitle}
        </h4>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          color: '#A6A19A'
        }}
      >
        {project.description}
      </p>

      {project.impactMetric && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.45rem 0.875rem',
            backgroundColor: 'rgba(201, 168, 91, 0.08)',
            border: '1px solid rgba(201, 168, 91, 0.25)',
            borderRadius: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#E8D5A3',
            width: 'fit-content'
          }}
        >
          <Zap size={14} style={{ color: '#C9A85B' }} />
          <span>{project.impactMetric}</span>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: '#A6A19A',
              backgroundColor: '#181715',
              border: '1px solid #2d2924',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
        <button
          onClick={() => onOpenDetails(project)}
          className="btn-gold-primary"
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.8125rem' }}
        >
          <span>View Project Details</span>
          <ArrowUpRight size={16} />
        </button>
        <VisitWebsiteButton project={project} />
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('carousel');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const activeProject = PROJECTS[currentSlide];

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '7rem 0',
        backgroundColor: '#0c0d0d',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            <div className="section-badge" style={{ marginBottom: '1rem' }}>
              03 // Showcase
            </div>
            <h2
              className="section-heading"
              style={{
                fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                color: '#F5F1E8'
              }}
            >
              Things I've <span className="text-gold-gradient">Built.</span>
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
              An editorial selection of full stack applications, enterprise digitization platforms, and backend architectures. Click any project to inspect full technical specs.
            </p>
          </div>

          <div
            style={{
              display: 'inline-flex',
              backgroundColor: '#171717',
              border: '1px solid #34302A',
              borderRadius: '9999px',
              padding: '0.3rem'
            }}
          >
            <button
              onClick={() => setViewMode('carousel')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                backgroundColor: viewMode === 'carousel' ? '#C9A85B' : 'transparent',
                color: viewMode === 'carousel' ? '#080909' : '#A6A19A',
                transition: 'all 0.25s ease'
              }}
            >
              <SlidersHorizontal size={14} />
              <span>Interactive Carousel</span>
            </button>
            <button
              onClick={() => setViewMode('editorial')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                backgroundColor: viewMode === 'editorial' ? '#C9A85B' : 'transparent',
                color: viewMode === 'editorial' ? '#080909' : '#A6A19A',
                transition: 'all 0.25s ease'
              }}
            >
              <LayoutGrid size={14} />
              <span>Editorial List</span>
            </button>
          </div>
        </div>

        {viewMode === 'carousel' && (
          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  backgroundColor: '#141414',
                  border: '1.5px solid rgba(201, 168, 91, 0.45)',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 3.5vw, 3rem)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(201, 168, 91, 0.12)'
                }}
              >
                <ProjectInfo
                  project={activeProject}
                  onOpenDetails={setSelectedProject}
                  showTotal
                />
              </motion.div>
            </AnimatePresence>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1.75rem',
                padding: '0 0.5rem'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {PROJECTS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      height: '8px',
                      width: currentSlide === idx ? '28px' : '8px',
                      borderRadius: '9999px',
                      backgroundColor: currentSlide === idx ? '#C9A85B' : '#34302A',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={prevSlide}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#171717',
                    border: '1px solid #34302A',
                    color: '#E8D5A3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="carousel-arrow-btn"
                  aria-label="Previous Project"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#171717',
                    border: '1px solid #34302A',
                    color: '#E8D5A3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="carousel-arrow-btn"
                  aria-label="Next Project"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'editorial' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #2d2924',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 3vw, 2.75rem)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                }}
                className="featured-project-card"
              >
                <ProjectInfo project={project} onOpenDetails={setSelectedProject} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .featured-project-card:hover {
          border-color: rgba(201, 168, 91, 0.45) !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.75), 0 0 25px rgba(201, 168, 91, 0.1) !important;
        }
        .carousel-arrow-btn:hover {
          border-color: #C9A85B !important;
          background-color: rgba(201, 168, 91, 0.15) !important;
          color: #FFF !important;
        }
      `}</style>
    </section>
  );
}
