// Animation utilities for modern UX
export const useScrollAnimation = () => {
  const observeElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  };

  return { observeElements };
};

// Step transition animation
export const animateStepTransition = (fromStep, toStep) => {
  const duration = 300;
  
  // Add exit animation to current step content
  const currentStepElements = document.querySelectorAll(`[data-step="${fromStep}"]`);
  currentStepElements.forEach(element => {
    element.style.animation = `fadeInUp ${duration}ms ease-out reverse`;
  });

  // Delay entrance of new step
  setTimeout(() => {
    const nextStepElements = document.querySelectorAll(`[data-step="${toStep}"]`);
    nextStepElements.forEach((element, index) => {
      element.style.animation = `fadeInUp ${duration}ms ease-out ${index * 100}ms both`;
    });
  }, duration / 2);
};

// Form field focus animation
export const animateFormFocus = (element) => {
  element.style.transform = 'scale(1.02)';
  element.style.transition = 'all 0.2s ease-out';
};

export const animateFormBlur = (element) => {
  element.style.transform = 'scale(1)';
};

// Button press animation
export const animateButtonPress = (element) => {
  element.style.transform = 'scale(0.98)';
  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 100);
};

// Card hover animations
export const animateCardEnter = (element) => {
  element.style.transform = 'translateY(-4px)';
  element.style.boxShadow = 'var(--shadow-xl)';
};

export const animateCardLeave = (element) => {
  element.style.transform = 'translateY(0)';
  element.style.boxShadow = 'var(--shadow-base)';
};

// Loading animation
export const createLoadingShimmer = (element) => {
  element.classList.add('loading-shimmer');
  
  return () => {
    element.classList.remove('loading-shimmer');
  };
};

// Page transition
export const animatePageTransition = (direction = 'in') => {
  const pageElement = document.querySelector('.main-container') || document.body;
  
  if (direction === 'in') {
    pageElement.style.animation = 'fadeInUp 0.5s ease-out';
  } else {
    pageElement.style.animation = 'fadeInUp 0.3s ease-out reverse';
  }
};

// Stagger animation for lists
export const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((element, index) => {
    element.style.animationDelay = `${index * delay}ms`;
    element.classList.add('animate-on-scroll');
  });
};