import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please add a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please enter a message of at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger elegant celebratory golden confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C9A85B', '#E8D5A3', '#FFFFFF', '#8A6E30']
      });
    } catch (err) {
      // Ignore if unavailable
    }

    // Launch genuine mailto link with encoded subject and message body
    const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '7rem 0',
        backgroundColor: '#080909',
        borderTop: '1px solid #1f1d19',
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
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div className="section-badge" style={{ marginBottom: '1rem' }}>
            07 // Get In Touch
          </div>
          <h2
            className="section-heading"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
              color: '#F5F1E8'
            }}
          >
            Let's Create <span className="text-gold-gradient">Something Meaningful.</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.0625rem',
              color: '#A6A19A',
              maxWidth: '650px',
              margin: '0.75rem auto 0',
              lineHeight: 1.6
            }}
          >
            Have an interesting idea or an opportunity? I'd love to connect and explore what we can build together.
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

        {/* Contact Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .contact-grid {
                grid-template-columns: 0.9fr 1.1fr !important;
                gap: 3.5rem !important;
              }
            }
          `}</style>

          {/* Left: Contact Info & Channels with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: '#C9A85B' }}
              style={{
                backgroundColor: '#141414',
                border: '1px solid #2d2924',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
              className="contact-info-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(201, 168, 91, 0.1)',
                    border: '1px solid rgba(201, 168, 91, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C9A85B'
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#736e67', textTransform: 'uppercase' }}>
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#F5F1E8',
                      textDecoration: 'none',
                      marginTop: '2px'
                    }}
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                style={{
                  backgroundColor: '#1f1e1b',
                  border: '1px solid #34302A',
                  color: copiedEmail ? '#27c93f' : '#E8D5A3',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -3, borderColor: '#C9A85B' }}
              style={{
                backgroundColor: '#141414',
                border: '1px solid #2d2924',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
              className="contact-info-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(201, 168, 91, 0.1)',
                    border: '1px solid rgba(201, 168, 91, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C9A85B'
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#736e67', textTransform: 'uppercase' }}>
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#F5F1E8',
                      textDecoration: 'none',
                      marginTop: '2px'
                    }}
                  >
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                style={{
                  backgroundColor: '#1f1e1b',
                  border: '1px solid #34302A',
                  color: copiedPhone ? '#27c93f' : '#E8D5A3',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </motion.div>

            {/* Social Connect Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}
            >
              <motion.a
                whileHover={{ y: -3, borderColor: '#C9A85B' }}
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #2d2924',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  textDecoration: 'none',
                  color: '#F5F1E8',
                  transition: 'all 0.25s ease'
                }}
                className="social-card-btn"
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#1c1b18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E8D5A3'
                  }}
                >
                  <Github size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem' }}>
                    GitHub
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#A6A19A' }}>
                    @likhithhhh
                  </div>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -3, borderColor: '#C9A85B' }}
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#141414',
                  border: '1px solid #2d2924',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  textDecoration: 'none',
                  color: '#F5F1E8',
                  transition: 'all 0.25s ease'
                }}
                className="social-card-btn"
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#1c1b18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C9A85B'
                  }}
                >
                  <Linkedin size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem' }}>
                    LinkedIn
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#A6A19A' }}>
                    in/likhith-chappati
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Location & Status Card */}
            <div
              style={{
                backgroundColor: 'rgba(23, 23, 23, 0.6)',
                border: '1px solid #28241f',
                borderRadius: '14px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem'
              }}
            >
              <MapPin size={20} style={{ color: '#C9A85B', flexShrink: 0 }} />
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#736e67', textTransform: 'uppercase' }}>
                  Location & Availability
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#F5F1E8', marginTop: '2px' }}>
                  {PERSONAL_INFO.contact.location} • {PERSONAL_INFO.contact.status}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Validated Contact Form with Smooth Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundColor: '#141414',
              border: '1.5px solid #2d2924',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
            }}
          >
            {isSubmitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1rem',
                  padding: '2rem 1rem'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(201, 168, 91, 0.15)',
                    border: '2px solid #C9A85B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E8D5A3'
                  }}
                >
                  <Sparkles size={28} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#F5F1E8'
                  }}
                >
                  Email Client Launched!
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: '#A6A19A',
                    maxWidth: '420px'
                  }}
                >
                  Your message has been pre-formatted for direct delivery to{' '}
                  <span style={{ color: '#E8D5A3' }}>{PERSONAL_INFO.contact.email}</span>. Thank you for connecting!
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-gold-outline"
                  style={{ marginTop: '1rem' }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MessageSquare size={18} style={{ color: '#C9A85B' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: '#F5F1E8' }}>
                    Send Direct Message
                  </span>
                </div>

                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#A6A19A',
                      marginBottom: '0.375rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      backgroundColor: '#1b1a17',
                      border: formErrors.name ? '1px solid #ff5f56' : '1px solid #34302A',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#F5F1E8',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    className="form-input"
                  />
                  {formErrors.name && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#ff5f56', marginTop: '4px', display: 'block' }}>
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#A6A19A',
                      marginBottom: '0.375rem'
                    }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    style={{
                      width: '100%',
                      backgroundColor: '#1b1a17',
                      border: formErrors.email ? '1px solid #ff5f56' : '1px solid #34302A',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#F5F1E8',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    className="form-input"
                  />
                  {formErrors.email && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#ff5f56', marginTop: '4px', display: 'block' }}>
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#A6A19A',
                      marginBottom: '0.375rem'
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack Engineer Role / Project Collaboration"
                    style={{
                      width: '100%',
                      backgroundColor: '#1b1a17',
                      border: formErrors.subject ? '1px solid #ff5f56' : '1px solid #34302A',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#F5F1E8',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    className="form-input"
                  />
                  {formErrors.subject && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#ff5f56', marginTop: '4px', display: 'block' }}>
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#A6A19A',
                      marginBottom: '0.375rem'
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your organization, project scope, or opportunity..."
                    style={{
                      width: '100%',
                      backgroundColor: '#1b1a17',
                      border: formErrors.message ? '1px solid #ff5f56' : '1px solid #34302A',
                      borderRadius: '8px',
                      padding: '0.75rem 1rem',
                      color: '#F5F1E8',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    className="form-input"
                  />
                  {formErrors.message && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', color: '#ff5f56', marginTop: '4px', display: 'block' }}>
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit CTA with Spring Hover */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-gold-primary"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '0.875rem' }}
                >
                  <Send size={18} />
                  <span>Send Message Directly</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-info-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(201, 168, 91, 0.1) !important;
        }
        .social-card-btn:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(201, 168, 91, 0.1) !important;
        }
        .form-input:focus {
          border-color: #C9A85B !important;
          box-shadow: 0 0 15px rgba(201, 168, 91, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
