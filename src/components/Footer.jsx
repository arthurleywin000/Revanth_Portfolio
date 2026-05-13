import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const bg          = isDark ? '#020b18' : '#f8fafc';
  const borderColor = isDark ? 'rgba(99,179,237,0.12)' : 'rgba(15,23,42,0.08)';
  const textSec     = isDark ? '#a8c8e8' : '#64748b';
  const accent      = isDark ? '#60a5fa' : '#f59e0b';

  return (
    <footer
        style={{
          backgroundColor: bg,
          borderTop: `1px solid ${borderColor}`,
          padding: '4rem 0',
          position: 'relative',
          zIndex: 20,
          isolation: 'isolate',
        }}
      >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: isDark ? 'rgba(96,165,250,0.12)' : 'rgba(245,158,11,0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: `1px solid ${isDark ? 'rgba(96,165,250,0.25)' : 'rgba(245,158,11,0.25)'}`,
          }}>
            <span style={{ color: accent, fontWeight: 700, fontSize: '1.1rem' }}>RN</span>
          </div>
          <p style={{ color: textSec, margin: '0 0 2rem', fontSize: '0.9rem' }}>
            © 2026 Revanth Naidu Palukuri. All rights reserved.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/arthurleywin000', external: true },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/revanth-palukuri', external: true },
              { label: 'Email', href: 'mailto:revanth.palukuri2006@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                style={{
                  color: textSec,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = accent}
                onMouseLeave={e => e.currentTarget.style.color = textSec}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;