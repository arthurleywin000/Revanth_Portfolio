import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();

  const bg         = isDark ? '#0f172a' : '#f8fafc';
  const cardBg     = isDark ? '#1e293b' : '#ffffff';
  const cardBorder = isDark ? '#334155' : '#e2e8f0';
  const textPrimary = isDark ? '#f1f5f9' : '#0f172a';
  const textSec    = isDark ? '#94a3b8' : '#64748b';
  const accent     = '#f59e0b';
  const badgeBg    = isDark ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.1)';

  const bullets = [
    'Developed RESTful backend services using Spring Boot and JDBC, improving modularity and scalability',
    'Designed and optimized PostgreSQL queries, reducing query execution time significantly',
    'Integrated frontend with backend APIs ensuring smooth, reliable data flow',
    'Used Git for version control and followed clean, modular coding practices throughout',
  ];

  return (
    <section id="experience" style={{ backgroundColor: bg, padding: '8rem 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '1rem' }}>
            Experience
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, color: textPrimary, lineHeight: 1.2, margin: 0 }}>
            Real-world engineering with a thoughtful foundation.
          </h2>
        </motion.div>

        {/* Experience card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: '1.75rem',
            padding: '2.5rem',
            textAlign: 'left',
            boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.06)',
          }}
        >
          {/* Company row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: '0.875rem',
              backgroundColor: badgeBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: `1px solid ${isDark ? 'rgba(245,158,11,0.3)' : 'rgba(245,158,11,0.25)'}`,
            }}>
              <span style={{ color: accent, fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.05em' }}>AICTE</span>
            </div>
            <div>
              <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
                Java Full Stack Development Virtual Internship
              </h3>
              <p style={{ color: textSec, fontSize: '0.875rem', margin: '0.2rem 0 0' }}>AICTE · 2026</p>
            </div>
          </div>

          {/* Role tag */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: badgeBg,
              color: accent,
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '0.35rem 1rem',
              borderRadius: '2rem',
              border: `1px solid ${isDark ? 'rgba(245,158,11,0.3)' : 'rgba(245,158,11,0.2)'}`,
            }}>
              End-to-end backend &amp; API development
            </span>
          </div>

          {/* Bullet points */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: accent, marginTop: '0.45rem', flexShrink: 0 }} />
                <span style={{ color: textSec, fontSize: '0.95rem', lineHeight: 1.65 }}>{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;