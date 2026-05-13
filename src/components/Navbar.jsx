import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? isDark 
            ? 'bg-slate-900/80 border-b border-blue-400/20 backdrop-blur'
            : 'bg-white/80 border-b border-slate-200/70 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-slate-900'}`}
          whileHover={{ scale: 1.05 }}
        >
          PALUKURI
        </motion.div>
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`${
                isDark ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-slate-900'
              } transition-colors duration-300 relative`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <motion.div
                className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDark ? 'bg-blue-400' : 'bg-slate-900'} origin-left`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
        <motion.button
          onClick={toggleTheme}
          className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
            isDark
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-amber-500 text-white hover:bg-amber-400'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;