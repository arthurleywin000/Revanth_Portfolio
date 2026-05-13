import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const projectData = [
  {
    id: 0,
    title: 'Path Optimizer',
    subtitle: 'A* Algorithm Visualizer',
    category: 'Algorithm & Visualization',
    year: '2025',
    color: 'from-violet-600 to-indigo-700',
    accent: 'violet',
    description:
      'A full-stack dynamic pathfinding app that visually demonstrates A* heuristic search across weighted graphs. Watch the algorithm think — node by node — until the optimal path emerges.',
    highlights: [
      'Animated graph traversal with step-by-step visualization',
      'Heuristic optimization and real-time cost computation',
      'Configurable grid: add/remove walls, change start & end points',
    ],
    stack: {
      primary: ['Spring Boot', 'React', 'A* Algorithm'],
      secondary: ['Java', 'PostgreSQL', 'REST APIs', 'JavaScript'],
    },
    github: 'https://github.com/arthurleywin000/Path_Optimizer',
    metrics: [{ label: 'Algorithm', value: 'A*' }, { label: 'Type', value: 'Full Stack' }, { label: 'Viz', value: 'Live' }],
  },
  {
    id: 1,
    title: 'Product Manager',
    subtitle: 'Enterprise CRUD System',
    category: 'Enterprise Backend',
    year: '2025',
    color: 'from-emerald-600 to-teal-700',
    accent: 'emerald',
    description:
      'A production-grade product management system built on clean MVC architecture. Handles real product data flows, complex queries, and a dashboard-style UI — engineered for scale.',
    highlights: [
      'RESTful APIs with full CRUD and paginated responses',
      'Optimized PostgreSQL queries for large dataset handling',
      'Postman-tested endpoints with structured error handling',
    ],
    stack: {
      primary: ['Spring Boot', 'PostgreSQL', 'REST APIs'],
      secondary: ['Java', 'JDBC', 'MVC', 'SQL Optimization'],
    },
    github: 'https://github.com/arthurleywin000/Product_Management_System',
    metrics: [{ label: 'Pattern', value: 'MVC' }, { label: 'DB', value: 'PostgreSQL' }, { label: 'APIs', value: '12+' }],
  },
  {
    id: 2,
    title: 'ToDo Manager',
    subtitle: 'Full-Stack Task App',
    category: 'Productivity Interface',
    year: '2024',
    color: 'from-rose-600 to-pink-700',
    accent: 'rose',
    description:
      'An elegant task management web app built end-to-end with JSP, Servlets, and JDBC. Focused on fluid productivity workflows, session management, and clean integration between frontend and backend.',
    highlights: [
      'Complete MVC implementation with JSP templating',
      'Session-based auth and persistent task state via JDBC',
      'Clean form handling and dynamic UI updates',
    ],
    stack: {
      primary: ['JSP', 'Servlets', 'JDBC'],
      secondary: ['MySQL', 'HTML', 'CSS', 'JavaScript'],
    },
    github: 'https://github.com/arthurleywin000/ToDo_Manager',
    metrics: [{ label: 'Pattern', value: 'MVC' }, { label: 'Auth', value: 'Session' }, { label: 'DB', value: 'MySQL' }],
  },
];

const accentColors = {
  violet: {
    pill: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
    metric: 'text-violet-600 dark:text-violet-400',
    border: 'hover:border-violet-400/50 dark:hover:border-violet-500/50',
    badge: 'bg-violet-600 text-white',
    dot: 'bg-violet-500',
  },
  emerald: {
    pill: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    metric: 'text-emerald-600 dark:text-emerald-400',
    border: 'hover:border-emerald-400/50 dark:hover:border-emerald-500/50',
    badge: 'bg-emerald-600 text-white',
    dot: 'bg-emerald-500',
  },
  rose: {
    pill: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
    metric: 'text-rose-600 dark:text-rose-400',
    border: 'hover:border-rose-400/50 dark:hover:border-rose-500/50',
    badge: 'bg-rose-600 text-white',
    dot: 'bg-rose-500',
  },
};

const ProjectCard = ({ project, index, expanded, onToggle }) => {
  const colors = accentColors[project.accent];
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`group relative bg-white dark:bg-slate-800/70 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-500 ${colors.border} hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-slate-950/60 h-full flex flex-col`}
    >
      {/* Gradient banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white/30"
              style={{
                width: 80 + i * 60,
                height: 80 + i * 60,
                top: -20 + i * 10,
                right: -20 + i * 5,
              }}
            />
          ))}
        </div>
        <div className="absolute top-5 left-5">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {project.year}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-1">
            {project.category}
          </p>
          <h3 className="text-white text-2xl font-black leading-tight">{project.title}</h3>
          <p className="text-white/80 text-sm">{project.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col h-full">
        <div className="flex gap-4 mb-5 pb-5 border-b border-slate-100 dark:border-slate-700">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex-1 text-center">
              <div className={`text-xs uppercase tracking-wider font-bold ${colors.metric} mb-0.5`}>
                {m.label}
              </div>
              <div className="text-slate-800 dark:text-slate-200 text-sm font-bold">{m.value}</div>
            </div>
          ))}
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.primary.map((tech) => (
            <span key={tech} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${colors.pill}`}>
              {tech}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mb-5">
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">
                  Highlights
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.dot}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">
                  Also used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.secondary.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-3 mt-auto pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-3 rounded-2xl text-sm font-semibold border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
          >
            GitHub →
          </a>
        </div>

        <button
          onClick={onToggle}
          className="w-full mt-3 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200 flex items-center justify-center gap-1"
        >
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            ↓
          </motion.span>
          {expanded ? 'Show less' : 'See details'}
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section
      id="projects"
      className={`py-32 transition-colors duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className={`text-sm uppercase tracking-widest font-semibold mb-3 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                Selected Work
              </p>
              <h2 className={`text-4xl md:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Projects that shipped.
              </h2>
            </div>
            <p className={`text-base max-w-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Each one built from scratch, tested in production conditions, and designed to solve real problems.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              expanded={expanded === project.id}
              onToggle={() => toggleExpanded(project.id)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-16 text-center p-10 rounded-3xl border ${
            isDark
              ? 'bg-slate-800/50 border-slate-700'
              : 'bg-white border-slate-200'
          }`}
        >
          <p className={`text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            More projects being built right now.
          </p>
          <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Follow my GitHub to see what's in progress.
          </p>
          <a
            href="https://github.com/arthurleywin000"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              isDark
                ? 'bg-white text-slate-900 hover:bg-slate-100'
                : 'bg-slate-900 text-white hover:bg-slate-700'
            }`}
          >
            github.com/arthurleywin000 →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;