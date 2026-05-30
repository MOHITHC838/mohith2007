
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>&lt;MERN Stack Developer /&gt;</h3>
            <p>Building the future, one line of code at a time</p>
          </div>
          
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:example@email.com">
              <FaEnvelope />
            </a>
          </div>
          
          <div className="copyright">
            <p>Made with <FaHeart /> by MERN Stack Developer | © 2024 All rights reserved</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: rgba(5, 5, 21, 0.95);
          backdrop-filter: blur(10px);
          padding: 50px 0 25px;
          margin-top: 50px;
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(0, 212, 255, 0.2);
        }
        
        .footer-content {
          text-align: center;
        }
        
        .footer-text h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-family: 'Orbitron', monospace;
          background: var(--gradient-1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .footer-text p {
          color: var(--gray);
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin: 30px 0;
        }
        
        .social-links a {
          color: var(--gray);
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          color: var(--primary);
          transform: translateY(-3px);
        }
        
        .copyright p {
          color: #64748b;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        
        .copyright svg {
          color: #ff6b35;
        }
      `}</style>
    </footer>
  );
};

export default Footer;