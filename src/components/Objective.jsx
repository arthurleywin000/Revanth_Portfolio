import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Objective = () => {
  const { isDark } = useTheme();

  const bg          = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(248,250,252,0.8)';
  const textPrimary = isDark ? '#e8f4fd' : '#0f172a';
  const textSec     = isDark ? '#a8c8e8' : '#64748b';

  return (
    <section
      style={{
        padding: '8rem 0',
        backgroundColor: bg,
        backdropFilter: isDark ? 'blur(8px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <blockquote style={{
            fontFamily: 'serif',
            fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
            color: textPrimary,
            lineHeight: 1.65,
            fontStyle: 'italic',
            margin: '0 0 2rem',
          }}>
            "I believe software should feel intuitive, elegant, and emotionally engaging — not just functional."
          </blockquote>
          <p style={{ color: textSec, fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
            I enjoy building scalable systems and immersive interfaces that balance engineering precision with human experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Objective;