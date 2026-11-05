import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import GoldGlow from './components/GoldGlow';
import CursorSpotlight from './components/CursorSpotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#080909' }}>
      {/* Top Gold Progress Indicator */}
      <ScrollProgress />

      {/* Atmospheric Ambient Lighting Background */}
      <GoldGlow />

      {/* Subtle Desktop-Only Cursor Following Gold Glow */}
      <CursorSpotlight />

      {/* Sticky Blur Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer & Floating Navigation Utilities */}
      <Footer />
      <BackToTop />
    </div>
  );
}
