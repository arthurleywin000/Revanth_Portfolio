import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Ring, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

/* =========================
   CINEMATIC SATURN
========================= */
const Saturn = () => {
  const planetRef = useRef();
  const ringRef = useRef();
  const ringOrbitRef = useRef();
  const atmosphereRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.012;
    }

    if (ringOrbitRef.current) {
      ringOrbitRef.current.rotation.y += 0.006;
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= 0.002;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.06} floatIntensity={0.18}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Sphere ref={planetRef} args={[1.35, 128, 128]}>
          <meshStandardMaterial
            color="#0b1224"
            emissive={hovered ? '#5fa8ff' : '#1e3a8a'}
            emissiveIntensity={hovered ? 0.85 : 0.25}
            roughness={0.35}
            metalness={0.2}
          />
        </Sphere>

        <Sphere ref={atmosphereRef} args={[1.48, 96, 96]}>
          <meshStandardMaterial
            color="#7dd3fc"
            transparent
            opacity={hovered ? 0.18 : 0.08}
            emissive="#60a5fa"
            emissiveIntensity={hovered ? 0.7 : 0.25}
            roughness={1}
            metalness={0}
          />
        </Sphere>

        <Sphere args={[1.56, 64, 64]}>
          <meshBasicMaterial
            color="#93c5fd"
            transparent
            opacity={hovered ? 0.16 : 0.05}
          />
        </Sphere>

        <group ref={ringOrbitRef}>
          <Ring
            ref={ringRef}
            args={[2.0, 2.35, 192]}
            rotation={[Math.PI / 2.38, 0, 0]}
          >
            <meshStandardMaterial
              color="#cbd5f5"
              side={THREE.DoubleSide}
              transparent
              opacity={hovered ? 0.48 : 0.32}
              roughness={0.9}
              metalness={0.05}
            />
          </Ring>
        </group>
      </group>
    </Float>
  );
};

/* =========================
   SCENE
========================= */
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 4, 6]} intensity={1.9} color="#7cc4ff" />
      <pointLight position={[-6, -3, 2]} intensity={1.2} color="#2563eb" />
      <Saturn />
    </>
  );
};

/* =========================
   HERO SECTION
========================= */

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-90">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.6]}>
          <Scene />
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.p
            className={`text-sm md:text-base mb-8 tracking-[0.45em] uppercase font-bold ${
              isDark ? 'text-blue-300' : 'text-slate-500'
            }`}
            initial={{ opacity: 0, letterSpacing: '1em' }}
            animate={{ opacity: 1, letterSpacing: '0.45em' }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            SYSTEMS • INTERFACES • INTELLIGENCE
          </motion.p>

          <motion.h1
  className={`hero-title text-[clamp(4rem,15vw,10rem)] mb-8 ${
    isDark ? 'text-white' : 'text-slate-900'
  }`}
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.5,
    duration: 1.2,
    ease: 'easeOut',
  }}
>
  REVANTH
  <br />
  <span
    className={`hero-name ${
      isDark
        ? 'text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]'
        : 'text-amber-500'
    }`}
  >
    NAIDU
  </span>
</motion.h1>

          <motion.p
            className={`text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Building intelligent systems, immersive interfaces, and
            high-performance digital experiences engineered for impact.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.a
            href="#projects"
            className={`px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${
              isDark
                ? 'bg-white text-black hover:bg-blue-400 hover:text-white'
                : 'bg-slate-900 text-white hover:bg-amber-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>

          <motion.a
            href="#contact"
            className={`px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest border transition-all ${
              isDark
                ? 'border-white/20 text-white hover:bg-white/10'
                : 'border-slate-900/20 text-slate-900 hover:bg-slate-900/5'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className={`w-[1px] h-16 ${
            isDark ? 'bg-white' : 'bg-black'
          }`}
        />
      </motion.div>
    </section>
  );
};

export default Hero;