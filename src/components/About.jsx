import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const { isDark } = useTheme();

  const stats = [
    { number: '5+', label: 'Projects Built' },
    { number: '10+', label: 'Technologies' },
    { number: '8.95', label: 'CGPA' },
    { number: '8+', label: 'APIs Integrated' },
  ];

  const hobbies = [
    { icon: '🥊', name: 'Boxing', desc: 'Discipline, precision, and controlled aggression — values I bring to debugging too.' },
    { icon: '🏋️', name: 'Gym', desc: 'Consistency over intensity. A philosophy that shapes how I approach long-term projects.' },
    { icon: '🗺️', name: 'Exploring Places', desc: 'New cities, hidden trails, local food — curiosity is my compass on and off the keyboard.' },
    { icon: '🎮', name: 'Video Games', desc: 'Strategic thinking, rapid problem-solving, and a deep appreciation for good UX design.' },
  ];

  const traits = [
    { label: 'Backend-first thinker', value: 90 },
    { label: 'Clean code advocate', value: 85 },
    { label: 'UI/UX sensibility', value: 75 },
    { label: 'Algorithm nerd', value: 88 },
  ];

  const bg          = isDark ? '#020b18' : '#ffffff';
  const cardBg      = isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc';
  const cardBorder  = isDark ? 'rgba(99,179,237,0.15)' : '#e2e8f0';
  const textPrimary = isDark ? '#e8f4fd' : '#0f172a';
  const textSec     = isDark ? '#a8c8e8' : '#64748b';
  const accent      = isDark ? '#60a5fa' : '#f59e0b';
  const tabBox      = isDark ? 'rgba(255,255,255,0.05)' : '#f1f5f9';
  const tabActive   = isDark ? 'rgba(96,165,250,0.15)' : '#ffffff';
  const barTrack    = isDark ? 'rgba(255,255,255,0.08)' : '#e2e8f0';

  return (
    <section id="about" style={{ backgroundColor: bg, padding: '8rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '1rem' }}>
            About Me
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, color: textPrimary, lineHeight: 1.2, margin: 0 }}>
            Engineer by craft.{' '}
            <span style={{ color: accent }}>Explorer by nature.</span>
          </h2>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)', gap: '3.5rem', alignItems: 'start', marginBottom: '5rem' }}>

          {/* Left — portrait + name tag + stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Portrait — full height, not cropped */}
            <div
  style={{
    borderRadius: '1.5rem',
    overflow: 'hidden',
    height: '600px', // was 520px
    boxShadow: isDark
      ? '0 24px 48px rgba(0,0,0,0.7), 0 0 60px rgba(96,165,250,0.08)'
      : '0 24px 48px rgba(0,0,0,0.12)',
    border: isDark ? '1px solid rgba(96,165,250,0.15)' : 'none',
  }}
>
  <img
    src="/portrait.jpg"
    alt="Revanth Naidu Palukuri"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%', // shows more of the body
      display: 'block',
    }}
  />
</div>

            {/* Name chip */}
            <div style={{
              backgroundColor: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '1rem',
              padding: '0.9rem 1.25rem',
              textAlign: 'left',
              backdropFilter: isDark ? 'blur(12px)' : 'none',
            }}>
              <p style={{ color: textPrimary, fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>Revanth Naidu Palukuri</p>
              <p style={{ color: accent, fontSize: '0.84rem', margin: '0.2rem 0 0' }}>CS Undergrad · Full Stack Engineer</p>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: '1rem',
                    padding: '1.25rem',
                    textAlign: 'center',
                    backdropFilter: isDark ? 'blur(12px)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '1.85rem', fontWeight: 900, color: accent, lineHeight: 1 }}>{s.number}</div>
                  <div style={{ color: textSec, fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: '0.35rem' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — tabs + content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
          >
            {/* Tab switcher */}
            <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: tabBox, borderRadius: '0.75rem', padding: '0.25rem', width: 'fit-content' }}>
              {['story', 'mindset', 'traits'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.45rem 1.2rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    backgroundColor: activeTab === tab ? tabActive : 'transparent',
                    color: activeTab === tab ? textPrimary : textSec,
                    boxShadow: activeTab === tab
                      ? isDark
                        ? '0 1px 4px rgba(0,0,0,0.5), 0 0 12px rgba(96,165,250,0.2)'
                        : '0 1px 4px rgba(0,0,0,0.1)'
                      : 'none',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content area */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ textAlign: 'left' }}
            >
              {activeTab === 'story' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {[
                    "I'm a third-year Computer Science student at GITAM Bengaluru, building systems that matter. From optimizing PostgreSQL queries for real-world apps to crafting fluid React interfaces — I live at the intersection of backend precision and frontend elegance.",
                    "My journey started with falling in love with algorithms — the elegance of how a well-designed solution can slice through complexity. That curiosity grew into full-stack capability: Spring Boot backends, RESTful APIs, and immersive web experiences built with cinematic attention to detail.",
                    "I believe the best software feels inevitable — like it was always supposed to work exactly this way. That standard drives everything I build.",
                  ].map((para, i) => (
                    <p key={i} style={{ color: textSec, fontSize: '0.975rem', lineHeight: 1.8, margin: 0 }}>{para}</p>
                  ))}
                </div>
              )}

              {activeTab === 'mindset' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    { title: 'Architecture first', desc: "I think in systems before I write a line. Clean abstractions prevent a month of technical debt." },
                    { title: 'Precision over speed', desc: "Like a boxing combination — every move deliberate. Fast code that's wrong is slower than slow code that's right." },
                    { title: 'Curiosity as fuel', desc: "Exploring places taught me that the best things are off the main path. Same goes for solutions." },
                    { title: 'Iterate relentlessly', desc: "The gym taught me that progress is invisible until it's suddenly undeniable. Ship, learn, improve." },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      style={{
                        display: 'flex',
                        gap: '0.9rem',
                        padding: '1rem 1.2rem',
                        borderRadius: '0.875rem',
                        backgroundColor: cardBg,
                        border: `1px solid ${cardBorder}`,
                        backdropFilter: isDark ? 'blur(12px)' : 'none',
                      }}
                    >
                      <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: accent, marginTop: '0.3rem', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontWeight: 700, color: textPrimary, fontSize: '0.875rem', margin: '0 0 0.2rem' }}>{item.title}</p>
                        <p style={{ color: textSec, fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'traits' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {traits.map((t, i) => (
                    <motion.div
                      key={t.label}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                        <span style={{ color: textPrimary, fontSize: '0.875rem', fontWeight: 600 }}>{t.label}</span>
                        <span style={{ color: accent, fontSize: '0.85rem', fontWeight: 700 }}>{t.value}%</span>
                      </div>
                      <div style={{ height: '6px', backgroundColor: barTrack, borderRadius: '3px', overflow: 'hidden' }}>
                        <motion.div
                          style={{
                            height: '100%',
                            borderRadius: '3px',
                            background: isDark
                              ? 'linear-gradient(90deg,#60a5fa,#818cf8)'
                              : 'linear-gradient(90deg,#f59e0b,#f97316)',
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${t.value}%` }}
                          transition={{ delay: i * 0.15 + 0.3, duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Hobbies ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '0.75rem', textAlign: 'center' }}>
            Beyond the Terminal
          </p>
          <h3 style={{ fontFamily: 'serif', fontSize: '1.75rem', fontWeight: 700, color: textPrimary, marginBottom: '2rem', textAlign: 'center' }}>
            What makes me, me.
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.1rem' }}>
            {hobbies.map((hobby, i) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: '1.5rem',
                  padding: '1.5rem',
                  textAlign: 'left',
                  cursor: 'default',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  backdropFilter: isDark ? 'blur(12px)' : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = isDark ? 'rgba(96,165,250,0.4)' : '#f59e0b55';
                  e.currentTarget.style.boxShadow = isDark
                    ? '0 12px 30px rgba(96,165,250,0.1)'
                    : '0 12px 30px rgba(245,158,11,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = cardBorder;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{hobby.icon}</div>
                <h4 style={{ fontWeight: 700, color: textPrimary, fontSize: '1rem', margin: '0 0 0.4rem' }}>{hobby.name}</h4>
                <p style={{ color: textSec, fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;