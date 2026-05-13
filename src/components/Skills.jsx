import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [rotation, setRotation] = useState(0);
  const rotRef = useRef(0);
  const rafRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    let last = null;
    const animate = (ts) => {
      if (last !== null) rotRef.current += (ts - last) * 0.012;
      setRotation(rotRef.current);
      last = ts;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const innerOrbit = [
    { name: 'Spring Boot', icon: '⚙️', expertise: 'Advanced – Backend Framework' },
    { name: 'React', icon: '⚛️', expertise: 'Intermediate – Frontend Dev' },
    { name: 'PostgreSQL', icon: '🗄️', expertise: 'Advanced – Database Design' },
    { name: 'JavaScript', icon: 'JS', expertise: 'Advanced – Core Web Dev' },
    { name: 'JDBC', icon: '🔌', expertise: 'Advanced – DB Connectivity' },
    { name: 'REST APIs', icon: '🌐', expertise: 'Expert – API Architecture' },
  ];

  const outerOrbit = [
    { name: 'Python', icon: '🐍', expertise: 'Intermediate – Scripting' },
    { name: 'HTML', icon: 'HTML', expertise: 'Advanced – Semantic Markup' },
    { name: 'CSS', icon: 'CSS', expertise: 'Advanced – Responsive Design' },
    { name: 'Git', icon: '📦', expertise: 'Advanced – Version Control' },
    { name: 'GitHub', icon: 'GH', expertise: 'Advanced – Collaboration' },
    { name: 'C', icon: 'C', expertise: 'Intermediate – Systems Prog.' },
    { name: 'MySQL', icon: '🐬', expertise: 'Advanced – Relational DB' },
    { name: 'Maven', icon: 'M', expertise: 'Intermediate – Build Tools' },
  ];

  const concepts = [
    { name: 'Data Structures & Algorithms', level: 'Expert' },
    { name: 'Object-Oriented Programming', level: 'Expert' },
    { name: 'MVC Architecture', level: 'Advanced' },
    { name: 'Problem Solving', level: 'Expert' },
  ];

  const INNER_R = 130;
  const OUTER_R = 215;
  const CX = 280;
  const CY = 280;

  const getPos = (index, total, radius, angleOffset = 0) => {
    const angle = ((index / total) * 360 + angleOffset) * (Math.PI / 180);
    return {
      x: CX + radius * Math.cos(angle),
      y: CY + radius * Math.sin(angle),
    };
  };

  const accent = isDark ? '#60a5fa' : '#d97706';
  const textPrimary = isDark ? '#e8f4fd' : '#0f172a';
  const textSec = isDark ? '#a8c8e8' : '#64748b';

  return (
    <section
      id="skills"
      className={`py-32 relative overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#020b18]' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p style={{ color: accent }} className="text-sm uppercase tracking-widest mb-4 font-semibold">
            Tech Ecosystem
          </p>
          <h2 style={{ color: textPrimary }} className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Java at the Core. Everything orbits it.
          </h2>
          <p style={{ color: textSec }} className="text-lg">
            Hover any planet to see expertise · Orbits always spinning
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative flex-shrink-0" style={{ width: 560, height: 560 }}>
            <svg width="560" height="560" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
              <circle
                cx={CX} cy={CY} r={INNER_R}
                fill="none"
                stroke={isDark ? 'rgba(96,165,250,0.2)' : 'rgba(180,130,20,0.18)'}
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <circle
                cx={CX} cy={CY} r={OUTER_R}
                fill="none"
                stroke={isDark ? 'rgba(96,165,250,0.12)' : 'rgba(180,130,20,0.12)'}
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={isDark ? '#7cc4ff' : '#d97706'} stopOpacity="0.45" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
              <circle cx={CX} cy={CY} r={85} fill="url(#sunGlow)" />
            </svg>

            {/* Java core - brighter in dark mode */}
            <motion.div
              className="absolute flex flex-col items-center justify-center rounded-full cursor-default select-none z-20 shadow-2xl"
              style={{
                width: 104,
                height: 104,
                left: CX - 52,
                top: CY - 52,
                background: isDark
                  ? 'radial-gradient(circle at 30% 30%, #bfe3ff, #3b82f6 55%, #1e40af)'
                  : 'linear-gradient(135deg, #d97706, #f59e0b)',
                color: 'white',
                boxShadow: isDark
                  ? '0 0 60px rgba(125,211,252,0.8), 0 0 120px rgba(59,130,246,0.6)'
                  : '0 0 30px rgba(217,119,6,0.4)',
              }}
              animate={isDark ? {
                boxShadow: [
                  '0 0 40px rgba(125,211,252,0.6), 0 0 90px rgba(59,130,246,0.5)',
                  '0 0 70px rgba(125,211,252,0.9), 0 0 140px rgba(59,130,246,0.7)',
                  '0 0 40px rgba(125,211,252,0.6), 0 0 90px rgba(59,130,246,0.5)',
                ],
              } : {}}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.08 }}
            >
              <span className="font-black text-xl">Java</span>
              <span className="text-xs font-semibold opacity-90">Core</span>
            </motion.div>

            {/* Inner orbit planets */}
            {innerOrbit.map((skill, i) => {
              const pos = getPos(i, innerOrbit.length, INNER_R, rotation);
              const isHovered = hoveredSkill === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  className="absolute flex flex-col items-center justify-center rounded-full text-xs font-bold cursor-pointer z-10 select-none"
                  style={{
                    width: 68,
                    height: 68,
                    left: pos.x - 34,
                    top: pos.y - 34,
                    backgroundColor: isDark ? 'rgba(15,30,60,0.9)' : '#ffffff',
                    border: isDark
                      ? `2px solid ${isHovered ? 'rgba(96,165,250,0.9)' : 'rgba(96,165,250,0.4)'}`
                      : `2px solid ${isHovered ? 'rgba(217,119,6,0.8)' : 'rgba(217,119,6,0.5)'}`,
                    color: isDark ? '#c8e6fa' : '#1e293b',
                    boxShadow: isHovered
                      ? isDark
                        ? '0 0 20px rgba(96,165,250,0.6)'
                        : '0 0 16px rgba(217,119,6,0.4)'
                      : isDark ? '0 0 8px rgba(96,165,250,0.1)' : 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s, background-color 0.2s',
                    backdropFilter: isDark ? 'blur(8px)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span className="text-center leading-none mt-0.5" style={{ fontSize: 9 }}>{skill.name}</span>
                </motion.div>
              );
            })}

            {/* Outer orbit planets */}
            {outerOrbit.map((skill, i) => {
              const pos = getPos(i, outerOrbit.length, OUTER_R, -rotation * 0.6);
              const isHovered = hoveredSkill === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  className="absolute flex flex-col items-center justify-center rounded-full text-xs font-bold cursor-pointer z-10 select-none"
                  style={{
                    width: 58,
                    height: 58,
                    left: pos.x - 29,
                    top: pos.y - 29,
                    backgroundColor: isDark ? 'rgba(8,20,45,0.85)' : '#f1f5f9',
                    border: isDark
                      ? `1px solid ${isHovered ? 'rgba(96,165,250,0.5)' : 'rgba(96,165,250,0.15)'}`
                      : `1px solid ${isHovered ? 'rgba(217,119,6,0.6)' : '#cbd5e1'}`,
                    color: isDark ? (isHovered ? '#93c5fd' : '#7aa8cc') : (isHovered ? '#92400e' : '#475569'),
                    boxShadow: isHovered
                      ? isDark
                        ? '0 0 14px rgba(96,165,250,0.4)'
                        : '0 0 10px rgba(217,119,6,0.3)'
                      : 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s, color 0.2s',
                    backdropFilter: isDark ? 'blur(8px)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="leading-none">{skill.icon}</span>
                  <span className="text-center leading-none mt-0.5" style={{ fontSize: 8 }}>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Skill info panel */}
          <div className="flex-1 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    border: isDark
                      ? '1px solid rgba(96,165,250,0.3)'
                      : '1px solid rgba(217,119,6,0.3)',
                    background: isDark
                      ? 'rgba(255,255,255,0.04)'
                      : '#ffffff',
                    backdropFilter: isDark ? 'blur(12px)' : 'none',
                    boxShadow: isDark
                      ? '0 8px 32px rgba(96,165,250,0.08)'
                      : '0 8px 24px rgba(0,0,0,0.08)',
                  }}
                >
                  <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Selected Skill
                  </p>
                  <h3 style={{ color: textPrimary, fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                    {hoveredSkill}
                  </h3>
                  <p style={{ color: textSec, fontSize: '0.9rem', margin: 0 }}>
                    {[...innerOrbit, ...outerOrbit].find(s => s.name === hoveredSkill)?.expertise}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    border: `1px dashed ${isDark ? 'rgba(96,165,250,0.2)' : '#cbd5e1'}`,
                  }}
                >
                  <p style={{ color: textSec, fontSize: '0.9rem', margin: 0 }}>Hover a planet to see skill details</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core concepts */}
            <div>
              <p style={{ color: accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: '1rem' }}>
                Core Concepts
              </p>
              <div className="grid grid-cols-1 gap-3">
                {concepts.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '0.75rem',
                      backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      border: isDark ? '1px solid rgba(96,165,250,0.12)' : '1px solid #e2e8f0',
                      backdropFilter: isDark ? 'blur(8px)' : 'none',
                    }}
                  >
                    <span style={{ color: textPrimary, fontWeight: 500, fontSize: '0.9rem' }}>{c.name}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '2rem',
                        backgroundColor: c.level === 'Expert'
                          ? isDark ? 'rgba(96,165,250,0.15)' : 'rgba(217,119,6,0.1)'
                          : isDark ? 'rgba(255,255,255,0.06)' : '#f1f5f9',
                        color: c.level === 'Expert'
                          ? isDark ? '#93c5fd' : '#92400e'
                          : textSec,
                      }}
                    >
                      {c.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: textSec }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: isDark ? 'rgba(15,30,60,0.9)' : '#ffffff',
                  border: isDark ? '2px solid rgba(96,165,250,0.4)' : '2px solid rgba(217,119,6,0.5)',
                }} />
                Inner: Primary skills
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  backgroundColor: isDark ? 'rgba(8,20,45,0.85)' : '#f1f5f9',
                  border: isDark ? '1px solid rgba(96,165,250,0.15)' : '1px solid #cbd5e1',
                }} />
                Outer: Supporting skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;