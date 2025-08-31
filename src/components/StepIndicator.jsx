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
    <div className="w-full px-4">
      {/* Mobile: Compact horizontal steps */}
      <div className="flex sm:hidden justify-center items-center space-x-6">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center relative">
            
            {/* Step Circle - Mobile Compact */}
            <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl font-bold text-sm transition-all duration-300 ${
              step.number < currentStep 
                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg'
                : step.number === currentStep 
                ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/25'
                : 'bg-slate-200 text-slate-500'
            }`}>
              {step.number < currentStep ? (
                <span className="text-lg">✓</span>
              ) : (
                <span className="text-sm">{step.number}</span>
              )}
            </div>
            
            {/* Step Label - Mobile Compact */}
            <div className="mt-2 text-center">
              <div className={`font-semibold text-xs transition-colors duration-300 ${
                step.number <= currentStep ? 'text-slate-900' : 'text-slate-500'
              }`}>
                <div className="text-lg mb-1">{step.icon}</div>
                <div className="leading-tight">{step.label}</div>
              </div>
            </div>
            
            {/* Connector Line - Mobile */}
            {index < steps.length - 1 && (
              <div className={`absolute top-6 left-16 w-10 h-0.5 rounded-full transition-colors duration-300 ${
                step.number < currentStep ? 'bg-emerald-500' : 'bg-slate-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      
      {/* Tablet & Desktop: Full horizontal layout */}
      <div className="hidden sm:flex justify-center items-center max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-shrink-0">
            
            {/* Step Circle */}
            <div className="flex items-center">
              <div className={`relative flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg transition-all duration-300 ${
                step.number < currentStep 
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg'
                  : step.number === currentStep 
                  ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/25'
                  : 'bg-slate-200 text-slate-500'
              }`}>
                {step.number < currentStep ? (
                  <span className="text-xl lg:text-2xl">✓</span>
                ) : (
                  <span className="text-base lg:text-xl">{step.number}</span>
                )}
              </div>
              
              {/* Step Label */}
              <div className="ml-3 lg:ml-4 text-left">
                <div className={`font-semibold text-sm lg:text-base transition-colors duration-300 ${
                  step.number <= currentStep ? 'text-slate-900' : 'text-slate-500'
                }`}>
                  <span className="text-lg lg:text-2xl mr-2">{step.icon}</span>
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
              <div className={`w-12 lg:w-16 h-1 mx-4 lg:mx-8 rounded-full transition-colors duration-300 ${
                step.number < currentStep ? 'bg-emerald-500' : 'bg-slate-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;