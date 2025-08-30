import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../utils/animations';
import Hero from '../components/Hero';
import StepIndicator from '../components/StepIndicator';
import FlightSelector from '../components/FlightSelector';
import HotelSelector from '../components/HotelSelector';
import BookingSummary from '../components/BookingSummary';
import InterestForm from '../components/InterestForm';

const Home = () => {
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
    <div className="min-h-screen">
      <Hero onStartPlanning={handleStartPlanning} onRegisterInterest={handleRegisterInterest} />
      
      <main className="bg-gray-50 relative z-10 main-container">
        <StepIndicator currentStep={currentStep} />
        
        {/* Informational Message */}
        <div className="animate-on-scroll mb-8">
          <div className="card-modern" style={{background: 'linear-gradient(135deg, var(--color-light-gold) 0%, var(--color-sage) 100%)', border: '2px solid var(--color-secondary)', marginBottom: 'var(--spacing-xl)'}}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--color-secondary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  📢
                </div>
              </div>
              <div className="flex-1">
                <h3 style={{
                  color: 'var(--color-primary)',
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-sm)',
                  margin: '0 0 var(--spacing-sm) 0'
                }}>
                  InshaAllah, Coming Soon!
                </h3>
                <p style={{
                  color: 'var(--color-gray-700)',
                  fontSize: 'var(--font-size-lg)',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  This is a demo version of our all-in-one Umrah planner. Booking features will go live once we complete development — your feedback helps us get there faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-container">
          {/* Main Form */}
          <div className="main-form">
            {/* Flight Selection */}
            <div ref={flightSectionRef}>
              <FlightSelector 
                onFlightSelect={handleFlightSelect}
                passengerCounts={passengerCounts}
              />
            </div>

            {/* Hotel Selection */}
            {currentStep >= 2 && selectedFlights && (
              <HotelSelector 
                onHotelSelect={handleHotelSelect}
                flightDateRange={flightDateRange}
              />
            )}
          </div>

          {/* Live Summary */}
          <div className="live-summary">
            <BookingSummary 
              selectedFlights={selectedFlights}
              selectedHotels={selectedHotels}
              onPurchase={handlePurchase}
            />
          </div>
        </div>
      </main>

      <InterestForm 
        isOpen={showInterestForm}
        onClose={() => setShowInterestForm(false)}
      />
    </div>
  );
};

export default Home;