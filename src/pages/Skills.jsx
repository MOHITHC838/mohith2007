import { useMemo } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaJava,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiRender,
  SiRailway,
  SiGooglecloud,
  SiMysql,
  SiMongodb as SiMongodbCompass,
  SiTensorflow,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiEclipse } from 'react-icons/di';
const skillCategories = [
  {
    title: 'Frontend Development',
    color: '#0099bb',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Deployment Platforms',
    color: '#059669',
    skills: [
      { name: 'Netlify', icon: <SiNetlify /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Render', icon: <SiRender /> },
      { name: 'Railway', icon: <SiRailway /> },
      { name: 'GitHub Pages', icon: <FaGithub /> },
    ],
  },
  {
    title: 'Backend Development',
    color: '#e85d04',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Python (Flask)', icon: <FaPython /> },
      { name: 'Core Java', icon: <FaJava /> },
    ],
  },
  {
    title: 'Development Tools',
    color: '#0077b6',
    skills: [
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Eclipse', icon: <DiEclipse /> },
      { name: 'MongoDB Compass', icon: <SiMongodbCompass /> },
      { name: 'MySQL Workbench', icon: <SiMysql /> },
    ],
  },
  {
    title: 'AI Tools',
    color: '#6366f1',
    skills: [
        { name: 'DeepSeek', icon: <SiTensorflow /> },
        { name: 'ChatGPT', icon: <SiGooglecloud /> },
        { name: 'Gemini', icon: <SiTensorflow /> },
          { name: 'Cursor', icon: <SiTensorflow /> },
          { name: 'Perplexcity', icon: <SiTensorflow /> },
    ],
  },
  {
    title: 'Database',
    color: '#7b2cbf',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Version Control',
    color: '#dc2626',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
    ],
  },
  {
    title: 'Design Tools',
    color: '#db2777',
    skills: [
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Stitch (Google)', icon: <SiGooglecloud /> },
    ],
  },
];
const techLogos = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4' },
  { name: 'JavaScript', icon: <FaJs />, color: '#d97706' },
  { name: 'React.js', icon: <FaReact />, color: '#0099bb' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },
  { name: 'Git', icon: <FaGitAlt />, color: '#dc2626' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#0891b2' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7c3aed' },
  { name: 'Express', icon: <SiExpress />, color: '#0f172a' },
  { name: 'Figma', icon: <FaFigma />, color: '#db2777' },
  { name: 'VS Code', icon: <VscVscode />, color: '#007acc' },
  { name: 'GitHub', icon: <FaGithub />, color: '#0f172a' },
  { name: 'Netlify', icon: <SiNetlify />, color: '#059669' },
  { name: 'Vercel', icon: <SiVercel />, color: '#0f172a' },
];
/* Grid columns inside each category card by skill count */
const getSkillGridClass = (count) => {
  if (count >= 6) return 'cols-3';
  if (count >= 4) return 'cols-2';
  return 'cols-2';
};
const Skills = () => {
  /* Sort: most skills first → 6,5,4,4,3,2,2,2 */
  const sortedCategories = useMemo(
    () =>
      [...skillCategories].sort((a, b) => b.skills.length - a.skills.length),
    []
  );
  return (
    <div className="skills-page">
      <section className="section skills-section">
        <div className="container skills-container">
          <AnimatedSection>
            <h2 className="skills-title">Tech Skills</h2>
            <p className="skills-subtitle">
              Technologies and tools I use to build modern applications
            </p>
          </AnimatedSection>
          <div className="marquee-container">
            <div className="marquee-track">
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="marquee-item">
                  <span className="marquee-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="marquee-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="all-skills-grid">
            {sortedCategories.map((category, idx) => (
              <div
                key={category.title}
                className="skill-grid-item"
                style={{ animationDelay: `${idx * 0.07}s` }}
              >
                <div
                  className="skill-category-card"
                  style={{
                    '--accent': category.color,
                    '--accent-soft': `${category.color}18`,
                    '--accent-border': `${category.color}40`,
                  }}
                >
                  <div className="category-header">
                    <span className="category-dot" />
                    <h3 className="category-title">{category.title}</h3>
                    <span className="skill-count-badge">{category.skills.length}</span>
                  </div>
                  <div
                    className={`category-skills ${getSkillGridClass(category.skills.length)}`}
                  >
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="square-skill-card">
                        <div className="skill-icon-wrapper">
                          <div className="skill-icon">{skill.icon}</div>
                        </div>
                        <span className="skill-name-text">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .skills-page {
          --heading: #0f172a;
          --text: #475569;
          --font-body: 'DM Sans', system-ui, sans-serif;
          --font-display: 'Outfit', system-ui, sans-serif;
          width: 100%;
          font-family: var(--font-body);
        }
        .skills-section {
          padding-top: 40px;
          padding-bottom: 72px;
        }
        .skills-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .skills-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 5vw, 2.75rem);
          font-weight: 800;
          text-align: center;
          color: var(--heading);
          margin-bottom: 8px;
          background: none;
          -webkit-text-fill-color: var(--heading);
        }
        .skills-subtitle {
          text-align: center;
          color: var(--text);
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          margin-bottom: 28px;
          line-height: 1.55;
          padding: 0 4px;
        }
        /* Marquee */
        .marquee-container {
          width: 100%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 12px 0;
          margin-bottom: 28px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
          position: relative;
        }
        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 32px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(90deg, #fff, transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(270deg, #fff, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee-ltr 32s linear infinite;
        }
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: 12px;
          min-width: 72px;
          flex-shrink: 0;
        }
        .marquee-icon {
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .marquee-icon svg {
          width: 1.5rem;
          height: 1.5rem;
        }
        .marquee-name {
          font-size: 0.65rem;
          font-weight: 600;
          color: #64748b;
          white-space: nowrap;
        }
        /* Main grid — sorted high → low content */
        .all-skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }
        .skill-grid-item {
          width: 100%;
          animation: card-slide-in 0.5s ease-out both;
        }
        @keyframes card-slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .skill-category-card {
          height: auto;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-top: 4px solid var(--accent);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
          overflow: hidden;
        }
        .category-header {
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          background: linear-gradient(135deg, var(--accent-soft), transparent);
        }
        .category-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .category-title {
          font-family: var(--font-display);
          font-size: clamp(0.9rem, 2.8vw, 1.05rem);
          font-weight: 700;
          margin: 0;
          color: var(--accent);
          flex: 1;
          line-height: 1.3;
        }
        .skill-count-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: #64748b;
          background: #f1f5f9;
          padding: 4px 8px;
          border-radius: 20px;
          flex-shrink: 0;
        }
        /* Skill tiles inside card */
        .category-skills {
          padding: 12px;
          display: grid;
          gap: 10px;
          align-content: start;
        }
        .category-skills.cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .category-skills.cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .square-skill-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 10px 6px;
          text-align: center;
          border: 1px solid rgba(15, 23, 42, 0.06);
          min-height: 0;
        }
        .skill-icon-wrapper {
          width: 40px;
          height: 40px;
          margin: 0 auto 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: var(--accent-soft);
          border: 1px solid var(--accent-border);
        }
        .skill-icon {
          font-size: 1.35rem;
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .skill-icon svg {
          width: 1.35rem;
          height: 1.35rem;
          display: block;
        }
        .skill-name-text {
          font-size: clamp(0.68rem, 2vw, 0.78rem);
          font-weight: 600;
          color: #334155;
          display: block;
          line-height: 1.25;
          word-break: break-word;
        }
        /* Tablet */
        @media (max-width: 1024px) {
          .all-skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* Mobile */
        @media (max-width: 768px) {
          .skills-section {
            padding-top: 24px;
            padding-bottom: 48px;
          }
          .skills-container {
            padding: 0 10px;
          }
          .all-skills-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          /* 6 & 5 skills → 3 columns (compact 2 rows) */
          .category-skills.cols-3 {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
          .category-skills.cols-2 {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .skill-icon-wrapper {
            width: 36px;
            height: 36px;
          }
          .skill-icon,
          .skill-icon svg {
            font-size: 1.2rem;
            width: 1.2rem;
            height: 1.2rem;
          }
          .square-skill-card {
            padding: 8px 4px;
          }
        }
        /* Small phones — still 2+ cols, never 1 tall column */
        @media (max-width: 400px) {
          .skills-container {
            padding: 0 8px;
          }
          .category-skills.cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
          .marquee-item {
            min-width: 64px;
            padding: 8px 10px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
          .skill-grid-item {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};
export default Skills;
