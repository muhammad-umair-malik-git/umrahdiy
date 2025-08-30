import { useEffect } from 'react';

const Hero = ({ onStartPlanning, onRegisterInterest }) => {
  const handleRegisterInterestClick = () => {
    const interestFormElement = document.getElementById('interest-form');
    if (interestFormElement) {
      interestFormElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to opening the modal if element not found
      onRegisterInterest();
    }
  };
  useEffect(() => {
    // Add floating animation to hero elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('floating');
    }
  }, []);

  return (
    <section className="hero-modern">
      <div className="hero-content">
        <h1 className="hero-title">
          Plan Your Sacred Journey
        </h1>
        <p className="hero-subtitle">
          Experience a seamless Umrah planning journey with our comprehensive platform. 
          From flights to accommodation, we make your pilgrimage planning effortless and meaningful.
        </p>
        <button 
          onClick={handleRegisterInterestClick}
          className="cta-button"
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.98)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          📝 Register Interest
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-10">
        <div className="w-full h-full rounded-full border-2 border-white animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10">
        <div className="w-full h-full rounded-full border border-white animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Hero;