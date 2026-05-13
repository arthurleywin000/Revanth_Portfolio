import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Certifications = () => {
  const { isDark } = useTheme();

  const bg          = isDark ? '#020b18' : '#f8fafc';
  const cardBg      = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)';
  const cardBorder  = isDark ? 'rgba(99,179,237,0.15)' : '#e2e8f0';
  const textPrimary = isDark ? '#e8f4fd' : '#0f172a';
  const textSec     = isDark ? '#a8c8e8' : '#64748b';
  const accent      = isDark ? '#60a5fa' : '#f59e0b';

  return (
    <section id="certifications" style={{ backgroundColor: bg, padding: '8rem 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '1rem' }}>
            Certifications
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, color: textPrimary, lineHeight: 1.2, margin: 0 }}>
            Validation of practical skills and modern engineering.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: '2rem',
            padding: '3rem',
            textAlign: 'center',
            backdropFilter: isDark ? 'blur(12px)' : 'none',
            boxShadow: isDark ? '0 8px 40px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: isDark ? 'rgba(96,165,250,0.15)' : 'rgba(245,158,11,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: `1px solid ${isDark ? 'rgba(96,165,250,0.3)' : 'rgba(245,158,11,0.3)'}`,
          }}>
            <span style={{ color: accent, fontWeight: 700, fontSize: '0.8rem' }}>AICTE</span>
          </div>
          <h3 style={{ color: textPrimary, fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1rem' }}>
            Java Full Stack Development
          </h3>
          <p style={{ color: textSec, fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
            Focused on backend services, Spring Boot, JDBC, PostgreSQL, and full-stack integration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;