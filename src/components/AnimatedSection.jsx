import { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, animation = 'fadeInUp', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationStyle = () => {
    if (!isVisible) return { opacity: 0, transform: 'translateY(40px)' };
    
    switch (animation) {
      case 'fadeInUp':
        return { animation: 'fadeInUp 0.6s ease-out forwards' };
      case 'fadeInLeft':
        return { animation: 'fadeInLeft 0.6s ease-out forwards' };
      case 'fadeInRight':
        return { animation: 'fadeInRight 0.6s ease-out forwards' };
      case 'scaleIn':
        return { animation: 'scaleIn 0.6s ease-out forwards' };
      default:
        return { animation: 'fadeInUp 0.6s ease-out forwards' };
    }
  };

  return (
    <div ref={sectionRef} style={getAnimationStyle()}>
      {children}
    </div>
  );
};

export default AnimatedSection;