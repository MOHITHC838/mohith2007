/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import TechOrbitBackground from '../components/TechOrbitBackground';
import { 
  FaTrophy, FaAward, FaMedal, FaStar, FaCalendarAlt, FaGraduationCap, 
  FaLaptopCode, FaCertificate, FaBriefcase, FaChevronLeft, FaChevronRight, FaTimes
} from 'react-icons/fa';

import course from '../assets/certificateImage/courseComplete.png';
import awards from '../assets/certificateImage/awards.png';
import codeFuse from '../assets/certificateImage/codefushion.png';
import devDay from '../assets/certificateImage/devDayHackthon.jpeg';
import technoSelect from '../assets/certificateImage/technoSelected.png';
import technoInterview from '../assets/certificateImage/technoInterview.png';
import schoolFirst from '../assets/certificateImage/noticeBoard.jpeg';
import yashTechnovates from '../assets/certificateImage/yashTechnovates.png';
import news from '../assets/certificateImage/news.png';
import venus from '../assets/certificateImage/venus.png';

const Achievement = () => {
  // Track current image index for each card
  const [imageIndicesState, setImageIndicesState] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const autoSlideIntervals = useRef({});

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      // Save original overflow style
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore scroll when modal closes
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [modalOpen]);

  // Study Achievements Data
  const studyAchievements = [
    {
      id: 1,
      title: 'Student of the Year Award',
      event: 'KGIST Trust - 12th Quarterly Exam',
      description: 'Secured 2nd rank among all students. This award is given only to top 3 rank students. A prestigious recognition of academic excellence.',
      icon: <FaTrophy />,
      color: '#ffd700',
      date: '2023',
      organization: 'KGIST Trust',
      images: [awards],
      achievementType: 'study',
    },
    {
      id: 2,
      title: 'School First in 12th Grade',
      event: 'Board Examination',
      description: 'Achieved 560/600 marks, securing first position in school. Outstanding academic performance in final examinations.',
      icon: <FaMedal />,
      color: '#c0c0c0',
      date: '2023',
      organization: 'School Board',
      images: [schoolFirst,news],
      achievementType: 'study',
    },
     {
      id: 3,
      title: 'Outstanding Perfomace in 12th Board Examination',
      description: 'Achieved 560/600 marks, securing first position in school. Outstanding academic performance in final examinations.',
      icon: <FaMedal />,
      color: '#c0c0c0',
      date: '2024',
      organization: 'VENUS Foundation',
      images: [venus],
      achievementType: 'study',
    }
  ];

  // Hackathon Achievements Data
  const hackathonAchievements = [
    {
      id: 4,
      title: 'CodeFusion Hackathon',
      event: 'Java & Python Programming Round',
      description: 'Successfully cleared Level 1 programming round. Received participant certificate and advanced to next round. A great learning experience in competitive coding.',
      icon: <FaLaptopCode />,
      color: '#00d4ff',
      organization: 'Micro College',
      images: [codeFuse],
      achievementType: 'hackathon',
    },
    {
      id: 5,
      title: 'Dev Day Hackathon',
      event: 'Open Source - Full Stack Development',
      description: '24-hour hackathon focused on solving bugs, fixing errors, and implementing new features in full-stack applications. Gained hands-on experience in real-world problem solving.',
      icon: <FaAward />,
      color: '#7b2cbf',
      organization: 'Dev Day',
      images: [devDay],
      achievementType: 'hackathon',
    },
    {
      id: 6,
      title: '150+ Coursera Courses',
      event: 'Online Learning Platform',
      description: 'Completed over 150 courses on Coursera specializing in Web Development, Programming Languages, Database Management.',
      icon: <FaCertificate />,
      color: '#ff6b35',
      organization: 'Coursera',
      images: [course],
      achievementType: 'coursera',
      courseTopics: ['Web Development', 'Programming Languages', 'Database'],
    }
  ];

  // Internship Achievements Data
  const internshipAchievements = [
    {
      id: 7,
      title: 'Web Development Intern',
      Company_Name: 'TechNoCovai Pvt Ltd',
      Location: 'Saiba Colony, Coimbatore',
      event: 'First Internship Selection',
      description: 'Cleared 2 technical rounds and secured internship offer letter. Demonstrated strong problem-solving and web development skills in front-end and back-end technologies.',
      icon: <FaBriefcase />,
      color: '#00d4ff',
      date: '2026',
      organization: 'TechNoCovai Pvt Ltd',
      images: [
        technoInterview,
        technoSelect
        
      ],
      achievementType: 'internship',
      isAccepted: false,
    },
    {
      id: 8,
      title: 'Full Stack Development [MERN]',
      Company_Name: 'Yash Technovates',
      Location: 'Chennai',
      event: 'Second Internship Selection - ACCEPTED',
      description: 'Successfully cleared HR and technical interview rounds. Received internship offer letter based on technical knowledge and problem-solving abilities. Accepted this opportunity and actively contributing to full-stack MERN projects.',
      icon: <FaBriefcase />,
      color: '#7b2cbf',
      date: '2026',
      organization: 'Yash Technovates',
      images: [yashTechnovates],
      achievementType: 'internship',
      isAccepted: true,
    }
  ];

  const allAchievements = [...studyAchievements, ...hackathonAchievements, ...internshipAchievements];

  // Initialize image indices
  const getInitialImageIndices = () => {
    const initialIndices = {};
    allAchievements.forEach(achievement => {
      initialIndices[achievement.id] = 0;
    });
    return initialIndices;
  };

  // Auto-slide images every 5 seconds
// Auto-slide images every 5 seconds
useEffect(() => {
  // Initialize image indices with lazy initialization pattern
  const initialIndices = {};
  allAchievements.forEach(achievement => {
    initialIndices[achievement.id] = 0;
  });
  
  // Only set state if there are achievements
  if (Object.keys(initialIndices).length > 0) {
    setImageIndicesState(initialIndices);
  }
  
  // Set up auto-slide intervals
  const intervals = {};
  allAchievements.forEach(achievement => {
    if (achievement.images && achievement.images.length > 1) {
      intervals[achievement.id] = setInterval(() => {
        setImageIndicesState(prev => ({
          ...prev,
          [achievement.id]: (prev[achievement.id] + 1) % achievement.images.length
        }));
      }, 5000);
    }
  });
  
  // Store intervals in ref
  Object.assign(autoSlideIntervals.current, intervals);
  
  // Cleanup function
  return () => {
    Object.values(intervals).forEach(interval => {
      if (interval) clearInterval(interval);
    });
    Object.keys(autoSlideIntervals.current).forEach(key => {
      delete autoSlideIntervals.current[key];
    });
  };
}, []); // Empty dependency array - runs once on mount


  // Stop auto-slide on hover
  const handleCardHover = (achievementId) => {
    setHoveredCard(achievementId);
    if (autoSlideIntervals.current[achievementId]) {
      clearInterval(autoSlideIntervals.current[achievementId]);
    }
  };

  // Start auto-slide on mouse leave
  const handleCardLeave = (achievementId, imagesLength) => {
    setHoveredCard(null);
    if (imagesLength > 1) {
      autoSlideIntervals.current[achievementId] = setInterval(() => {
        setImageIndicesState(prev => ({
          ...prev,
          [achievementId]: (prev[achievementId] + 1) % imagesLength
        }));
      }, 5000);
    }
  };

  // Navigate to next image
  const nextImage = (achievementId, imagesLength, e) => {
    e.stopPropagation();
    setImageIndicesState(prev => ({
      ...prev,
      [achievementId]: (prev[achievementId] + 1) % imagesLength
    }));
  };

  // Navigate to previous image
  const prevImage = (achievementId, imagesLength, e) => {
    e.stopPropagation();
    setImageIndicesState(prev => ({
      ...prev,
      [achievementId]: (prev[achievementId] - 1 + imagesLength) % imagesLength
    }));
  };

  // Open modal with clicked image
  const openModal = (imageUrl, e) => {
    e.stopPropagation();
    setModalImage(imageUrl);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [modalOpen]);

  // Render achievement card with carousel
  const renderAchievementCard = (achievement, index) => {
    const images = achievement.images || [];
    const hasMultipleImages = images.length > 1;
    const currentIndex = imageIndicesState[achievement.id] || 0;
    const isHovered = hoveredCard === achievement.id;

    return (
      <div 
        key={achievement.id} 
        className="achievement-card-wrapper"
        style={{ animationDelay: `${index * 0.12}s` }}
        onMouseEnter={() => handleCardHover(achievement.id)}
        onMouseLeave={() => handleCardLeave(achievement.id, images.length)}
      >
        <div className={`achievement-card ${isHovered ? 'hovered' : ''} ${achievement.isAccepted ? 'accepted-internship' : ''}`}>
          <div className="achievement-image-container">
            <div className="image-carousel">
              <img 
                src={images[currentIndex]} 
                alt={`${achievement.title} - Image ${currentIndex + 1}`} 
                className={`achievement-image ${isHovered ? 'zoomed' : ''}`}
                onClick={(e) => openModal(images[currentIndex], e)}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Certificate';
                }}
              />
              
              {/* Navigation Buttons - Only show if multiple images */}
              {hasMultipleImages && (
                <>
                  <button 
                    className="carousel-btn prev-btn"
                    onClick={(e) => prevImage(achievement.id, images.length, e)}
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    className="carousel-btn next-btn"
                    onClick={(e) => nextImage(achievement.id, images.length, e)}
                  >
                    <FaChevronRight />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="carousel-dots">
                    {images.map((_, idx) => (
                      <span 
                        key={idx}
                        className={`dot ${currentIndex === idx ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImageIndicesState(prev => ({
                            ...prev,
                            [achievement.id]: idx
                          }));
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="achievement-content">
            <h4 className="achievement-title">{achievement.title}</h4>
            
            {/* Show Company Name and Location for Internships */}
            {achievement.achievementType === 'internship' && (
              <div className="internship-info">
                <p className="company-name">
                  <strong>{achievement.Company_Name}</strong>
                </p>
                <p className="company-location">📍 {achievement.Location}</p>
              </div>
            )}
            
            <p className="achievement-event">{achievement.event}</p>
            <p className="achievement-desc">{achievement.description}</p>
            
            {achievement.courseTopics && (
              <div className="course-topics">
                {achievement.courseTopics.map((topic, idx) => (
                  <span key={idx} className="topic-tag">{topic}</span>
                ))}
              </div>
            )}
            
            <div className="achievement-meta">
              <div className="achievement-date">
                <FaCalendarAlt />
                <span>{achievement.date || '2024'}</span>
              </div>
              <div className="achievement-org">
                {achievement.icon}
                <span>{achievement.organization}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="achievement-page">
      <TechOrbitBackground />
      
      <section className="section">
        <div className="container">
          <div className="page-header">
            <h1 className="achievements-title">My Achievements</h1>
            <p className="achievements-subtitle">Recognition, awards, and milestones in my journey</p>
          </div>
          
          {/* Achievement Stats */}
          <div className="achievement-stats">
            <div className="stat-circle">
              <span className="stat-number">{allAchievements.length}</span>
              <span className="stat-label">Total Achievements</span>
            </div>
            <div className="stat-circle">
              <span className="stat-number">150+</span>
              <span className="stat-label">Courses Completed</span>
            </div>
            <div className="stat-circle">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
          </div>
          
          {/* Study Section */}
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h3 className="section-header-title">Academic Achievements</h3>
          </div>
          <div className="achievements-grid">
            {studyAchievements.map((achievement, index) => renderAchievementCard(achievement, index))}
          </div>

          {/* Hackathon & Coursera Section */}
          <div className="section-header">
            <FaLaptopCode className="section-icon" />
            <h3 className="section-header-title">Hackathons & Learning</h3>
          </div>
          <div className="achievements-grid">
            {hackathonAchievements.map((achievement, index) => renderAchievementCard(achievement, index + studyAchievements.length))}
          </div>

          {/* Internship Section */}
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h3 className="section-header-title">Internship Achievements</h3>
          </div>
          <div className="achievements-grid">
            {internshipAchievements.map((achievement, index) => renderAchievementCard(achievement, index + studyAchievements.length + hackathonAchievements.length))}
          </div>
          
          {/* Call to Action */}
          <div className="cta-section">
            <h3>Want to see more?</h3>
            <p>I'm constantly learning and achieving new milestones</p>
            <button className="cta-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top
            </button>
          </div>
        </div>
      </section>

      {/* Modal Popup for Image */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-image-wrapper">
              <img src={modalImage} alt="Achievement Certificate" className="modal-image" />
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .achievement-page {
          min-height: 100vh;
          background: #ffffff;
          position: relative;
          overflow-x: hidden;
        }
        
        .section {
          position: relative;
          z-index: 1;
          padding: 60px 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Page Header */
        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .achievements-title {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: 'Orbitron', monospace;
          color: #1a1a2a;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #1a1a2a, #2d2d5e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .achievements-subtitle {
          text-align: center;
          color: #666;
          font-size: 1rem;
        }
        
        /* Section Header */
        .section-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 50px 0 30px;
        }
        
        .section-icon {
          font-size: 2rem;
          color: #00d4ff;
        }
        
        .section-header-title {
          font-size: 1.8rem;
          font-weight: 700;
          font-family: 'Orbitron', monospace;
          color: #1a1a2a;
        }
        
        /* Achievement Stats */
        .achievement-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }
        
        .stat-circle {
          text-align: center;
          padding: 20px 30px;
          background: rgba(245, 245, 245, 0.9);
          backdrop-filter: blur(5px);
          border-radius: 20px;
          border: 1px solid #e0e0e0;
          min-width: 150px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .stat-circle:hover {
          transform: translateY(-5px);
          border-color: #ffd700;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .stat-circle .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #ffd700;
          font-family: 'Orbitron', monospace;
        }
        
        .stat-circle .stat-label {
          font-size: 0.85rem;
          color: #666;
        }
        
        /* Achievements Grid - Left to Right Animation */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .achievement-card-wrapper {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInFromLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Achievement Card */
        .achievement-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(5px);
          border-radius: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .achievement-card:hover {
          transform: translateY(-8px);
          border-color: #00d4ff;
          box-shadow: 0 15px 40px rgba(0, 212, 255, 0.15);
        }
        
        /* Accepted Internship Highlight - No underline, just animated glow */
        .achievement-card.accepted-internship {
          border: 2px solid #7b2cbf;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(123, 44, 191, 0.06) 100%);
          box-shadow: 0 4px 20px rgba(123, 44, 191, 0.15);
          animation: acceptedGlow 2.5s ease-in-out infinite;
        }
        
        @keyframes acceptedGlow {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(123, 44, 191, 0.15);
          }
          50% {
            box-shadow: 0 8px 35px rgba(123, 44, 191, 0.25), inset 0 0 15px rgba(123, 44, 191, 0.08);
          }
        }
        
        .achievement-card.accepted-internship:hover {
          transform: translateY(-8px);
          border-color: #7b2cbf;
          box-shadow: 0 15px 40px rgba(123, 44, 191, 0.3);
          animation: none;
        }
        
        /* Image Container */
        .achievement-image-container {
          position: relative;
          margin-bottom: 20px;
          width: 100%;
          overflow: hidden;
          border-radius: 15px;
        }
        
        .image-carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 15px;
        }
        
        .achievement-image {
          width: 100%;
          height: 280px;
          object-fit: contain;
          object-position: center;
          transition: transform 0.4s ease, cursor 0.2s ease;
          border-radius: 15px;
          cursor: pointer;
          background: rgba(250, 250, 250, 0.5);
          padding: 10px;
          box-sizing: border-box;
        }
        
        /* Hover Zoom Effect */
        .achievement-image:hover {
          transform: scale(1.05);
        }
        
        .achievement-image.zoomed {
          transform: scale(1.1);
        }
        
        /* Carousel Navigation Buttons */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
          z-index: 10;
        }
        
        .achievement-card:hover .carousel-btn {
          opacity: 1;
        }
        
        .carousel-btn:hover {
          background: #00d4ff;
          transform: translateY(-50%) scale(1.1);
        }
        
        .prev-btn {
          left: 10px;
        }
        
        .next-btn {
          right: 10px;
        }
        
        /* Dots Indicator */
        .carousel-dots {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .dot:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: scale(1.2);
        }
        
        .dot.active {
          background: #00d4ff;
          width: 20px;
          border-radius: 10px;
        }
        
        .achievement-content {
          flex: 1;
        }
        
        .achievement-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 8px;
          font-family: 'Orbitron', monospace;
          color: #1a1a2a;
        }
        
        /* Internship Info Styles */
        .internship-info {
          margin-bottom: 10px;
          padding: 10px 0;
          border-left: 3px solid #00d4ff;
          padding-left: 12px;
        }
        
        .company-name {
          font-size: 0.95rem;
          color: #1a1a2a;
          margin-bottom: 4px;
          font-weight: 600;
        }
        
        .company-location {
          font-size: 0.8rem;
          color: #666;
          margin: 0;
        }
        
        .achievement-event {
          color: #00d4ff;
          font-size: 0.8rem;
          margin-bottom: 10px;
          font-weight: 500;
        }
        
        .achievement-desc {
          color: #666;
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        /* Course Topics */
        .course-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }
        
        .topic-tag {
          padding: 4px 12px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
          color: #00d4ff;
          font-weight: 500;
        }
        
        .achievement-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 0.75rem;
          color: #999;
        }
        
        .achievement-date, .achievement-org {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .achievement-org svg {
          font-size: 0.8rem;
        }
        
        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 50px;
          background: rgba(245, 245, 245, 0.9);
          backdrop-filter: blur(5px);
          border-radius: 20px;
          border: 1px solid #e0e0e0;
          margin-top: 40px;
        }
        
        .cta-section h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          font-family: 'Orbitron', monospace;
          color: #1a1a2a;
        }
        
        .cta-section p {
          color: #666;
          margin-bottom: 20px;
        }
        
        .cta-btn {
          padding: 12px 35px;
          background: transparent;
          border: 2px solid #00d4ff;
          color: #00d4ff;
          border-radius: 50px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-btn:hover {
          background: #00d4ff;
          color: white;
          transform: translateY(-3px);
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.3s ease;
          cursor: pointer;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .modal-container {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .modal-close-btn {
          position: absolute;
          top: -50px;
          right: -10px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .modal-close-btn:hover {
          background: #ff6b35;
          transform: rotate(90deg) scale(1.1);
        }
        
        .modal-image-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .modal-image {
          max-width: 85vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: imageZoomIn 0.3s ease;
        }
        
        @keyframes imageZoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        /* Responsive Design */
        @media (max-width: 968px) {
          .achievements-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
          
          .achievement-image {
            height: 200px;
          }
          
          .stat-circle {
            min-width: 120px;
          }
          
          .section-header-title {
            font-size: 1.3rem;
          }
          
          .achievements-title {
            font-size: 1.8rem;
          }
          
          .carousel-btn {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }
          
          .modal-close-btn {
            top: -45px;
            right: -5px;
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
          
          .modal-image {
            max-width: 90vw;
            max-height: 80vh;
          }
        }
        
        @media (max-width: 480px) {
          .achievement-stats {
            gap: 15px;
          }
          
          .stat-circle {
            padding: 15px 20px;
          }
          
          .stat-circle .stat-number {
            font-size: 1.5rem;
          }
          
          .achievement-image {
            height: 180px;
          }
          
          .modal-close-btn {
            top: -40px;
            right: 0px;
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }
          
          .modal-image {
            max-width: 95vw;
            max-height: 75vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Achievement;