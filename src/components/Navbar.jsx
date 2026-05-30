import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaCertificate,
  FaTrophy,
  FaEnvelope,
  FaBars,
  FaTimes,
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

const MOBILE_BREAKPOINT = 768;
const SIDEBAR_WIDTH_DESKTOP = '72px';
const SIDEBAR_WIDTH_MOBILE_OPEN = '72px';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT
  );

  // Detect mobile vs desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close sidebar when resizing to desktop
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isOpen]);

  // Update layout offset for App.jsx main content
  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.setProperty(
        '--sidebar-width',
        isOpen ? SIDEBAR_WIDTH_MOBILE_OPEN : '0px'
      );
    } else {
      document.documentElement.style.setProperty('--sidebar-width', SIDEBAR_WIDTH_DESKTOP);
    }
    return () => {
      document.documentElement.style.removeProperty('--sidebar-width');
    };
  }, [isMobile, isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile menu button — only on small screens */}
      {isMobile && (
        <button
          type="button"
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Dark overlay behind sidebar on mobile */}
      {isMobile && isOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={`sidebar-nav ${isMobile ? 'sidebar-nav--mobile' : ''} ${isOpen ? 'sidebar-nav--open' : ''}`}
        aria-label="Main navigation"
        aria-hidden={isMobile && !isOpen}
      >
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
                  onClick={closeSidebar}
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
        .sidebar-toggle {
          display: none;
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 1100;
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.12);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .sidebar-toggle:hover {
          transform: scale(1.05);
          background: #fff;
        }

        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
          border: none;
          padding: 0;
          margin: 0;
          background: rgba(15, 23, 42, 0.45);
          cursor: pointer;
          animation: fadeIn 0.25s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

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
          transition: transform 0.3s ease;
        }

        .sidebar-nav--mobile {
          width: 72px;
          transform: translateX(-100%);
        }

        .sidebar-nav--mobile.sidebar-nav--open {
          transform: translateX(0);
        }

        .sidebar-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 10px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-right: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 4px 0 24px rgba(15, 23, 42, 0.1);
        }

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
          .sidebar-toggle {
            display: flex;
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
          .sidebar-nav--mobile {
            width: 64px;
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