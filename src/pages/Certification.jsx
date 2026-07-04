import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaCertificate } from 'react-icons/fa';
import reactCertificate from '../assets/certificateImage/react-jsadvanced-concept.png';
import javaScript from '../assets/certificateImage/advanced-javascript.png';
import fundamental from '../assets/certificateImage/java-fundatamental-concept.png';
import pythonFundamental from '../assets/certificateImage/python-for-beginners.png';
import sqlSyntax from '../assets/certificateImage/sql-syntax.png';
import introductionPython from '../assets/certificateImage/introductionPython.png';
import flaskIntroduction from '../assets/certificateImage/flask.png';
import javascriptIntroduction from '../assets/certificateImage/interdctionJavascript.png';
import htmlCssIntroduction from '../assets/certificateImage/portfolio.png';
import essentialJavaScriptjs from '../assets/certificateImage/beginnerjs.png';
import masteringJavaScript from '../assets/certificateImage/masteringjavascript.png';
import oopDomEvents from '../assets/certificateImage/oopDomEvent.png';
import mongodbIntroduction from '../assets/certificateImage/mongoDb.png';
import htmlCssBootstrap from '../assets/certificateImage/htmlCssBootstarp.png';
import gitGithub from '../assets/certificateImage/gitGithub.png';
import intermediateJava from '../assets/certificateImage/intermediateJava.png';
import advancedDatabase from '../assets/certificateImage/advanveSql.png';
import shopifyEcommerce from '../assets/certificateImage/ecommerceproject.png';
import accessibleWebDev from '../assets/certificateImage/accessibleWeb.png';
import noviTech from '../assets/certificateImage/MOHITH C .jpg';
import yashTech from '../assets/certificateImage/yashTechnovates.jpg';

const courseCertifications = [
  {
    id: 1,
    title: 'intership certificate',
    category: 'Full StackWeb Development',
    platform: 'Yash Technovates',
    verifyLink: 'https://coursera.org/share/a15fc84c3f1c5a11711eb5576aaca267',
    image: yashTech,
    description:   'Worked on real-world web development projects using JavaScript, Node.js, MongoDB and React. Developed responsive web pages, fixed UI issues, integrated APIs, and collaborated with the team to deliver high-quality web applications.',
  },
  {
    id: 2,
    title: 'React JS Advanced Concepts & Application Development',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/a15fc84c3f1c5a11711eb5576aaca267',
    image: reactCertificate,
    description:
      'Master advanced React concepts including hooks, Redux, performance optimization, and building scalable applications.',
  },
  {
    id: 3,
    title: 'Advanced JavaScript',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/69513322c7ae6e878125413b4c9b93b7',
    image: javaScript,
    description:
      'Learn advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features.',
  },
  {
    id: 4,
    title: 'MERN Stack Development',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: '#',
    image: noviTech,
    description:
      'Full-stack web development using MongoDB, Express.js, React, and Node.js with REST APIs.',
  },
  {
    id: 5,
    title: 'Introduction to Java Programming: Java Fundamental Concepts',
    category: 'Programming Languages',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/b000a759f3b49c94623735684ccee48b',
    image: fundamental,
    description:
      'Learn the basics of Java programming including variables, control structures, and object-oriented programming concepts.',
  },
  {
    id: 6,
    title: 'Python for Beginners: Variables and Strings',
    category: 'Programming Languages',
    platform: 'Coursera',
    verifyLink:
      'https://www.coursera.org/account/accomplishments/verify/J34J3B9AREJZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
    image: pythonFundamental,
    description:
      'Learn Python programming fundamentals including variables, data types, and string manipulation.',
  },
  {
    id: 7,
    title: 'Understanding Basic SQL Syntax',
    category: 'Database',
    platform: 'Coursera',
    verifyLink:
      'https://www.coursera.org/account/accomplishments/verify/GCAJ3FYX5UNU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
    image: sqlSyntax,
    description:
      'Comprehensive database design, SQL queries, normalization, and database management.',
  },
  {
    id: 8,
    title: 'Introduction to Python',
    category: 'Programming Languages',
    platform: 'Coursera',
    verifyLink:
      'https://www.coursera.org/account/accomplishments/verify/JJUGGGK7BEU1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
    image: introductionPython,
    description:
      'Learn Python programming fundamentals including variables, data types, and string manipulation.',
  },
  {
    id: 9,
    title: 'Create Your First Web App with Python and Flask',
    category: 'Programming Languages',
    platform: 'Coursera',
    verifyLink:
      'https://www.coursera.org/account/accomplishments/verify/0PKELFSBYMKI?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project',
    image: flaskIntroduction,
    description: 'Learn Python programming fundamentals and create project using flask',
  },
  {
    id: 10,
    title: 'Introduction to JavaScript',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/a8ff7ea01e36fc3df73391e26eab596b',
    image: javascriptIntroduction,
    description:
      'Learn the basics of JavaScript programming including variables, control structures, and object-oriented programming concepts.',
  },
  {
    id: 11,
    title: 'Build Your Portfolio Website with HTML and CSS',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/6cd69f8868bc77df1b7dba0d94ef4950',
    image: htmlCssIntroduction,
    description: 'Learn HTML and CSS fundamentals and create a responsive portfolio website.',
  },
  {
    id: 12,
    title: 'JavaScript Essentials for Beginners',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/d1fa806a5f1d5a3408b28f29e5bb3cc4',
    image: essentialJavaScriptjs,
    description:
      'Learn the basics of JavaScript programming including variables, control structures, and object-oriented programming concepts.',
  },
  {
    id: 13, 
    title: 'Mastering JavaScript',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/88b5d656aa1a82c52814c754ee0b9cb5',
    image: masteringJavaScript,
    description:
      'Learn advanced JavaScript concepts including closures, prototypes, and asynchronous programming.',
  },
  {
    id: 14,
    title: 'Modern JS: OOP, DOM & Events',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/88d1eef7ba0fff90433ad246ce91af22',
    image: oopDomEvents,
    description:
      'Learn modern JavaScript concepts including OOP, DOM manipulation, and event handling.',
  },
  {
    id: 15,
    title: 'Introduction to MongoDB',
    category: 'Database',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/9935c78b837050d8b473378eda2b5b6f',
    image: mongodbIntroduction,
    description:
      'Learn the fundamentals of MongoDB and how to use it effectively in your applications.',
  },
  {
    id: 16,
    title: 'Front-End Web Development (HTML, CSS & Bootstrap)',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/8ee7cc6f3adba453ccabeb659c5a21c2',
    image: htmlCssBootstrap,
    description: 'Learn HTML and CSS fundamentals and create a responsive portfolio website.',
  },
  {
    id: 17,
    title: 'Introduction to Git and GitHub',
    category: 'Version Control',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/e305e6759d75e656f0d442c1f78a87f8',
    image: gitGithub,
    description:
      'Learn Git and GitHub fundamentals and how to use them effectively in your development workflow.',
  },
  {
    id: 18,
    title: 'Intermediate Object-Oriented Programming with Java',
    category: 'Programming Languages',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/7f50b27aa7949a88309c892c84189cc2',
    image: intermediateJava,
    description: 'Learn intermediate object-oriented programming concepts with Java.',
  },
  {
    id: 19,
    title: 'Advanced Relational Database and SQL',
    category: 'Database',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/efd1ea77af9748b7d625b4e9767fb2fa',
    image: advancedDatabase,
    description: 'Learn advanced relational database concepts and SQL programming.',
  },
  {
    id: 20,
    title: 'Create your e-commerce store with Shopify',
    category: 'Web Development Project',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/76391607a35888c3dc899f28efef503a',
    image: shopifyEcommerce,
    description:
      'Learn how to create an e-commerce store using Shopify and customize it with HTML and CSS.',
  },
  {
    id: 21,
    title: 'Introduction to Accessible Web Development',
    category: 'Web Development',
    platform: 'Coursera',
    verifyLink: 'https://coursera.org/share/011fea03c4399574155874b81239adf1',
    image: accessibleWebDev,
    description:
      'Learn the fundamentals of accessible web development and how to create inclusive websites that can be used by everyone.',
  },
];

const getCategoryColor = (category) => {
  const map = {
    'Programming Languages': '#0099bb',
    'Web Development': '#e85d04',
    Database: '#7b2cbf',
    'Version Control': '#dc2626',
    'Web Development Project': '#059669',
  };
  return map[category] || '#64748b';
};

const Certification = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'all',
    'Programming Languages',
    'Web Development',
    'Database',
    'Version Control',
    'Web Development Project',
  ];

  const filteredCertifications = courseCertifications.filter((cert) => {
    const matchesCategory =
      filterCategory === 'all' || cert.category === filterCategory;
    const matchesSearch = cert.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="cert-page">
      <section className="section cert-section">
        <div className="container cert-container">
          <AnimatedSection>
            <h2 className="cert-page-title">My Certifications</h2>
            <p className="cert-page-subtitle">
              Professional courses and certifications I've completed
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp">
            <div className="search-filter-bar">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search certifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="filter-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`filter-chip ${filterCategory === category ? 'active' : ''}`}
                    onClick={() => setFilterCategory(category)}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="certifications-grid">
            {filteredCertifications.map((cert, index) => (
              <div
                key={cert.id}
                className="cert-grid-item"
                style={{ animationDelay: `${(index % 6) * 0.06}s` }}
              >
                <div className="cert-card">
                  <div className="cert-image-wrapper">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                      loading="lazy"
                    />
                    <div className="cert-badge">
                      <FaCertificate />
                    </div>
                    <div
                      className="cert-category"
                      style={{ background: getCategoryColor(cert.category) }}
                    >
                      {cert.category}
                    </div>
                  </div>
                  <div className="cert-details">
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-platform">
                      <span className="platform-name">{cert.platform}</span>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                    <div className="cert-footer">
                      <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="verify-link"
                      >
                        <FaCertificate />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <div className="no-results">
              <p>No certifications found matching your search.</p>
            </div>
          )}

          <div className="stats-section">
            <div className="stat-card">
              <span className="stat-number">{courseCertifications.length}</span>
              <span className="stat-label">Total Certifications</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {new Set(courseCertifications.map((c) => c.platform)).size}
              </span>
              <span className="stat-label">Learning Platforms</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {new Set(courseCertifications.map((c) => c.category)).size}
              </span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cert-page {
          --heading: #0f172a;
          --text: #475569;
          --muted: #64748b;
          --font-body: 'DM Sans', system-ui, sans-serif;
          --font-display: 'Outfit', system-ui, sans-serif;
          width: 100%;
          font-family: var(--font-body);
          min-height: 100vh;
        }

        .cert-section {
          padding-top: 40px;
          padding-bottom: 72px;
        }

        .cert-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .cert-page-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 5vw, 2.75rem);
          font-weight: 800;
          text-align: center;
          color: var(--heading);
          margin-bottom: 8px;
          background: none;
          -webkit-text-fill-color: var(--heading);
        }

        .cert-page-subtitle {
          text-align: center;
          color: var(--text);
          margin-bottom: 24px;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          line-height: 1.6;
        }

        .search-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .search-box {
          width: 100%;
        }

        .search-input {
          width: 100%;
          padding: 12px 18px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 50px;
          color: var(--heading);
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          -webkit-appearance: none;
          appearance: none;
        }

        .search-input:focus {
          outline: none;
          border-color: #00b8d9;
          box-shadow: 0 0 0 3px rgba(0, 184, 217, 0.15);
        }

        .search-input::placeholder {
          color: #94a3b8;
        }

        .filter-buttons {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          overflow-y: hidden;
          flex-wrap: nowrap;
          padding: 0 0 8px 0;
          margin: 0 -16px;
          padding-left: 16px;
          padding-right: 16px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }

        .filter-buttons::-webkit-scrollbar {
          height: 6px;
        }

        .filter-buttons::-webkit-scrollbar-track {
          background: #f0f0f0;
          border-radius: 3px;
        }

        .filter-buttons::-webkit-scrollbar-thumb {
          background: rgba(0, 153, 187, 0.4);
          border-radius: 3px;
        }

        .filter-buttons::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 153, 187, 0.6);
        }

        .filter-chip {
          padding: 10px 16px;
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 50px;
          color: #334155;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: var(--font-display);
          flex-shrink: 0;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          -webkit-appearance: none;
          appearance: none;
          border: 1px solid rgba(15, 23, 42, 0.12);
        }

        .filter-chip:hover,
        .filter-chip.active {
          background: linear-gradient(135deg, #0099bb, #7b2cbf);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(0, 153, 187, 0.2);
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
          align-items: start;
        }

        .cert-grid-item {
          animation: cert-fade-in 0.45s ease-out both;
        }

        @keyframes cert-fade-in {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cert-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.1);
        }

        .cert-image-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 68%;
          background: #f1f5f9;
          overflow: hidden;
        }

        .cert-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
          background: #f8fafc;
        }

        .cert-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          background: #0099bb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 0.95rem;
          z-index: 2;
        }

        .cert-category {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 700;
          color: #ffffff;
          z-index: 2;
          max-width: calc(100% - 24px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cert-details {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cert-title {
          font-family: var(--font-display);
          font-size: clamp(0.88rem, 2.5vw, 1rem);
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--heading);
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cert-platform {
          margin-bottom: 8px;
        }

        .platform-name {
          display: inline-block;
          padding: 4px 10px;
          background: #fff7ed;
          border-radius: 20px;
          color: #c2410c;
          font-size: 0.72rem;
          font-weight: 600;
          border: 1px solid #fed7aa;
        }

        .cert-description {
          font-size: 0.82rem;
          color: var(--text);
          line-height: 1.55;
          margin: 8px 0 12px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .cert-footer {
          margin-top: auto;
        }

        .verify-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          background: linear-gradient(135deg, #0099bb, #7b2cbf);
          border-radius: 25px;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          width: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          min-height: 44px;
          border: none;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }

        .verify-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 153, 187, 0.3);
        }

        .verify-link:active {
          transform: translateY(0);
        }

        .no-results {
          text-align: center;
          padding: 40px 20px;
          background: #ffffff;
          border-radius: 16px;
          color: var(--muted);
          border: 1px solid rgba(15, 23, 42, 0.08);
          margin-bottom: 32px;
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 20px 16px;
          text-align: center;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
        }

        .stat-number {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 5vw, 2.25rem);
          font-weight: 800;
          color: #0099bb;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.82rem;
          color: var(--muted);
          font-weight: 500;
        }

        /* Tablet and below */
        @media (max-width: 1024px) {
          .certifications-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cert-section {
            padding-top: 20px;
            padding-bottom: 32px;
          }

          .cert-container {
            padding: 0 10px;
            max-width: 100%;
          }

          .cert-page-title {
            font-size: 1.4rem;
            margin-bottom: 4px;
            word-break: break-word;
          }

          .cert-page-subtitle {
            margin-bottom: 16px;
            font-size: 0.85rem;
            word-break: break-word;
          }

          .search-filter-bar {
            gap: 8px;
            margin-bottom: 20px;
          }

          .search-box {
            width: 100%;
          }

          .search-input {
            padding: 11px 14px;
            font-size: 16px;
            border-radius: 8px;
          }

          .filter-buttons {
            gap: 6px;
            margin: 0 -10px;
            padding: 0 10px 6px 10px;
          }

          .filter-chip {
            padding: 8px 12px;
            font-size: 0.72rem;
            min-height: 36px;
            border-radius: 6px;
            flex-shrink: 0;
          }

          .filter-chip:hover,
          .filter-chip.active {
            transform: none;
          }

          .certifications-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 24px;
          }

          .cert-grid-item {
            animation: none;
          }

          .cert-card {
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
          }

          .cert-card:hover {
            transform: none;
          }

          .cert-image-wrapper {
            padding-bottom: 60%;
          }

          .cert-image {
            padding: 8px;
          }

          .cert-badge {
            width: 28px;
            height: 28px;
            top: 8px;
            right: 8px;
            font-size: 0.75rem;
          }

          .cert-category {
            bottom: 8px;
            left: 8px;
            padding: 3px 8px;
            font-size: 0.58rem;
            border-radius: 4px;
          }

          .cert-details {
            padding: 12px;
          }

          .cert-title {
            font-size: 0.9rem;
            margin-bottom: 6px;
            -webkit-line-clamp: 2;
          }

          .platform-name {
            padding: 3px 8px;
            font-size: 0.65rem;
          }

          .cert-description {
            font-size: 0.75rem;
            margin: 6px 0 10px;
            -webkit-line-clamp: 2;
          }

          .verify-link {
            padding: 10px 12px;
            font-size: 0.72rem;
            min-height: 36px;
            border-radius: 6px;
            gap: 6px;
          }

          .verify-link svg {
            width: 14px;
            height: 14px;
          }

          .verify-link:hover {
            transform: none;
          }

          .stats-section {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 20px;
          }

          .stat-card {
            padding: 14px 12px;
            border-radius: 10px;
          }

          .stat-number {
            font-size: 1.5rem;
            margin-bottom: 2px;
          }

          .stat-label {
            font-size: 0.7rem;
          }

          .no-results {
            padding: 28px 16px;
            border-radius: 10px;
            font-size: 0.85rem;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .cert-section {
            padding-top: 16px;
            padding-bottom: 24px;
          }

          .cert-container {
            padding: 0 8px;
            max-width: 100%;
          }

          .cert-page-title {
            font-size: 1.2rem;
            margin-bottom: 2px;
            font-weight: 700;
          }

          .cert-page-subtitle {
            margin-bottom: 12px;
            font-size: 0.8rem;
            margin-top: 2px;
          }

          .search-filter-bar {
            gap: 6px;
            margin-bottom: 16px;
          }

          .search-input {
            padding: 10px 12px;
            font-size: 16px;
            border-radius: 6px;
          }

          .filter-buttons {
            gap: 5px;
            margin: 0 -8px;
            padding: 0 8px 4px 8px;
          }

          .filter-chip {
            padding: 7px 10px;
            font-size: 0.65rem;
            min-height: 32px;
            border-radius: 4px;
          }

          .certifications-grid {
            gap: 10px;
            margin-bottom: 20px;
          }

          .cert-card {
            border-radius: 8px;
          }

          .cert-image-wrapper {
            padding-bottom: 55%;
          }

          .cert-image {
            padding: 6px;
          }

          .cert-badge {
            width: 26px;
            height: 26px;
            top: 6px;
            right: 6px;
            font-size: 0.7rem;
          }

          .cert-category {
            bottom: 6px;
            left: 6px;
            padding: 2px 6px;
            font-size: 0.55rem;
            border-radius: 3px;
          }

          .cert-details {
            padding: 10px;
          }

          .cert-title {
            font-size: 0.85rem;
            margin-bottom: 4px;
            -webkit-line-clamp: 2;
          }

          .cert-platform {
            margin-bottom: 4px;
          }

          .platform-name {
            padding: 2px 6px;
            font-size: 0.6rem;
          }

          .cert-description {
            font-size: 0.7rem;
            margin: 4px 0 8px;
            -webkit-line-clamp: 2;
            line-height: 1.3;
          }

          .verify-link {
            padding: 8px 10px;
            font-size: 0.65rem;
            min-height: 32px;
            border-radius: 4px;
            gap: 4px;
          }

          .verify-link svg {
            width: 12px;
            height: 12px;
          }

          .stats-section {
            gap: 8px;
            margin-top: 16px;
          }

          .stat-card {
            padding: 12px 10px;
            border-radius: 8px;
          }

          .stat-number {
            font-size: 1.3rem;
            margin-bottom: 1px;
          }

          .stat-label {
            font-size: 0.65rem;
          }

          .no-results {
            padding: 20px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
          }
        }

        /* Extra small devices (< 360px) */
        @media (max-width: 359px) {
          .cert-section {
            padding-top: 12px;
            padding-bottom: 20px;
          }

          .cert-container {
            padding: 0 6px;
          }

          .cert-page-title {
            font-size: 1.1rem;
            margin-bottom: 2px;
          }

          .cert-page-subtitle {
            margin-bottom: 10px;
            font-size: 0.75rem;
          }

          .search-filter-bar {
            gap: 4px;
            margin-bottom: 12px;
          }

          .search-input {
            padding: 9px 10px;
            font-size: 16px;
            border-radius: 4px;
          }

          .filter-buttons {
            gap: 4px;
            margin: 0 -6px;
            padding: 0 6px 2px 6px;
          }

          .filter-chip {
            padding: 6px 8px;
            font-size: 0.6rem;
            min-height: 28px;
            border-radius: 3px;
          }

          .certifications-grid {
            gap: 8px;
            margin-bottom: 16px;
          }

          .cert-card {
            border-radius: 6px;
          }

          .cert-image-wrapper {
            padding-bottom: 50%;
          }

          .cert-image {
            padding: 4px;
          }

          .cert-badge {
            width: 24px;
            height: 24px;
            top: 4px;
            right: 4px;
            font-size: 0.65rem;
          }

          .cert-category {
            bottom: 4px;
            left: 4px;
            padding: 1px 4px;
            font-size: 0.5rem;
            border-radius: 2px;
          }

          .cert-details {
            padding: 8px;
          }

          .cert-title {
            font-size: 0.8rem;
            margin-bottom: 2px;
            -webkit-line-clamp: 1;
          }

          .cert-platform {
            margin-bottom: 2px;
          }

          .platform-name {
            padding: 1px 4px;
            font-size: 0.55rem;
          }

          .cert-description {
            display: none;
          }

          .verify-link {
            padding: 6px 8px;
            font-size: 0.6rem;
            min-height: 28px;
            border-radius: 3px;
          }

          .verify-link span {
            display: none;
          }

          .stats-section {
            gap: 6px;
            margin-top: 12px;
          }

          .stat-card {
            padding: 10px 8px;
            border-radius: 6px;
          }

          .stat-number {
            font-size: 1.1rem;
            margin-bottom: 0;
          }

          .stat-label {
            font-size: 0.6rem;
          }

          .no-results {
            padding: 16px 10px;
            border-radius: 6px;
            font-size: 0.75rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-grid-item {
            animation: none;
          }

          .cert-card,
          .verify-link,
          .filter-chip {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Certification;