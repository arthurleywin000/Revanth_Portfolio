import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STAR_COUNT = 160;
const PARTICLE_COUNT = 220;

const LoadingScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('reveal'); // reveal -> dissolve -> exit
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const tDissolve = setTimeout(() => setPhase('dissolve'), 1800);
    const tEnd = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(tDissolve);
      clearTimeout(tEnd);
    };
  }, [onComplete]);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        twinkle: 2 + Math.random() * 4,
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        size: Math.random() * 2.8 + 0.6,
        duration: 1.2 + Math.random() * 1.8,
        delay: Math.random() * 0.2,
      })),
    []
  );

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background:
              'radial-gradient(circle at 30% 20%, #0a1b3d 0%, #020b18 55%, #01060f 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Nebula glow */}
          <motion.div
            animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: '120vw',
              height: '120vw',
              left: '-20vw',
              top: '-40vw',
              background:
                'radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(96,165,250,0) 60%)',
              filter: 'blur(140px)',
            }}
          />

          {/* Stars */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {stars.map((s) => (
              <motion.div
                key={s.id}
                animate={{ opacity: [s.opacity * 0.6, s.opacity, s.opacity * 0.6] }}
                transition={{ duration: s.twinkle, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  width: s.size,
                  height: s.size,
                  borderRadius: '50%',
                  background: 'white',
                  boxShadow: '0 0 6px rgba(255,255,255,0.6)',
                }}
              />
            ))}
          </div>

          {/* Centered Name + Tagline */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
              pointerEvents: 'none',
              gap: '0.65rem',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, letterSpacing: '0.3em', filter: 'blur(12px)' }}
              animate={{
                opacity: phase === 'dissolve' ? 0 : 0.9,
                scale: phase === 'dissolve' ? 1.05 : 1,
                letterSpacing: phase === 'dissolve' ? '0.15em' : '0.2em',
                filter: phase === 'dissolve' ? 'blur(18px)' : 'blur(0px)',
              }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                textTransform: 'uppercase',
                margin: 0,
                fontFamily: '"Montserrat", sans-serif',
                letterSpacing: '0.22em',
                fontWeight: 600,
                color: '#0b0f16',
                textShadow:
                  '0 0 10px rgba(96,165,250,0.35), 0 0 24px rgba(59,130,246,0.25)',
                mixBlendMode: 'screen',
              }}
            >
              REVANTH
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'dissolve' ? 0 : 0.6 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 500,
                color: '#9fb0c7',
                mixBlendMode: 'screen',
              }}
            >
              I Am Batman
            </motion.div>
          </div>

          {/* Dissolve into particles */}
          <AnimatePresence>
            {phase === 'dissolve' && (
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 6 }}>
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{
                      x: `calc(50% + ${p.x * 0.1}vw)`,
                      y: `calc(50% + ${p.y * 0.1}vh)`,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x: `calc(50% + ${p.x}vw)`,
                      y: `calc(50% + ${p.y}vh)`,
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.4, 0],
                    }}
                    transition={{
                      duration: p.duration,
                      delay: p.delay,
                      ease: [0.1, 0.5, 0.2, 1],
                    }}
                    style={{
                      position: 'absolute',
                      width: p.size,
                      height: p.size,
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                      boxShadow: '0 0 12px rgba(255,255,255,0.5)',
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Soft vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, transparent 35%, rgba(0,0,0,0.45) 100%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;