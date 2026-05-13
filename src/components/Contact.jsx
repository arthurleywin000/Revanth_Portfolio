import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useState, useRef } from 'react';

const Contact = () => {
  const { isDark } = useTheme();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const bg          = isDark ? '#020b18' : '#ffffff';
  const cardBg      = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(248,250,252,0.9)';
  const cardBorder  = isDark ? 'rgba(99,179,237,0.15)' : '#e2e8f0';
  const textPrimary = isDark ? '#e8f4fd' : '#0f172a';
  const textSec     = isDark ? '#a8c8e8' : '#64748b';
  const accent      = isDark ? '#60a5fa' : '#f59e0b';
  const inputBg     = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)';
  const inputBorder = isDark ? 'rgba(99,179,237,0.2)' : 'rgba(15,23,42,0.15)';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');

      // ✅ clear the form
      formRef.current?.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
    } finally {
      // reset status message after 2s (optional)
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: bg, padding: '8rem 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '1rem' }}>
            Contact
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, color: textPrimary, lineHeight: 1.2, margin: 0 }}>
            Let's create something memorable.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: '2rem',
            padding: '3rem',
            backdropFilter: isDark ? 'blur(12px)' : 'none',
            boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* Left — contact info */}
            <div>
              <h3 style={{ color: textPrimary, fontSize: '1.25rem', fontWeight: 700, margin: '0 0 1.5rem' }}>
                Reach out directly
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Email', value: 'revanth.palukuri2006@gmail.com', href: 'mailto:revanth.palukuri2006@gmail.com' },
                  { label: 'Phone', value: '+91 8431463895', href: 'tel:+918431463895' },
                  { label: 'GitHub', value: 'arthurleywin000', href: 'https://github.com/arthurleywin000', external: true },
                  { label: 'LinkedIn', value: 'revanth-palukuri', href: 'https://linkedin.com/in/revanth-palukuri', external: true },
                ].map((item) => (
                  <p key={item.label} style={{ color: textSec, margin: 0, fontSize: '0.9rem' }}>
                    <span style={{ color: textPrimary, fontWeight: 600 }}>{item.label}: </span>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      style={{ color: textSec, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = accent}
                      onMouseLeave={e => e.currentTarget.style.color = textSec}
                    >
                      {item.value}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'Your email' },
              ].map((field) => (
                <div key={field.id}>
                  <label style={{ display: 'block', color: textPrimary, fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: inputBg,
                      border: `1px solid ${inputBorder}`,
                      borderRadius: '0.75rem',
                      color: textPrimary,
                      fontSize: '0.9rem',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = accent}
                    onBlur={e => e.currentTarget.style.borderColor = inputBorder}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', color: textPrimary, fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write a calm message..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: inputBg,
                    border: `1px solid ${inputBorder}`,
                    borderRadius: '0.75rem',
                    color: textPrimary,
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = accent}
                  onBlur={e => e.currentTarget.style.borderColor = inputBorder}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: accent,
                  color: isDark ? '#020b18' : '#ffffff',
                  fontWeight: 700,
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontSize: '0.95rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  transition: 'opacity 0.2s',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'success' && (
                <p style={{ color: accent, fontSize: '0.9rem', margin: 0 }}>
                  Message sent ✅
                </p>
              )}
              {status === 'error' && (
                <p style={{ color: '#f87171', fontSize: '0.9rem', margin: 0 }}>
                  Failed to send. Try again.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;