import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaTrophy,
  FaEnvelope,
} from 'react-icons/fa';

const NAV_ITEMS = [
  { path: '/', icon: FaHome, label: 'Home' },
  { path: '/about', icon: FaUser, label: 'About' },
  { path: '/skills', icon: FaLaptopCode, label: 'Skills' },
  { path: '/projects', icon: FaProjectDiagram, label: 'Projects' },
  { path: '/certification', icon: FaCertificate, label: 'Certification' },
  { path: '/achievement', icon: FaTrophy, label: 'Achievement' },
  { path: '/contact', icon: FaEnvelope, label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', '72px');
    return () => {
      document.documentElement.style.removeProperty('--sidebar-width');
    };
  }, []);

  return (
    <>
      <aside className="sidebar-nav" aria-label="Main navigation">
        <div className="sidebar-inner">
          <nav className="sidebar-links">
            {NAV_ITEMS.map(({ path, icon: Icon, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`sidebar-link ${isActive ? 'active' : ''}`}
                  aria-label={label}
                  title={label}
                >
                  <span className="sidebar-icon-wrap">
                    <Icon className="sidebar-icon" />
                  </span>
                  <span className="sidebar-active-bar" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <style>{`
        .sidebar-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width, 72px);
          height: 100vh;
          height: 100dvh;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }

        .sidebar-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 10px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border-right: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 4px 0 24px rgba(15, 23, 42, 0.06);
        }

        /* Icon group centered vertically — equal space top & bottom */
        .sidebar-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: auto 0;
        }

        .sidebar-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 14px;
          text-decoration: none;
          color: #64748b;
          transition: color 0.25s ease, transform 0.25s ease, background 0.25s ease;
        }

        .sidebar-link:hover {
          color: var(--primary, #00d4ff);
          background: rgba(0, 212, 255, 0.08);
          transform: translateX(2px);
        }

        .sidebar-link.active {
          color: var(--primary, #00d4ff);
          background: rgba(0, 212, 255, 0.12);
        }

        .sidebar-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-icon {
          font-size: 1.35rem;
        }

        .sidebar-active-bar {
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          border-radius: 0 4px 4px 0;
          background: var(--gradient-1, linear-gradient(135deg, #00d4ff, #7b2cbf));
          transition: height 0.25s ease;
        }

        .sidebar-link.active .sidebar-active-bar {
          height: 28px;
        }

        @media (max-width: 768px) {
          .sidebar-nav {
            width: 60px;
          }

          .sidebar-inner {
            padding: 20px 8px;
          }

          .sidebar-links {
            gap: 10px;
          }

          .sidebar-link {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }

          .sidebar-icon {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .sidebar-nav {
            width: 56px;
          }

          .sidebar-inner {
            padding: 16px 8px;
          }

          .sidebar-links {
            gap: 8px;
          }

          .sidebar-link {
            width: 40px;
            height: 40px;
          }

          .sidebar-icon {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;