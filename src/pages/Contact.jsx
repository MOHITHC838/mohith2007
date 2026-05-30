import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFileDownload,
  FaPaperPlane,
} from 'react-icons/fa';

const CONTACT = {
  email: 'mrcmsmohith04@gmail.com',
  phone: '+91 73582 31435',
  phoneHref: 'tel:+917358231435',
  location: 'India',
};

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
    href: '/mohithResume.pdf',
    icon: FaFileDownload,
    color: '#7b2cbf',
  },
];

const EXPLORING = [
  'MERN Stack',
  'AI-powered applications',
  'Secure Web Development',
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus({
        type: 'error',
        message:
          'Form not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file and restart the server.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio message from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will check my email and reply soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="section contact-section">
        <div className="container">
          <AnimatedSection>
            <div className="contact-header">
              <h2 className="contact-title">Let's Build Something Amazing Together</h2>
              <p className="contact-intro">
                I enjoy building modern web applications and solving real-world problems using
                technology. Whether it's a project, internship, or collaboration, feel free to
                connect with me.
              </p>
              <div className="availability-badge">
                <span className="status-dot" aria-hidden="true" />
                Available for internships and freelance projects
              </div>
              <p className="response-note">Usually responds within 24 hours</p>
            </div>
          </AnimatedSection>

          <div className="contact-grid">
            <AnimatedSection animation="fadeInLeft">
              <div className="contact-panel">
                <h3 className="panel-title">Contact Information</h3>
                <div className="info-items">
                  <a className="info-item" href={`mailto:${CONTACT.email}`}>
                    <div className="info-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span className="info-label">Email</span>
                      <span className="info-value">{CONTACT.email}</span>
                    </div>
                  </a>
                  <a className="info-item" href={CONTACT.phoneHref}>
                    <div className="info-icon">
                      <FaPhone />
                    </div>
                    <div>
                      <span className="info-label">Phone</span>
                      <span className="info-value">{CONTACT.phone}</span>
                    </div>
                  </a>
                  <div className="info-item info-item--static">
                    <div className="info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-value">{CONTACT.location}</span>
                    </div>
                  </div>
                </div>

                <h4 className="panel-subtitle">Connect on social</h4>
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
                      style={{ '--brand': color }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>

                <div className="exploring-block">
                  <h4 className="panel-subtitle">Currently exploring</h4>
                  <ul className="exploring-list">
                    {EXPLORING.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="panel-title">Send a message</h3>
                <p className="form-hint">
                  Fill in your details — the message will be delivered to my inbox at{' '}
                  <strong>{CONTACT.email}</strong>.
                </p>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : "Let's Connect"}
                  <FaPaperPlane className="send-icon" />
                </button>
                {status.message && (
                  <p
                    className={`form-status form-status--${status.type}`}
                    role="alert"
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          --text: #475569;
          --heading: #0f172a;
          --font-body: 'DM Sans', system-ui, sans-serif;
          --font-display: 'Outfit', system-ui, sans-serif;
          font-family: var(--font-body);
          width: 100%;
        }
        .contact-section {
          padding-top: 48px;
          padding-bottom: 80px;
        }
        .contact-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 48px;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.25;
          background: none;
          -webkit-text-fill-color: var(--heading);
        }
        .contact-intro {
          font-size: 1.1rem;
          color: var(--text);
          line-height: 1.85;
          margin-bottom: 20px;
        }
        .availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 50px;
          font-size: 0.92rem;
          font-weight: 600;
          color: #047857;
          margin-bottom: 12px;
        }
        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.25);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .response-note {
          font-size: 0.95rem;
          font-weight: 600;
          color: #0099bb;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .contact-panel,
        .contact-form {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 20px;
          padding: 28px 24px;
          box-shadow: 0 10px 32px rgba(15, 23, 42, 0.06);
        }
        .panel-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 20px;
        }
        .panel-subtitle {
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          margin: 24px 0 12px;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 14px;
          border-radius: 14px;
          text-decoration: none;
          color: inherit;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .info-item:hover {
          background: #f1f5f9;
          transform: translateX(4px);
        }
        .info-item--static {
          cursor: default;
        }
        .info-item--static:hover {
          transform: none;
        }
        .info-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #0099bb;
          transition: all 0.3s ease;
        }
        .info-item:hover .info-icon {
          background: #e0f7fa;
          color: #007a96;
          transform: scale(1.08);
        }
        .info-label {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 2px;
        }
        .info-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--heading);
          word-break: break-word;
        }
        .social-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--brand);
          background: #fff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .social-link:hover {
          transform: translateY(-5px) scale(1.06);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
        }
        .exploring-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .exploring-list li {
          position: relative;
          padding: 8px 0 8px 20px;
          color: var(--text);
          font-size: 1rem;
          line-height: 1.5;
        }
        .exploring-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #0099bb;
          font-weight: 700;
        }
        .form-hint {
          font-size: 0.9rem;
          color: #64748b;
          margin: -8px 0 20px;
          line-height: 1.6;
        }
        .form-hint strong {
          color: #334155;
        }
        .form-group {
          margin-bottom: 18px;
        }
        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 8px;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          background: #f8fafc;
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 12px;
          color: var(--heading);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94a3b8;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00b8d9;
          box-shadow: 0 0 0 3px rgba(0, 184, 217, 0.15);
          background: #fff;
        }
        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border: none;
          border-radius: 50px;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          background: linear-gradient(135deg, #0099bb, #7b2cbf);
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 153, 187, 0.35);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: wait;
        }
        .send-icon {
          font-size: 0.95rem;
        }
        .form-status {
          margin-top: 16px;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.5;
        }
        .form-status--success {
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }
        .form-status--error {
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .contact-header {
            margin-bottom: 36px;
          }
          .contact-intro {
            font-size: 1.02rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;