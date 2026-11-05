import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Coffee,
  Terminal,
  Atom,
  FileCode,
  Palette,
  LayoutGrid,
  Smartphone,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Lock,
  Layers,
  Database,
  Share2,
  AlertCircle,
  Boxes,
  Zap,
  TrendingUp,
  Briefcase,
  Workflow,
  GitBranch,
  FileCheck,
  Bot,
  GitPullRequest,
  Send,
  Code,
  Activity,
  Sparkles,
  Binary,
  Box,
  HardDrive,
  Globe,
  RefreshCw
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolioData';

// Icon resolver helper
const getSkillIcon = (iconName) => {
  const iconProps = { size: 19, style: { color: '#C9A85B' } };
  switch (iconName) {
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'Terminal': return <Terminal {...iconProps} />;
    case 'Atom': return <Atom {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'FileCode': return <FileCode {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'LayoutGrid': return <LayoutGrid {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'Server': return <Server {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Network': return <Network {...iconProps} />;
    case 'ShieldCheck': return <ShieldCheck {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'Lock': return <Lock {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'Share2': return <Share2 {...iconProps} />;
    case 'AlertCircle': return <AlertCircle {...iconProps} />;
    case 'Boxes': return <Boxes {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'Zap': return <Zap {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'TrendingUp': return <TrendingUp {...iconProps} />;
    case 'Briefcase': return <Briefcase {...iconProps} />;
    case 'Workflow': return <Workflow {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'FileCheck': return <FileCheck {...iconProps} />;
    case 'Bot': return <Bot {...iconProps} />;
    case 'GitPullRequest': return <GitPullRequest {...iconProps} />;
    case 'Send': return <Send {...iconProps} />;
    case 'Code': return <Code {...iconProps} />;
    case 'Activity': return <Activity {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} style={{ color: '#E8D5A3' }} />;
    case 'Binary': return <Binary {...iconProps} />;
    case 'Box': return <Box {...iconProps} />;
    case 'HardDrive': return <HardDrive {...iconProps} />;
    case 'Globe': return <Globe {...iconProps} />;
    case 'RefreshCw': return <RefreshCw {...iconProps} />;
    default: return <Code2 {...iconProps} />;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
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
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            02 // Capabilities
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#F5F1E8'
            }}
          >
            My Tech <span className="text-gold-gradient">Stack.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: '#A6A19A',
              maxWidth: '620px',
              margin: '0.75rem auto 0',
              lineHeight: 1.6
            }}
          >
            Engineered with modern full stack technologies, enterprise workflow tools, and solid computer science principles.
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

        {/* Category Filter Pills with Animated Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2.25rem'
          }}
        >
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  position: 'relative',
                  padding: '0.65rem 1.3rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: isSelected ? 600 : 500,
                  color: isSelected ? '#080909' : '#A6A19A',
                  backgroundColor: isSelected ? '#C9A85B' : 'rgba(23, 23, 23, 0.7)',
                  border: isSelected ? '1px solid #C9A85B' : '1px solid #34302A',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 0 18px rgba(201, 168, 91, 0.35)' : 'none'
                }}
                className="category-filter-btn"
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Compact wrapping skill capsules */}
        <motion.div
          layout
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.9rem'
          }}
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.28, delay: Math.min(index * 0.02, 0.3) }}
                whileHover={{ y: -2, scale: 1.03, borderColor: '#C9A85B' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#141414',
                  border: '1px solid rgba(201, 168, 91, 0.28)',
                  borderRadius: '9999px',
                  padding: '0.7rem 1.15rem 0.7rem 0.9rem',
                  cursor: 'default',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease'
                }}
                className="skill-capsule"
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C9A85B'
                  }}
                >
                  {getSkillIcon(skill.icon)}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#F5F1E8',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .skill-capsule:hover {
          background-color: #1a1916 !important;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45), 0 0 16px rgba(201, 168, 91, 0.18) !important;
        }
        .category-filter-btn:hover {
          border-color: #C9A85B !important;
          color: #E8D5A3 !important;
        }
      `}</style>
    </section>
  );
}
