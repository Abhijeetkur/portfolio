import { useState, useEffect } from 'react';
import {
  Menu, X, ExternalLink, Mail,
  Terminal, Code, Server, Layout, Database, Smartphone, ArrowRight
} from 'lucide-react';
import './index.css';

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.47-1.48 6.47-7a5.4 5.4 0 0 0-1.54-3.9 5.4 5.4 0 0 0-.15-3.8s-1.2-.38-3.9 1.45a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 9.7c0 5.5 3.3 6.6 6.5 7A4.8 4.8 0 0 0 8 18v4" /><path d="M4 19.5 2 21" /></svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const projects = [
  {
    title: 'SleekLink: Scalable URL Shortener',
    desc: 'Highly scalable, distributed URL Shortener leveraging the CQRS pattern to decouple read-heavy redirection requests from write-heavy analytics pipelines. Sub-millisecond URL resolution latency matching an aggressive Redis caching strategy.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Apache Kafka'],
    github: 'https://github.com/Abhijeetkur/SleekLink',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Talkify: Secure Real-Time Chat',
    desc: 'Secure, real-time chat application with ECDH and AES-256-GCM end-to-end encryption. Supports private one-to-one messaging with real-time status updates via WebSockets and STOMP protocol. High performance Redis caching.',
    tags: ['Java', 'Spring Boot', 'React', 'Redis', 'WebSockets', 'JWT'],
    github: 'https://github.com/Abhijeetkur/Talkify',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'AI Resume Analyzer',
    desc: 'Full-stack AI-powered ATS evaluating resumes against job descriptions using Retrieval-Augmented Generation (RAG). Integrated Google Gemini 2.5 Flash LLM and FAISS vector database to semantically search uploaded PDFs.',
    tags: ['React', 'Python', 'FastAPI', 'LangChain', 'FAISS', 'Gemini'],
    github: 'https://github.com/Abhijeetkur/AiResumeAnalyzer',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Workout Tracker',
    desc: 'Full-stack fitness tracking application to help users plan workouts and visualize progress. Features high-performance RESTful API using FastAPI, a dynamic React frontend, and robust PostgreSQL schema using SQLAlchemy ORM.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/Abhijeetkur/Workout-Tracker',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop'
  }
];

const skills = [
  { name: 'Backend & Frameworks', icon: <Server />, desc: 'Java, Python, Spring Boot, FastAPI, REST APIs' },
  { name: 'Frontend Development', icon: <Layout />, desc: 'React, HTML, CSS, TypeScript, Tailwind CSS' },
  { name: 'Databases', icon: <Database />, desc: 'PostgreSQL, MySQL, MongoDB, Redis' },
  { name: 'Cloud & DevOps', icon: <Terminal />, desc: 'AWS(EC2, S3, EKS, VPC), Docker, Kubernetes, Jenkins, CI/CD' },
  { name: 'Core Expertise', icon: <Code />, desc: 'Data Structures & Algorithms, System Design, Problem Solving' }
];

const experiences = [
  {
    role: "Software Developer",
    company: "Apiero Medica Pvt. Ltd.",
    date: "Oct 2024 - Oct 2025",
    desc: "Developed video consultation and appointment booking features. Built analytics dashboards for doctors and admins, improving decision-making and operational efficiency by 25%."
  },
  {
    role: "Backend Developer",
    company: "Nector Foods Pvt. Ltd.",
    date: "Jan 2024 - Sep 2024",
    desc: "Architected 10+ RESTful APIs in Java Spring Boot for auth, orders, and inventory. automated tasks using Selenium, eliminating 6+ hours/day of manual effort."
  },
  {
    role: "Data Science Intern",
    company: "Vlippr",
    date: "Oct 2023 - Apr 2024",
    desc: "Applied NLP and statistical modeling to build speech-to-text datasets using Python, Librosa, and PyTorch, achieving 95% transcription accuracy."
  }
]

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="logo">
            <span className="logo-dot"></span>
            Abhijeet.
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-bg">
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
          </div>

          <div className="container hero-grid">
            <div className="hero-content animate-fade-in">
              <h1 className="delay-100" style={{ fontSize: "3.5rem" }}>
                Hi, I'm <br />
                <span className="gradient-text">Abhijeet Kumar</span>
              </h1>
              <p className="delay-200">
                A passionate Software Developer specializing in building scalable backend systems, seamless RESTful APIs, and responsive full-stack applications.
              </p>

              <div className="hero-btns delay-300">
                <a href="#projects" className="btn btn-primary">
                  View My Work <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>

              <div className="hero-stats delay-400">
                <div className="stat-item">
                  <h4>Java & Python</h4>
                  <p>Spring Boot & FastAPI</p>
                </div>
                <div className="stat-item">
                  <h4>AWS & Cloud</h4>
                  <p>Deployment & Scaling</p>
                </div>
                <div className="stat-item">
                  <h4>Full-Stack</h4>
                  <p>End to end integration</p>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper animate-fade-in delay-200">
              <div className="image-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
                alt="Developer Profile"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" id="skills">
          <div className="container">
            <h2 className="section-title">My <span>Expertise</span></h2>
            <p className="section-subtitle">
              Comprehensive knowledge spanning modern backend infrastructure, cloud DevOps, and frontend engineering.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="glass-panel skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <p>{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section" id="experience" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="container">
            <h2 className="section-title">Professional <span>Experience</span></h2>
            <p className="section-subtitle">
              Building impactful solutions for dynamic software businesses.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {experiences.map((exp, index) => (
                <div key={index} className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', fontWeight: '500' }}>{exp.company}</h4>
                    </div>
                    <span style={{ background: 'rgba(255,255,255,0.08)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {exp.date}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section" id="projects">
          <div className="container">
            <h2 className="section-title">Featured <span>Projects</span></h2>
            <p className="section-subtitle">
              Deep dive into complex algorithmic challenges and full-scale architectural executions.
            </p>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="glass-panel project-card">
                  <div className="project-img-wrapper">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={18} /> Code
                      </a>
                      {project.demo === '#' ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.6, cursor: 'not-allowed', fontSize: '0.9rem', fontWeight: 500 }}>
                          <ExternalLink size={18} /> Not Available
                        </span>
                      ) : (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="container">
            <h2 className="section-title">Get In <span>Touch</span></h2>
            <p className="section-subtitle">
              Currently open for new opportunities. Let's discuss how my skills can align with your engineering needs.
            </p>

            <div className="contact-wrapper">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <p>
                  Feel free to reach out to me for job opportunities, collaboration, or any technical discussions.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="contact-method-icon"><Mail /></div>
                    <div className="contact-method-info">
                      <h5>Email</h5>
                      <p>abhijeetkur025@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-method-icon"><Smartphone /></div>
                    <div className="contact-method-info">
                      <h5>Phone</h5>
                      <p>+91-8287792842</p>
                    </div>
                  </div>
                  <div className="contact-method">
                    <div className="contact-method-icon"><Linkedin /></div>
                    <div className="contact-method-info">
                      <h5>LinkedIn</h5>
                      <p><a href="https://www.linkedin.com/in/abhijeet-kumar-1310451b7/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>linkedin.com/in/abhijeet-kumar-1310451b7</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Jane Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" className="form-control" placeholder="jane@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" placeholder="Tell me about the opportunity..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://github.com/Abhijeetkur" target="_blank" rel="noreferrer" className="social-link" aria-label="Github"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/abhijeet-kumar-1310451b7/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="mailto:abhijeetkur025@gmail.com" className="social-link" aria-label="Email"><Mail size={20} /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Abhijeet Kumar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
