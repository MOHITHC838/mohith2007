/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
const INTERESTED_ROLES = [
  'Software Developer',
  'Frontend Developer',
  'MERN Stack Developer',
  'Web Developer',
  'UI/UX Designer',
];
const ROLE_CHIPS = [
  { id: 'software', label: 'Software Developer' },
  { id: 'frontend', label: 'Frontend Developer' },
  { id: 'mern', label: 'MERN Stack Developer' },
  { id: 'web', label: 'Web Developer' },
  { id: 'uiux', label: 'UI/UX Designer' },
];
const About = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const textRef = useRef(null);
  /* Typewriter for about keywords — optional; paragraphs use static spans */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % INTERESTED_ROLES.length);
        setRoleVisible(true);
      }, 280);
    }, 2800);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="about-page">
      <section className="section about-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="about-title">About Me</h2>
          </AnimatedSection>
          <div className="about-layout">
            {/* Left: video + interested (below video) */}
            <div className="about-left">
              <AnimatedSection animation="fadeInLeft">
                <div className="video-wrapper">
                  <video
                    className="about-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    poster="/videos/about-poster.jpg"
                  >
                    <source src="/videos/developer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={120}>
                <div className="interested-block">
                  <h4 className="interested-title">
                    If interested, I'm open to roles like
                  </h4>
                  <p className="interested-dynamic">
                    <span
                      className={`dynamic-role ${roleVisible ? 'show' : 'hide'}`}
                    >
                      {INTERESTED_ROLES[roleIndex]}
                    </span>
                  </p>
                  <p className="interested-note">
                    More details coming soon — tap a role below when updated.
                  </p>
                  <div className="interested-roles">
                    {ROLE_CHIPS.map((role) => (
                      <span key={role.id} className="role-chip">
                        {role.label}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            {/* Right: about text */}
            <AnimatedSection animation="fadeInRight">
              <div className="about-text">
                <h3 className="about-heading">
                  I'm <span className="name-highlight">Mohith</span>
                </h3>
                <p className="lead-text">
                  Passionate developer focused on building modern, scalable, and
                  user-friendly web applications with a strong foundation in computer
                  science fundamentals.
                </p>
                <p>
                  I specialize in the{' '}
                  <span className="term-highlight">MERN Stack</span> (MongoDB, Express.js,
                  React.js, Node.js) for full-stack web applications. On the backend, I work
                  with <span className="term-highlight">Core Java</span> and Node.js to build
                  reliable server-side solutions.
                </p>
                <p>
                  I'm comfortable in <span className="term-highlight">Linux</span> environments
                  and apply <span className="term-highlight">Operating Systems (OS)</span>{' '}
                  concepts when designing stable, maintainable systems.
                </p>
                <p>
                  My problem-solving approach is backed by{' '}
                  <span className="term-highlight">DSA</span> (Data Structures &amp; Algorithms),{' '}
                  <span className="term-highlight">DBMS</span>, and{' '}
                  <span className="term-highlight">Computer Networks</span> — helping me debug
                  faster and build better architecture.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <style>{`
        .about-page {
          --about-text: #475569;
          --about-heading: #0f172a;
          --about-font-body: 'DM Sans', system-ui, sans-serif;
          --about-font-display: 'Outfit', system-ui, sans-serif;
          --about-font-name: 'Playfair Display', Georgia, serif;
          width: 100%;
          font-family: var(--about-font-body);
        }
        .about-section {
          padding-top: 48px;
          padding-bottom: 80px;
        }
        .about-title {
          font-family: var(--about-font-display);
          font-size: clamp(2.1rem, 5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: 48px;
          color: var(--about-heading);
          background: none;
          -webkit-text-fill-color: var(--about-heading);
        }
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 48px;
          align-items: start;
        }
        .about-left {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .video-wrapper {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #f1f5f9;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
        }
        .about-video {
          width: 100%;
          aspect-ratio: 16 / 9;
          height: auto;
          min-height: 200px;
          max-height: 380px;
          object-fit: cover;
          display: block;
          background: #e2e8f0;
        }
        /* About text */
        .about-text {
          font-family: var(--about-font-body);
        }
        .about-heading {
          font-family: var(--about-font-display);
          font-size: clamp(1.75rem, 4vw, 2.35rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          line-height: 1.3;
          color: var(--about-heading);
        }
        .name-highlight {
          font-family: var(--about-font-name);
          font-style: italic;
          font-weight: 700;
          font-size: 1.12em;
          background: linear-gradient(120deg, #7b2cbf 0%, #0099bb 50%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lead-text {
          font-size: 1.15rem;
          color: #334155;
          margin-bottom: 22px;
          line-height: 1.8;
          font-weight: 500;
        }
        .about-text p {
          color: var(--about-text);
          line-height: 1.9;
          margin-bottom: 20px;
          font-size: 1.1rem;
          font-weight: 400;
        }
        /* Highlight: black, slightly larger — NO underline, NO background */
        .term-highlight {
          color: #0f172a;
          font-weight: 700;
          font-size: 1.12em;
        }
        /* Interested — under video */
        .interested-block {
          padding: 24px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          text-align: center;
        }
        .interested-title {
          font-family: var(--about-font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--about-heading);
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .interested-dynamic {
          min-height: 2rem;
          margin-bottom: 8px;
        }
        .dynamic-role {
          display: inline-block;
          font-family: var(--about-font-display);
          font-size: 1.2rem;
          font-weight: 700;
          color: #0099bb;
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .dynamic-role.show {
          opacity: 1;
          transform: translateY(0);
        }
        .dynamic-role.hide {
          opacity: 0;
          transform: translateY(8px);
        }
        .interested-note {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 18px;
        }
        .interested-roles {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .role-chip {
          padding: 10px 16px;
          font-family: var(--about-font-body);
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 50px;
          cursor: default;
          transition:
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s ease,
            color 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }
        .role-chip:hover {
          transform: translateY(-5px) scale(1.04);
          color: #0f172a;
          background: #fff;
          border-color: #00b8d9;
          box-shadow:
            0 10px 24px rgba(0, 184, 217, 0.2),
            0 0 0 1px rgba(0, 184, 217, 0.15);
        }
        @media (max-width: 968px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-left {
            order: 1;
          }
          .about-text {
            order: 2;
          }
          .about-video {
            max-height: 300px;
          }
        }
        @media (max-width: 768px) {
          .about-section {
            padding-top: 32px;
            padding-bottom: 60px;
          }
          .about-title {
            margin-bottom: 32px;
          }
          .about-text p {
            font-size: 1.05rem;
          }
          .lead-text {
            font-size: 1.08rem;
          }
          .role-chip {
            font-size: 0.82rem;
            padding: 8px 14px;
          }
          .dynamic-role {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </div>
  );
};
export default About;