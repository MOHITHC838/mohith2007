import { useEffect, useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFileDownload,
} from 'react-icons/fa';

const ROLES = [
  'Software Devloper',
  'MERN Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Tech Enthusiast',
];

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/MOHITHC838',
    icon: FaGithub,
    color: '#181717',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohith-c-46153b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:mrcmsmohith04@gmail.com',
    icon: FaEnvelope,
    color: '#EA4335',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/917358231435',
    icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    id: 'resume',
    label: 'Resume',
    // File: public/mohithResume.pdf → URL: /mohithResume.pdf
    href: '/mohithResume.pdf',
    icon: FaFileDownload,
    color: '#7b2cbf',
  },
];

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      const currentRole = ROLES[index];

      if (isDeleting) {
        el.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        timeoutId = setTimeout(typeEffect, 2000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % ROLES.length;
        timeoutId = setTimeout(typeEffect, 500);
        return;
      }

      timeoutId = setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-center">
          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-title">
            <span className="gradient-text" ref={textRef}>
              MERN Stack Developer
            </span>
          </h1>

          <p className="hero-cursor" aria-hidden="true">|</p>

          <p className="hero-subtitle">
            Building modern web experiences with clean design and solid engineering.
          </p>

          <div className="social-icons">
            {SOCIAL_LINKS.map(({ id, label, href, icon: Icon, color }) => (
              <a
                key={id}
                href={href}
                className="social-link"
                target={id === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                title={id === 'resume' ? 'View or download resume (PDF)' : label}
                download={id === 'resume' ? 'Mohith_Resume.pdf' : undefined}
                style={{ '--brand-color': color }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .home {
          min-height: 100vh;
          width: 100%;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 40px 24px;
          text-align: center;
        }

        .hero-center {
          max-width: 720px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .hero-greeting {
          font-size: 1.15rem;
          font-weight: 500;
          color: #64748b;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 8px;
          font-family: 'Orbitron', monospace;
          color: #0f172a;
          min-height: 1.3em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0099bb 0%, #7b2cbf 50%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-cursor {
          display: inline-block;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 300;
          color: #00b8d9;
          margin: -12px 0 16px;
          animation: blink 1s step-end infinite;
          line-height: 1;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          max-width: 520px;
          margin: 0 auto 40px;
        }

        .social-icons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .social-link {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          text-decoration: none;
          color: var(--brand-color);
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid var(--brand-color);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          animation: logoHighlight 1.2s ease-out forwards;
        }

        .social-link:nth-child(1) { animation-delay: 0.6s; }
        .social-link:nth-child(2) { animation-delay: 0.75s; }
        .social-link:nth-child(3) { animation-delay: 0.9s; }
        .social-link:nth-child(4) { animation-delay: 1.05s; }
        .social-link:nth-child(5) { animation-delay: 1.2s; }

        @keyframes logoHighlight {
          0% {
            background: rgba(255, 255, 255, 0.2);
            border-color: var(--brand-color);
            box-shadow: 
              0 0 0 0 var(--brand-color),
              inset 0 0 15px 0 var(--brand-color);
            transform: scale(0.95);
            opacity: 0.6;
          }
          50% {
            background: rgba(255, 255, 255, 0.95);
            border-color: var(--brand-color);
            box-shadow: 
              0 0 25px 8px var(--brand-color),
              inset 0 0 20px -5px var(--brand-color);
          }
          100% {
            background: rgba(255, 255, 255, 0.9);
            border-color: var(--brand-color);
            box-shadow: 
              0 0 15px 5px var(--brand-color),
              inset 0 0 15px -2px var(--brand-color);
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes continuousGlow {
          0%, 100% {
            box-shadow: 
              0 0 15px 3px var(--brand-color),
              inset 0 0 10px -2px var(--brand-color);
          }
          50% {
            box-shadow: 
              0 0 25px 6px var(--brand-color),
              inset 0 0 15px -1px var(--brand-color);
          }
        }
        
        .social-link:hover {
          animation: continuousGlow 1.5s ease-in-out infinite !important;
          transform: translateY(-4px);
          background: #ffffff;
          color: var(--brand-color);
          border-color: var(--brand-color);
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 32px 16px;
          }

          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 32px;
          }

          .social-link {
            width: 48px;
            height: 48px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;