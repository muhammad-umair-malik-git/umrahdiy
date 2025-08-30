import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../utils/animations';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StepIndicator from '../components/StepIndicator';
import FlightSelector from '../components/FlightSelector';
import HotelSelector from '../components/HotelSelector';
import BookingSummary from '../components/BookingSummary';
import InterestForm from '../components/InterestForm';
import NewFooter from '../components/NewFooter';

const Home = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFlights, setSelectedFlights] = useState(null);
  const [selectedHotels, setSelectedHotels] = useState([]);
  const [flightDateRange, setFlightDateRange] = useState({ start: null, end: null });
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    infants: 0,
    children: 0
  });

  const flightSectionRef = useRef(null);
  const { observeElements } = useScrollAnimation();

  useEffect(() => {
    // Initialize scroll animations
    const cleanup = observeElements();
    return cleanup;
  }, []);

  useEffect(() => {
    // Animate step transitions
    const elements = document.querySelectorAll('[data-step]');
    elements.forEach(element => {
      const stepData = element.getAttribute('data-step');
      if (parseInt(stepData) <= currentStep) {
        element.classList.add('animate-on-scroll', 'in-view');
      }
    });
  }, [currentStep]);

  const handleStartPlanning = () => {
    if (flightSectionRef.current) {
      flightSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFlightSelect = (flights) => {
    setSelectedFlights(flights);
    
    // Calculate date range from selected flights
    const dates = flights.map(() => new Date()); // Mock dates for now
    const startDate = new Date(Math.min(...dates));
    const endDate = new Date(Math.max(...dates));
    
    setFlightDateRange({ start: startDate, end: endDate });
    setCurrentStep(2);
  };

  const handleHotelSelect = (hotels) => {
    setSelectedHotels(hotels);
    if (hotels.length > 0) {
      setCurrentStep(3);
    }
  };

  const handlePurchase = () => {
    setShowInterestForm(true);
  };

  const handleRegisterInterest = () => {
    setShowInterestForm(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onRegisterInterest={handleRegisterInterest} />
      <Hero onStartPlanning={handleStartPlanning} onRegisterInterest={handleRegisterInterest} />
      
      {/* Main Booking Interface */}
      <main className="bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-100 border border-gold-200 mb-6">
              <span className="text-gold-600 mr-2">🕋</span>
              <span className="text-gold-800 text-sm font-medium">{t('completeBooking')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('planSacredJourney')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('bookingDescription')}
            </p>
          </div>

          {/* Step Indicator */}
          <div className="mb-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <StepIndicator currentStep={currentStep} />
          </div>
          
          {/* Demo Notice */}
          <div className="animate-fadeInUp mb-12" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-r from-gold-50 via-gold-100 to-emerald-50 border-2 border-gold-200 rounded-3xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-md">
                    <span className="text-white text-2xl animate-pulse-slow">📢</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {t('comingSoon')}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {t('comingSoonDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Booking Layout */}
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Booking Forms */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Flight Selection */}
              <div ref={flightSectionRef} className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <FlightSelector 
                  onFlightSelect={handleFlightSelect}
                  passengerCounts={passengerCounts}
                />
              </div>

              {/* Hotel Selection with Animation */}
              {currentStep >= 2 && selectedFlights && (
                <div className="animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                  <HotelSelector 
                    onHotelSelect={handleHotelSelect}
                    flightDateRange={flightDateRange}
                  />
                </div>
              )}

              {/* Travel Tips Card */}
              <div className="animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="text-3xl">💡</span>
                    {t('travelTips')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <div>
                        <p className="font-semibold text-slate-800">{t('bestTimeToVisit')}</p>
                        <p className="text-slate-600 text-sm">{t('bestTimeDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <div>
                        <p className="font-semibold text-slate-800">{t('visaProcessing')}</p>
                        <p className="text-slate-600 text-sm">{t('visaProcessingDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <div>
                        <p className="font-semibold text-slate-800">{t('accommodation')}</p>
                        <p className="text-slate-600 text-sm">{t('accommodationDesc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 text-lg">✓</span>
                      <div>
                        <p className="font-semibold text-slate-800">{t('healthSafety')}</p>
                        <p className="text-slate-600 text-sm">{t('healthSafetyDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 animate-slideInRight" style={{animationDelay: '0.4s'}}>
                <BookingSummary 
                  selectedFlights={selectedFlights}
                  selectedHotels={selectedHotels}
                  onPurchase={handlePurchase}
                />
                
                {/* Additional Info Card */}
                <div className="mt-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-6 border border-emerald-200">
                  <h4 className="text-lg font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <span>🛡️</span>
                    {t('whyChooseUs')}
                  </h4>
                  <ul className="space-y-3 text-emerald-700">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm">{t('atolProtected')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm">{t('customerSupport')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm">{t('bestPrice')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm">{t('flexibleCancellation')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      <NewFooter />
      
      <InterestForm 
        isOpen={showInterestForm}
        onClose={() => setShowInterestForm(false)}
      />
    </div>
  );
};

export default Home;