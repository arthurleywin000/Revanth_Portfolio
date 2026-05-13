import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { isDark } = useTheme();

  const bg          = isDark ? '#020b18' : '#f8fafc';
  const cardBg      = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)';
  const cardBorder  = isDark ? 'rgba(99,179,237,0.15)' : '#e2e8f0';
  const textPrimary = isDark ? '#e8f4fd' : '#0f172a';
  const textSec     = isDark ? '#a8c8e8' : '#64748b';
  const accent      = isDark ? '#60a5fa' : '#f59e0b';

  const educationData = [
    {
      year: '2027',
      institution: 'Gandhi Institute of Technology and Management, Bengaluru',
      degree: 'B.Tech Computer Science Engineering',
      detail: 'CGPA: 8.95',
    },
    {
      year: '2023',
      institution: 'Gauthami Junior College',
      degree: 'Intermediate (Class XII)',
      detail: 'Score: 92%',
    },
    {
      year: '2021',
      institution: 'Sanghamitra High School',
      degree: 'Class X',
      detail: 'CGPA: 9.8',
    },
  ];

  return (
    <section id="education" style={{ backgroundColor: bg, padding: '8rem 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '1rem' }}>
            Education
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 700, color: textPrimary, lineHeight: 1.2, margin: 0 }}>
            Academic milestones shaped with clarity.
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '2rem',
            top: 0,
            bottom: 0,
            width: '2px',
            background: `linear-gradient(to bottom, ${accent}, transparent)`,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {educationData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{ position: 'relative', paddingLeft: '5rem' }}
              >
                {/* Year bubble */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '1.5rem',
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: isDark ? 'rgba(10,25,55,0.9)' : '#ffffff',
                  border: `2px solid ${accent}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: isDark ? 'blur(8px)' : 'none',
                  boxShadow: isDark ? `0 0 20px rgba(96,165,250,0.2)` : 'none',
                }}>
                  <span style={{ color: accent, fontWeight: 700, fontSize: '0.75rem' }}>{item.year}</span>
                </div>

                {/* Card */}
                <div style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  backdropFilter: isDark ? 'blur(12px)' : 'none',
                  boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.05)',
                }}>
                  <h3 style={{ color: textPrimary, fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.5rem' }}>{item.institution}</h3>
                  <p style={{ color: textSec, margin: '0 0 0.5rem', fontSize: '0.9rem' }}>{item.degree}</p>
                  <p style={{ color: accent, fontWeight: 600, margin: 0, fontSize: '0.9rem' }}>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;