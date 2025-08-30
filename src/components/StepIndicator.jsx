import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StepIndicator = ({ currentStep }) => {
  const { t } = useLanguage();
  
  const steps = [
    { number: 1, label: t('flights'), icon: '✈️' },
    { number: 2, label: t('hotels'), icon: '🏨' },
    { number: 3, label: t('summary'), icon: '📋' }
  ];

  useEffect(() => {
    // Trigger step transition animation
    const stepElements = document.querySelectorAll('.step');
    stepElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
    });
  }, [currentStep]);

  return (
    <div className="flex justify-center items-center max-w-2xl mx-auto">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          
          {/* Step Circle */}
          <div className="flex items-center">
            <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl font-bold text-lg transition-all duration-300 ${
              step.number < currentStep 
                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg'
                : step.number === currentStep 
                ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/25'
                : 'bg-slate-200 text-slate-500'
            }`}>
              {step.number < currentStep ? (
                <span className="text-2xl">✓</span>
              ) : (
                <span className="text-xl">{step.number}</span>
              )}
            </div>
            
            {/* Step Label */}
            <div className="ml-4 text-left">
              <div className={`font-semibold transition-colors duration-300 ${
                step.number <= currentStep ? 'text-slate-900' : 'text-slate-500'
              }`}>
                <span className="text-2xl mr-2">{step.icon}</span>
                {step.label}
              </div>
              <div className={`text-sm transition-colors duration-300 ${
                step.number === currentStep ? 'text-gold-600' : 'text-slate-400'
              }`}>
                {step.number === currentStep 
                  ? t('inProgress') 
                  : step.number < currentStep 
                  ? t('completed') 
                  : t('pending')
                }
              </div>
            </div>
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className={`w-16 h-1 mx-8 rounded-full transition-colors duration-300 ${
              step.number < currentStep ? 'bg-emerald-500' : 'bg-slate-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;