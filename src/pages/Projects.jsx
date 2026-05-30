import { useState } from 'react';
import {
  FaGithub,
  FaChartLine,
  FaFingerprint,
  FaTasks,
  FaBook,
  FaCar,
  FaUser,
  FaBrain,
  FaRobot,
} from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'AI Career Guidance Advisor',
      category: 'fullstack',
      topic: 'Artificial Intelligence & Career Counseling',
      problemStatement:
        'Students and job seekers often struggle to choose the right career path due to lack of personalized guidance and awareness of market trends.',
      solution:
        'Developed an AI-powered career advisor that uses Python backend, web speech API for voice interaction, and provides personalized career recommendations based on user skills, interests, and market demand.',
      tech: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'Web Speech API', 'AI/ML'],
      image:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
      github: 'https://github.com/MOHITHC838/AI-CARREIR-ADVISIOR-SIH-PROJECT-.git',
      likes: 156,
      impact: '🎯 2000+ users guided to right careers',
      icon: <FaRobot />,
    },
    {
      id: 2,
      title: 'Smart Attendance System',
      category: 'fullstack',
      topic: 'Face Recognition & Automation',
      problemStatement:
        'Traditional attendance systems are time-consuming, prone to proxy attendance, and lack real-time tracking capabilities.',
      solution:
        'Built a MERN stack attendance system with face recognition using OpenCV, real-time face detection, automated attendance marking, and detailed analytics dashboard for administrators.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'OpenCV', 'Face Recognition API', 'WebRTC'],
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
      github: 'https://github.com/MOHITHC838/SMART-ATTENDANCE-SYSTEM-FRONTEND.git',
      likes: 203,
      impact: '⏱️ 85% time saved in attendance management',
      icon: <FaFingerprint />,
    },
    {
      id: 3,
      title: 'Task Manager',
      category: 'fullstack',
      topic: 'Productivity & Task Management',
      problemStatement:
        'Individuals and teams struggle to organize tasks, track deadlines, and collaborate efficiently without proper tools.',
      solution:
        'Created a full-featured task manager using Python Flask backend, allowing users to create, assign, track tasks with deadlines, priority levels, and real-time notifications.',
      tech: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Jinja2'],
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      github: 'https://github.com/MOHITHC838/TastManger.git',
      likes: 98,
      impact: '✅ 60% increase in team productivity',
      icon: <FaTasks />,
    },
    {
      id: 4,
      title: 'Online Library Management System',
      category: 'frontend',
      topic: 'Digital Library & Book Management',
      problemStatement:
        'Traditional libraries lack digital access, making it difficult for users to search, borrow, and manage books efficiently.',
      solution:
        'Developed a responsive library management system using pure HTML, CSS, and JavaScript with features like book search, categorization, borrowing system, and admin dashboard for inventory management.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage API', 'Bootstrap'],
      image:
        'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop',
      github: 'https://github.com/MOHITHC838/Online_Library_System_web.git',
      likes: 76,
      impact: '📚 5000+ books managed digitally',
      icon: <FaBook />,
    },
    {
      id: 5,
      title: 'Car Service Shop',
      category: 'frontend',
      topic: 'Automotive Service Management',
      problemStatement:
        'Car service centers face challenges in managing appointments, service records, and customer communication manually.',
      solution:
        'Built a modern React.js application for car service shops featuring service booking, appointment scheduling, service history tracking, and real-time status updates for customers.',
      tech: ['React.js', 'React Router', 'CSS3', 'Axios', 'Context API'],
      image:
        'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop',
      github: 'https://github.com/MOHITHC838/Car_Srvice_Web-frontend.git',
      likes: 112,
      impact: '🚗 1000+ service appointments managed',
      icon: <FaCar />,
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      category: 'frontend',
      topic: 'Developer Portfolio & Branding',
      problemStatement:
        'Developers need an impressive online presence to showcase their skills, projects, and experience to potential employers.',
      solution:
        'Created a stunning, fully responsive personal portfolio website with smooth animations, project showcase, skills section, and contact form using React.js and modern CSS3 animations.',
      tech: ['React.js', 'CSS3', 'Framer Motion', 'React Icons', 'EmailJS'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      github: 'https://github.com/MOHITHC838/mohith2007.git',
      likes: 245,
      impact: '🌟 Professional brand presence established',
      icon: <FaUser />,
    },
  ];

  const handleCardClick = (github) => {
    window.open(github, '_blank', 'noopener,noreferrer');
  };

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const getCategoryIcon = (category) =>
    category === 'fullstack' ? <FaChartLine /> : <FaBrain />;

  const renderMarqueeCard = (project, keyPrefix) => (
    <div
      key={`${keyPrefix}-${project.id}`}
      className="marquee-project-card-full"
      onClick={() => handleCardClick(project.github)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') handleCardClick(project.github);
      }}
    >
      <div className="marquee-project-card-inner">
        <div className="marquee-project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="marquee-category-badge">
            {getCategoryIcon(project.category)}
            <span>{project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}</span>
          </div>
        </div>
        <div className="marquee-project-content">
          <div className="marquee-project-header">
            <div className="marquee-project-icon">{project.icon}</div>
            <div className="marquee-project-title">
              <h4>{project.title}</h4>
              <p>{project.topic}</p>
            </div>
          </div>
          <div className="marquee-problem-solution">
            <div className="marquee-problem">
              <span className="marquee-label">🎯 Problem Statement</span>
              <p>{project.problemStatement}</p>
            </div>
            <div className="marquee-solution">
              <span className="marquee-label">💡 Proposed Solution</span>
              <p>{project.solution}</p>
            </div>
          </div>
          <div className="marquee-tech-stack-section">
            <span className="marquee-label">⚙️ Tech Stack</span>
            <div className="marquee-tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="marquee-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="marquee-project-footer">
            <div className="marquee-impact">
              <span>{project.impact}</span>
            </div>
            <div className="marquee-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="marquee-github"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects-page">
      <section className="projects-section">
        <div className="projects-container">
          {/* Always visible heading — no AnimatedSection */}
          <header className="page-header">
            <h1 className="projects-title">My Projects</h1>
            <p className="projects-subtitle">
              Building innovative solutions for real-world problems
            </p>
          </header>

          <div className="filter-buttons">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'frontend', label: 'Frontend' },
              { key: 'fullstack', label: 'Full Stack' },
            ].map(({ key, label }) => (
              <button
                key={key}
                type="button"
                className={`filter-btn ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className="projects-marquee-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={`projects-marquee-content ${isHovering ? 'paused' : ''}`}>
              {filteredProjects.map((p) => renderMarqueeCard(p, 'a'))}
              {filteredProjects.map((p) => renderMarqueeCard(p, 'b'))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .projects-page {
          --heading: #0f172a;
          --text: #475569;
          --muted: #64748b;
          --font-body: 'DM Sans', system-ui, sans-serif;
          --font-display: 'Outfit', system-ui, sans-serif;
          width: 100%;
          max-width: 100%;
          font-family: var(--font-body);
          overflow-x: hidden;
        }

        /* Override global .section flex center */
        .projects-section {
          display: block !important;
          align-items: unset !important;
          justify-content: flex-start !important;
          min-height: auto !important;
          padding: 24px 0 56px !important;
          width: 100%;
        }

        .projects-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 12px;
          box-sizing: border-box;
        }

        .page-header {
          text-align: center;
          margin-bottom: 24px;
          padding-top: 8px;
          position: relative;
          z-index: 5;
        }

        .projects-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 6vw, 2.75rem);
          font-weight: 800;
          color: var(--heading);
          margin: 0 0 8px;
          line-height: 1.2;
          opacity: 1 !important;
          visibility: visible !important;
          -webkit-text-fill-color: var(--heading);
        }

        .projects-subtitle {
          color: var(--text);
          margin: 0;
          font-size: clamp(0.88rem, 3vw, 1.05rem);
          line-height: 1.55;
          padding: 0 4px;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 18px;
          background: #fff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          color: #334155;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-family: var(--font-display);
          font-size: clamp(0.75rem, 2.5vw, 0.88rem);
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: linear-gradient(135deg, #0099bb, #7b2cbf);
          border-color: transparent;
          color: #fff;
        }

        .projects-marquee-container {
          width: 100%;
          overflow: hidden;
          background: #fff;
          border-radius: 16px;
          padding: 14px 0;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
          position: relative;
        }

        .projects-marquee-container::before,
        .projects-marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 28px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .projects-marquee-container::before {
          left: 0;
          background: linear-gradient(90deg, #fff, transparent);
        }

        .projects-marquee-container::after {
          right: 0;
          background: linear-gradient(270deg, #fff, transparent);
        }

        .projects-marquee-content {
          display: flex;
          gap: 16px;
          animation: scroll-rtl 42s linear infinite;
          width: max-content;
        }

        .projects-marquee-content.paused {
          animation-play-state: paused;
        }

        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-project-card-full {
          width: min(420px, calc(100vw - var(--sidebar-width, 72px) - 32px));
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          max-height: 650px;
          overflow-y: auto;
        }

        .marquee-project-card-full:hover {
          border-color: #0099bb;
          box-shadow: 0 8px 32px rgba(0, 153, 187, 0.15);
          transform: translateY(-4px);
        }

        .marquee-project-image {
          height: 180px;
          overflow: hidden;
        }

        .marquee-project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .marquee-category-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.95);
          padding: 4px 8px;
          border-radius: 16px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #0099bb;
        }

        .marquee-project-image {
          position: relative;
        }

        .marquee-project-content {
          padding: 16px;
        }

        .marquee-project-header {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .marquee-project-icon {
          width: 36px;
          height: 36px;
          background: #e0f7fa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0099bb;
          flex-shrink: 0;
        }

        .marquee-project-title h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--heading);
          margin: 0;
          line-height: 1.3;
          word-break: break-word;
        }

        .marquee-project-title p {
          font-size: 0.65rem;
          color: var(--muted);
          margin: 4px 0 0;
        }

        .marquee-problem-solution {
          margin: 12px 0;
        }

        .marquee-problem,
        .marquee-solution {
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 10px;
          border-left: 4px solid;
        }

        .marquee-problem {
          background: #fff3e0;
          border-left-color: #e85d04;
        }

        .marquee-solution {
          background: #e0f7ff;
          border-left-color: #0099bb;
        }

        .marquee-label {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
          letter-spacing: 0.5px;
          color: #0f172a;
        }

        .marquee-problem p,
        .marquee-solution p {
          font-size: 0.78rem;
          color: #1a1a2a;
          margin: 0;
          line-height: 1.5;
          word-break: break-word;
          font-weight: 500;
        }

        .marquee-tech-stack-section {
          margin: 12px 0;
        }

        .marquee-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 8px 0;
        }

        .marquee-tech-pill {
          font-size: 0.7rem;
          padding: 5px 10px;
          background: linear-gradient(135deg, #e0f7ff 0%, #e0f2fe 100%);
          border-radius: 12px;
          color: #0284c7;
          font-weight: 600;
          border: 1px solid #0099bb;
        }

        .marquee-project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #f1f5f9;
          padding-top: 8px;
          gap: 8px;
        }

        .marquee-impact {
          font-size: 0.62rem;
          color: #059669;
          font-weight: 600;
          flex: 1;
          word-break: break-word;
        }

        .marquee-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .marquee-github {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: linear-gradient(135deg, #0099bb, #0284c7);
          border-radius: 8px;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .marquee-github:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 153, 187, 0.3);
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 16px 0 40px !important;
          }

          .projects-container {
            padding: 0 8px;
          }

          .page-header {
            margin-bottom: 20px;
          }

          .projects-title {
            font-size: 1.45rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-marquee-content {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;