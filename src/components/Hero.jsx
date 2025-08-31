import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = ({ onStartPlanning, onRegisterInterest }) => {
  const { t } = useLanguage();
  const handleRegisterInterestClick = () => {
    const interestFormElement = document.getElementById('interest-form');
    if (interestFormElement) {
      interestFormElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onRegisterInterest();
    }
  };

  useEffect(() => {
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden pb-8 sm:pb-12 lg:pb-16">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 via-transparent to-emerald-600/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-gold-300/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="hero-animate animate-fadeInUp">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-400/20 backdrop-blur-sm mb-6">
                <span className="text-gold-400 mr-2">🕋</span>
                <span className="text-gold-100 text-sm font-medium">{t('mostTrustedPlatform')}</span>
              </div>
            </div>

            <h1 className="hero-animate animate-fadeInUp text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t('heroTitle')}
            </h1>

            <p className="hero-animate animate-fadeInUp text-xl text-gray-300 mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <div className="hero-animate animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onStartPlanning}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🚀</span>
                  {t('startPlanning')}
                </span>
              </button>
              
              <button 
                onClick={handleRegisterInterestClick}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📝</span>
                  {t('registerInterest')}
                </span>
              </button>
            </div>

            <div className="hero-animate animate-fadeInUp mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">{t('instantBooking')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">{t('bestPrices')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-sm">{t('support24x7')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Booking Preview */}
          <div className="hero-animate animate-fadeInUp lg:animate-slideInRight w-full mt-8 lg:mt-0 px-4 sm:px-0 mb-8 lg:mb-0">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/20 mx-auto max-w-md lg:max-w-none mb-4 sm:mb-6 lg:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 text-center">
                {t('quickBookingPreview')}
              </h3>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl border border-gold-200">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="p-1.5 sm:p-2 bg-gold-500 rounded-lg flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg">✈️</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-800 text-sm sm:text-base">{t('flights')}</p>
                      <p className="text-xs sm:text-sm text-slate-600 truncate">{t('roundTripFlights')}</p>
                    </div>
                  </div>
                  <span className="text-gold-600 font-bold text-sm sm:text-base flex-shrink-0 ml-2">From $899</span>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="p-1.5 sm:p-2 bg-emerald-600 rounded-lg flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg">🏨</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-800 text-sm sm:text-base">{t('hotels')}</p>
                      <p className="text-xs sm:text-sm text-slate-600 truncate">{t('hotelAccommodation')}</p>
                    </div>
                  </div>
                  <span className="text-emerald-600 font-bold text-sm sm:text-base flex-shrink-0 ml-2">From $299</span>
                </div>

                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="p-1.5 sm:p-2 bg-blue-600 rounded-lg flex-shrink-0">
                      <span className="text-white text-sm sm:text-lg">🚌</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-800 text-sm sm:text-base">{t('transport')}</p>
                      <p className="text-xs sm:text-sm text-slate-600 truncate">{t('airportTransfers')}</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-bold text-sm sm:text-base flex-shrink-0 ml-2">From $99</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-base sm:text-lg font-bold text-slate-900">
                  <span className="text-sm sm:text-base">{t('totalPackageCost')}</span>
                  <span className="text-gold-600 text-sm sm:text-lg">From $1,297</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 text-center">*{t('pricePerAdult')}, all inclusive</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;