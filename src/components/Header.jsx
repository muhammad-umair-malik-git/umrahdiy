import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onRegisterInterest }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-2 rounded-lg shadow-md">
              <span className="text-white text-xl font-bold">🕋</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-lg leading-tight">UmrahDIY</span>
              <span className="text-gold-600 text-xs font-medium leading-tight">Plan Your Sacred Journey</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-gold-600 font-medium transition-colors duration-200">
              How it Works
            </a>
            <a href="/umrah-visa-info" className="text-slate-700 hover:text-gold-600 font-medium transition-colors duration-200">
              Visa Guide
            </a>
            <button 
              onClick={onRegisterInterest}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Register Interest
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fadeInUp">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-slate-700 hover:text-gold-600 font-medium py-2 transition-colors">
                How it Works
              </a>
              <a href="/umrah-visa-info" className="text-slate-700 hover:text-gold-600 font-medium py-2 transition-colors">
                Visa Guide
              </a>
              <button 
                onClick={onRegisterInterest}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-lg font-medium mt-2 text-left cursor-pointer"
              >
                Register Interest
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;