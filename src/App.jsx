import { useEffect, useState, useMemo } from 'react';
import Lenis from 'lenis';

import { ThemeProvider, useTheme } from './context/ThemeContext';

import Hero from './components/Hero';
import Objective from './components/Objective';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoadingScreen from './components/Loadingscreen';

function SpaceBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 280 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      type: Math.floor(Math.random() * 3) + 1,
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="galaxy-bg" aria-hidden="true">
      {stars.map(star => (
        <div 
          key={star.id} 
          className={`star star-${star.type}`} 
          style={{ 
            top: star.top, 
            left: star.left,
            animationDelay: `${star.delay}s`
          }} 
        />
      ))}
      <div className="space-particles" />
      <div className="space-grain" />
      <div className="space-vignette" />
    </div>
  );
}

function AppContent() {
  const { isDark } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div
        className={`relative min-h-screen ${isDark ? 'bg-black galaxy-mode' : 'bg-white'}`}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 0.5s',
        }}
      >
        {isDark && <SpaceBackground />}

        <Navbar />

        <main className="relative z-10" style={{ isolation: 'isolate' }}>
          <Hero />
          <Objective />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;