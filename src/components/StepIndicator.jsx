import { useEffect } from 'react';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Flights', icon: '✈️' },
    { number: 2, label: 'Hotels', icon: '🏨' },
    { number: 3, label: 'Summary', icon: '📋' }
  ];

  useEffect(() => {
    // Trigger step transition animation
    const stepElements = document.querySelectorAll('.step');
    stepElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
    });
  }, [currentStep]);

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div 
          key={step.number} 
          className={`step ${
            step.number === currentStep ? 'active' : 
            step.number < currentStep ? 'completed' : ''
          }`}
        >
          <div className="step-number">
            {step.number < currentStep ? '✓' : step.number}
          </div>
          <span className="step-label">
            <span className="hidden sm:inline">{step.icon} </span>
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className="step-connector" />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;