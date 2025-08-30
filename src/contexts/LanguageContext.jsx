import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  // Detect language on initial load
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Check if language is already stored
        const storedLang = localStorage.getItem('lang');
        if (storedLang && ['en', 'id', 'ms'].includes(storedLang)) {
          setLanguage(storedLang);
          setIsLoading(false);
          return;
        }

        // First-time visit: detect based on geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        let detectedLang = 'en'; // Default fallback
        
        if (data.country === 'ID') {
          detectedLang = 'id';
        } else if (data.country === 'MY') {
          detectedLang = 'ms';
        }
        
        setLanguage(detectedLang);
        localStorage.setItem('lang', detectedLang);
        
      } catch (error) {
        console.log('Language detection failed, using default (en):', error);
        setLanguage('en');
        localStorage.setItem('lang', 'en');
      } finally {
        setIsLoading(false);
      }
    };

    detectLanguage();
  }, []);

  const changeLanguage = (newLang) => {
    if (['en', 'id', 'ms'].includes(newLang)) {
      setLanguage(newLang);
      localStorage.setItem('lang', newLang);
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};