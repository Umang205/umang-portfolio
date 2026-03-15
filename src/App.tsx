/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  Download, 
  Moon, 
  Sun, 
  Code2, 
  BrainCircuit, 
  Database, 
  Layout, 
  Terminal, 
  Award,
  ChevronRight,
  Send,
  Coffee,
  Atom,
  FileCode,
  Palette,
  FileJson,
  Wind,
  Server,
  Zap,
  GitBranch,
  Box,
  Layers,
  MapPin,
  GraduationCap,
  Briefcase,
  Monitor,
  BookOpen,
  Music
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  bg: '#0a0f1a',
  primary: '#3b82f6',
  secondary: '#a855f7',
  textPrimary: '#ffffff',
  textSecondary: '#94a3b8',
  cardBg: 'rgba(255,255,255,0.03)',
  border: 'rgba(255,255,255,0.08)',
};

const NavItem = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean; key?: string | number }) => (
  <a 
    href={href} 
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-[#3b82f6] text-white' 
        : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
    }`}
  >
    {children}
  </a>
);

const GlassCard = ({ children, className = "", key }: { children: React.ReactNode; className?: string; key?: string | number }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(201, 163, 255, 0.2)' }}
    className={`bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-[16px] p-5 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const SkillBadge = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-sm text-[#94a3b8] hover:text-white transition-all cursor-default"
  >
    <Icon size={16} className="text-[#3b82f6]" />
    {label}
  </motion.div>
);

const SkillCard = ({ name, percentage, category, icon: Icon }: any) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="bg-[#111827]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden group hover:border-[#3b82f6]/30 transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center p-3 group-hover:bg-[#3b82f6]/10 transition-colors">
        <Icon className="text-[#3b82f6]" size={28} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-white text-lg">{name}</span>
          <span className="text-sm text-[#94a3b8] font-medium">{percentage}%</span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#3b82f6] to-[#a855f7]"
          />
        </div>
      </div>
    </div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-[#94a3b8]/60 self-end font-bold">
      {category}
    </div>
  </motion.div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeSkillTab, setActiveSkillTab] = useState('All Skills');
  const [roleText, setRoleText] = useState('');

  const skillsData = [
    { name: "C", percentage: 70, category: "ProgrammingLanguages", icon: Code2 },
    { name: "C++", percentage: 75, category: "ProgrammingLanguages", icon: Code2 },
    { name: "Java", percentage: 85, category: "ProgrammingLanguages", icon: Coffee },
    { name: "Python", percentage: 75, category: "ProgrammingLanguages", icon: Code2 },
    { name: "HTML", percentage: 95, category: "Frontend", icon: FileCode },
    { name: "CSS", percentage: 85, category: "Frontend", icon: Palette },
    { name: "JavaScript", percentage: 90, category: "Frontend", icon: FileJson },
    { name: "Pandas", percentage: 80, category: "Frameworks", icon: Database },
    { name: "NumPy", percentage: 85, category: "Frameworks", icon: Database },
    { name: "Matplotlib", percentage: 75, category: "Frameworks", icon: Layers },
    { name: "Seaborn", percentage: 70, category: "Frameworks", icon: Layers },
    { name: "Scikit-learn", percentage: 80, category: "Frameworks", icon: BrainCircuit },
    { name: "TensorFlow", percentage: 65, category: "Frameworks", icon: Zap },
  ];
  const fullRole = "AI & Machine Learning Enthusiast";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setRoleText(fullRole.slice(0, i));
      i++;
      if (i > fullRole.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Diabetes Risk Detector",
      desc: "Supervised ML model to predict diabetes risk using patient health parameters, achieving ~82-85% accuracy. Performed EDA and feature engineering.",
      tech: ["Python", "Pandas", "Scikit-Learn", "GitHub"],
      link: "https://github.com/Umang205/diabetes-risk-detector",
      image: "https://i.ibb.co/SXb379F2/images-3.jpg"
    },
    {
      title: "Grid Power Failure Prediction System",
      desc: "A predictive maintenance system designed to detect and predict power grid failures using data analysis and machine learning techniques. The system helps improve reliability and reduce downtime in power distribution networks.",
      tech: ["Python", "Machine Learning", "Pandas", "Data Analysis"],
      link: "https://github.com/Umang205/Grid-Power-Faliur",
      image: "https://i.ibb.co/ZpWcP408/download-4.jpg"
    },
    {
      title: "Basic Image Processing using OpenCV",
      desc: "A Python-based project that performs basic image processing operations such as grayscale conversion, edge detection, image filtering, and transformations using OpenCV. This project demonstrates fundamental computer vision concepts.",
      tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
      link: "https://github.com/Umang205/basic-image-processing-opencv",
      image: "https://picsum.photos/seed/opencv/800/600"
    },
    {
      title: "DIY Master Chatbot",
      desc: "An intelligent AI-powered chatbot designed to provide real-time guidance and step-by-step instructions for DIY projects. It helps users learn hands-on skills through interactive conversational assistance.",
      tech: ["HTML", "CSS", "JavaScript", "AI", "Chatbot"],
      link: "https://github.com/ghushitkumarchutia/DIYMASTER",
      image: "https://picsum.photos/seed/chatbot/800/600"
    }
  ];

  const certifications: { title: string; platform: string; date: string; description: string; image?: string; link: string }[] = [
    { 
      title: "LPU’s Innotek Annual Innovation & Graduating Project Expo", 
      platform: "LPU", 
      date: "May 2025",
      description: "Showcased innovative engineering projects at the annual university expo, demonstrating technical proficiency and creative problem-solving.",
      image: "https://i.ibb.co/XkMrJWqx/Umang-innoteck-1.png",
      link: "https://drive.google.com/file/d/19Uu5mmUYWpNb4RoX4FtU8lgPaA8dPF1U/view?usp=sharing"
    },
    { 
      title: "Cloud Computing", 
      platform: "NPTEL", 
      date: "May 2025",
      description: "Comprehensive study of cloud infrastructure, virtualization, and distributed systems through the NPTEL platform.",
      image: "https://i.ibb.co/HDfdmv0C/Cloud-Computing-1.png",
      link: "https://drive.google.com/file/d/1DkIIz-4EHEiQtpAik1UUUVU_rkxZsclE/view?usp=sharing"
    },
    { 
      title: "ChatGPT Made Easy: AI Essentials for Beginners", 
      platform: "Udemy", 
      date: "August 2025",
      description: "A course covering the fundamentals of AI and effective use of ChatGPT for productivity, automation, and problem-solving.",
      image: "https://i.ibb.co/gbKkq37M/udemy-ai-essiential-for-beginners.png",
      link: "https://drive.google.com/file/d/1mOUXrayF3QEQpKYu6Bx8yn3EHiz6JI-Q/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-[#3b82f6] selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1a]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <span className="text-[#3b82f6]">UD</span> Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center gap-2">
            {['Home', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact'].map((item) => (
              <NavItem 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                active={activeTab === item}
              >
                <button onClick={() => setActiveTab(item)}>{item}</button>
              </NavItem>
            ))}
            <button 
              onClick={() => setShowResume(true)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#94a3b8] hover:text-white hover:bg-white/5 transition-all"
            >
              Resume
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-[#94a3b8] hover:text-white">
              <Moon size={20} />
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl w-full flex flex-col items-center"
          >
            {/* Profile Image */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6] to-[#a855f7] rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/5 overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/gbVN4TsC/aa8f4eaa-c26e-4b05-bdc2-9702aff34e04-1.jpg" 
                  alt="Umang" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
                Umang Dadhich
              </span>
            </h1>

            <div className="h-12 mb-8">
              <p className="text-2xl md:text-3xl text-[#94a3b8] font-medium flex items-center justify-center gap-2">
                {roleText}
                <span className="w-1 h-8 bg-[#3b82f6] animate-pulse" />
              </p>
            </div>

            <p className="text-lg text-[#94a3b8] mb-12 max-w-2xl leading-relaxed">
              Welcome to my digital playground! I craft elegant solutions through code, turning ideas into immersive digital experiences that solve real-world problems.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Python', 'C++', 'Java', 'React', 'Machine Learning', 'Data Analysis', 'NLP'].map((skill) => (
                <motion.span 
                  key={skill} 
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(67, 56, 202, 0.6)",
                    boxShadow: "0 0 20px rgba(67, 56, 202, 0.4)"
                  }}
                  className="px-5 py-2 rounded-full bg-[#312e81]/40 text-sm text-white font-medium transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.button 
                onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl bg-[#3b82f6] text-white font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all"
              >
                View My Work
              </motion.button>
              <motion.button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-[#0a0f1a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              {/* Left Column - Quick Facts & Hobbies */}
              <div className="md:col-span-4 space-y-8">
                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold mb-8 text-white">Quick Facts</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-[#3b82f6]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#94a3b8] uppercase tracking-wider">Location</p>
                        <p className="text-white font-medium">Haryana, India</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 flex items-center justify-center shrink-0">
                        <GraduationCap size={20} className="text-[#a855f7]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#94a3b8] uppercase tracking-wider">Education</p>
                        <p className="text-white font-medium">Pursuing B.Tech in CSE</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center shrink-0">
                        <Briefcase size={20} className="text-[#3b82f6]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#94a3b8] uppercase tracking-wider">Experience</p>
                        <p className="text-white font-medium">0-1 Years</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-8">
                  <h3 className="text-xl font-bold mb-8 text-white">When I'm Not Coding</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <Monitor size={20} className="text-[#3b82f6]" />
                      <span className="text-white font-medium">Surfing Web</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <BookOpen size={20} className="text-[#a855f7]" />
                      <span className="text-white font-medium">Reading</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <Music size={20} className="text-[#3b82f6]" />
                      <span className="text-white font-medium">Music</span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Right Column - Journey & Approach */}
              <div className="md:col-span-8 space-y-8">
                <GlassCard className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#3b82f6]">My Journey</h3>
                  <div className="space-y-4 text-[#94a3b8] leading-relaxed">
                    <p>
                      Hi, I'm <span className="text-white font-semibold">Umang Dadhich</span>, a Computer Science student specializing in <span className="text-white font-semibold">Artificial Intelligence and Machine Learning</span>. I am passionate about building technology that solves real-world problems and improves everyday experiences.
                    </p>
                    <p>
                      My journey in tech started with curiosity about how software works. Over time, I developed strong interests in <span className="text-white font-semibold">programming, machine learning, and system design</span>. I enjoy exploring new technologies and continuously improving my skills through projects, certifications, and hands-on experimentation.
                    </p>
                    <p>
                      I have worked on projects involving <span className="text-white font-semibold">machine learning models, image processing using OpenCV, and predictive systems for power grid maintenance</span>. These experiences helped me understand how data and algorithms can be used to build intelligent systems.
                    </p>
                    <p>
                      I believe in <span className="text-white font-semibold">continuous learning, practical problem solving, and creating solutions that are both efficient and impactful</span>. My goal is to grow as a developer and contribute to innovative technologies in the field of AI and software development.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#a855f7]">My Approach</h3>
                  <div className="space-y-4 text-[#94a3b8] leading-relaxed">
                    <p>
                      My approach to development focuses on <span className="text-white font-semibold">clarity, efficiency, and continuous improvement</span>.
                    </p>
                    <p>
                      When working on a project, I start by clearly understanding the problem and breaking it down into smaller manageable tasks. I believe that strong planning and structured thinking lead to better solutions.
                    </p>
                    <p>
                      I focus on writing <span className="text-white font-semibold">clean, readable, and maintainable code</span>, while also ensuring that the system performs efficiently. I enjoy experimenting with new tools and technologies, especially in the areas of <span className="text-white font-semibold">machine learning, data processing, and intelligent systems</span>.
                    </p>
                    <p>
                      For me, development is not only about writing code — it is about <span className="text-white font-semibold">learning, improving, and creating meaningful solutions that make a difference</span>.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-[#0a0f1a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
                Technical Arsenal
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] mx-auto rounded-full mb-8" />
              <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
                A showcase of technologies I've mastered on my journey as a developer.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {["All Skills", "ProgrammingLanguages", "Frontend", "Frameworks"].map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveSkillTab(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeSkillTab === cat
                      ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 text-[#94a3b8] hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {skillsData
                  .filter(skill => activeSkillTab === 'All Skills' || skill.category === activeSkillTab)
                  .map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <GlassCard key={idx} className="group overflow-hidden flex flex-col h-full">
                  {project.image && (
                    <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent opacity-60" />
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">{project.title}</h3>
                    <div className="p-2 rounded-full bg-white/5">
                      <Terminal size={18} className="text-[#3b82f6]" />
                    </div>
                  </div>
                  <p className="text-[#94a3b8] mb-8 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "rgba(67, 56, 202, 0.6)",
                        }}
                        className="px-3 py-1 rounded-full bg-[#312e81]/40 text-xs text-white font-medium transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn w-full text-center py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_12px_rgba(201,163,255,0.5)]"
                    style={{
                      background: 'linear-gradient(135deg, #e8a1b0, #c9a3ff)',
                    }}
                  >
                    View Code
                  </a>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f1b2e, #0a1625)' }}>
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
              <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
                Professional credentials that validate my technical expertise and continuous learning journey.
              </p>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] mx-auto rounded-full mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="h-full bg-[#0f2235] rounded-[14px] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.4)] border border-white/5 flex flex-col cursor-pointer">
                      <div className="relative aspect-[4/3] mb-5 overflow-hidden rounded-[10px] bg-[#0a1625]">
                        {cert.image ? (
                          <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Award size={48} className="text-[#3b82f6]/40" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-[#94a3b8] text-sm mb-4 line-clamp-3">
                          {cert.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-[#94a3b8]">Platform:</span>
                          <span className="font-bold text-[#3b82f6] uppercase tracking-wider">{cert.platform}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#94a3b8]">Completed:</span>
                          <span className="text-[#94a3b8]">{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Experience</h2>
            </div>

            <div className="relative border-l-2 border-white/10 pl-8 space-y-12">
              {[
                {
                  title: "Job Simulation – TATA GenAI Powered Data Analytics",
                  desc: "Conducted comprehensive EDA to identify key factors influencing credit card delinquency. Constructed predictive models using GenAI-assisted tooling.",
                  date: "Feb 2026"
                },
                {
                  title: "C++ Programming: OOPs & Data Structures – Summer Training",
                  desc: "Analyzed client telemetry data and built Tableau dashboards. Organised Excel-based pay data for compliance review.",
                  date: "Jun 2025"
                },
                {
                  title: "Lovely Professional University",
                  desc: "Bachelor of Technology - Computer Science and Engineering; CGPA: 6.5",
                  date: "Aug 2023 - Present"
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#a855f7] shadow-[0_0_10px_rgba(59, 130, 246, 0.5)]" />
                  <span className="text-sm text-[#3b82f6] font-medium mb-2 block">{exp.date}</span>
                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <p className="text-[#94a3b8] text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors">
                      <Mail className="text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94a3b8]">Email</p>
                      <p className="font-medium">umangdadhich2005@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#a855f7]/20 transition-colors">
                      <Github className="text-[#a855f7]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94a3b8]">GitHub</p>
                      <p className="font-medium">github.com/Umang205</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors">
                      <Linkedin className="text-[#3b82f6]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#94a3b8]">LinkedIn</p>
                      <p className="font-medium">linkedin.com/in/umang-dadhich</p>
                    </div>
                  </div>
                </div>
              </div>

              <GlassCard>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#94a3b8]">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#94a3b8]">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3b82f6]/50 transition-colors"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#94a3b8]">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#3b82f6]/50 transition-colors resize-none"
                      placeholder="Your Message"
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#a855f7] text-white font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </form>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <motion.a whileHover={{ y: -5, color: '#3b82f6' }} href="#" className="text-[#94a3b8] transition-colors"><Github size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: '#a855f7' }} href="#" className="text-[#94a3b8] transition-colors"><Linkedin size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: '#3b82f6' }} href="#" className="text-[#94a3b8] transition-colors"><Instagram size={24} /></motion.a>
          </div>
          <div className="text-center">
            <p className="text-[#94a3b8] mb-2">© 2025 Umang Dadhich | Built with passion for technology</p>
            <p className="text-xs text-[#94a3b8]/50">Designed with modern UI/UX principles</p>
          </div>
        </div>
      </footer>

      {/* Resume Viewer Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full max-w-4xl max-h-[90vh] bg-[#0a0f1a] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col relative shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Terminal size={20} className="text-[#3b82f6]" />
                  Resume Viewer
                </h3>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1NhMOVSgmVkFmg3KUl8rUrHkWW3goXYA7" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#3b82f6] hover:text-white transition-colors"
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                  <button 
                    onClick={() => setShowResume(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Sun size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 text-left space-y-10 custom-scrollbar">
                {/* Header */}
                <div className="border-b border-white/10 pb-8">
                  <h1 className="text-4xl font-bold mb-2 text-white">Umang Dadhich</h1>
                  <div className="flex flex-wrap gap-4 text-sm text-[#94a3b8]">
                    <span className="flex items-center gap-1"><Mail size={14} /> umangdadhich2005@gmail.com</span>
                    <span className="flex items-center gap-1"><Linkedin size={14} /> linkedin.com/in/umang-dadhich</span>
                    <span className="flex items-center gap-1"><Github size={14} /> github.com/Umang205</span>
                  </div>
                </div>

                {/* Skills */}
                <section>
                  <h4 className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs mb-4">Technical Skills</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-1">Languages</p>
                      <p className="text-[#94a3b8]">C++, Python, Java, HTML/CSS</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Frameworks</p>
                      <p className="text-[#94a3b8]">Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Specializations</p>
                      <p className="text-[#94a3b8]">Computer Vision, Deep Learning, NLP, Reinforcement Learning</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">Tools</p>
                      <p className="text-[#94a3b8]">GitHub, Power BI, MS Excel, VS Code, Linux</p>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h4 className="text-[#a855f7] font-bold uppercase tracking-widest text-xs mb-4">Key Projects</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-white font-bold">Diabetes Risk Detector Using Machine Learning</h5>
                      <p className="text-xs text-[#94a3b8] mb-2">Nov 2025</p>
                      <ul className="list-disc list-inside text-sm text-[#94a3b8]/80 space-y-1">
                        <li>Developed a supervised ML model to predict diabetes risk with 82-85% accuracy.</li>
                        <li>Performed EDA and feature engineering to improve model performance.</li>
                        <li>Evaluated model using Confusion Matrix and ROC-AUC (~0.85).</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">Predictive Maintenance System</h5>
                      <p className="text-xs text-[#94a3b8] mb-2">May 2025</p>
                      <ul className="list-disc list-inside text-sm text-[#94a3b8]/80 space-y-1">
                        <li>Engineered a maintenance pipeline using ensemble ML models (Random Forest, XGBoost).</li>
                        <li>Secured 91% prediction accuracy for failures 48-72 hours in advance.</li>
                        <li>Built a Flask-based REST API and real-time monitoring dashboard.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Training */}
                <section>
                  <h4 className="text-[#3b82f6] font-bold uppercase tracking-widest text-xs mb-4">Training & Experience</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-white font-bold">Job Simulation – TATA GenAI Powered Data Analytics</h5>
                      <p className="text-xs text-[#94a3b8] mb-2">Feb 2026</p>
                      <p className="text-sm text-[#94a3b8]/80">Conducted comprehensive EDA and constructed predictive models using GenAI-assisted tooling.</p>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">C++ Programming: OOPs & Data Structures</h5>
                      <p className="text-xs text-[#94a3b8] mb-2">Jun 2025</p>
                      <p className="text-sm text-[#94a3b8]/80">Analyzed client telemetry data and built Tableau dashboards for business performance analysis.</p>
                    </div>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h4 className="text-[#a855f7] font-bold uppercase tracking-widest text-xs mb-4">Education</h4>
                  <div>
                    <h5 className="text-white font-bold">Lovely Professional University</h5>
                    <p className="text-sm text-[#94a3b8]">Bachelor of Technology - Computer Science and Engineering</p>
                    <p className="text-sm text-[#94a3b8]">CGPA: 6.5 | 2023 - Present</p>
                  </div>
                </section>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-white/5 text-center">
                <button 
                  onClick={() => setShowResume(false)}
                  className="px-10 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-bold"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
