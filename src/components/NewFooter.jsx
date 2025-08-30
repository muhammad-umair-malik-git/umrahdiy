import { useLanguage } from '../contexts/LanguageContext';

const NewFooter = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-2 rounded-lg">
                <span className="text-white text-xl">🕋</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl">UmrahDIY</span>
                <p className="text-gold-400 text-sm">{t('tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Making Umrah planning simple, affordable, and accessible for every Muslim. 
              Your trusted partner for the journey of a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.878-.808-1.297-1.959-1.297-3.326 0-1.297.49-2.448 1.297-3.326.808-.878 1.959-1.297 3.326-1.297s2.448.49 3.326 1.297c.878.808 1.297 1.959 1.297 3.326 0 1.297-.49 2.448-1.297 3.326-.808.878-1.959 1.297-3.326 1.297zm7.718 0c-1.297 0-2.448-.49-3.326-1.297-.878-.808-1.297-1.959-1.297-3.326 0-1.297.49-2.448 1.297-3.326.808-.878 1.959-1.297 3.326-1.297s2.448.49 3.326 1.297c.878.808 1.297 1.959 1.297 3.326 0 1.297-.49 2.448-1.297 3.326-.808.878-1.959 1.297-3.326 1.297z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">{t('howItWorks')}</a></li>
              <li><a href="/umrah-visa-info" className="text-gray-300 hover:text-gold-400 transition-colors">{t('visaGuide')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Travel Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li><a href="/terms-and-conditions" className="text-gray-300 hover:text-gold-400 transition-colors">{t('termsOfService')}</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-gold-400 transition-colors">{t('privacyPolicy')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">{t('contactUs')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 UmrahDIY. All rights reserved. | 
            <a href="/privacy-policy" className="hover:text-gold-400 transition-colors ml-1">Privacy Policy</a> | 
            <a href="/terms-and-conditions" className="hover:text-gold-400 transition-colors ml-1">Terms of Service</a>
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span>🤝</span>
              Powered by UmrahDIY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;