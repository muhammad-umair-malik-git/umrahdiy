import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';
import InterestForm from '../components/InterestForm';

const TermsAndConditions = () => {
  const { t } = useLanguage();
  const [showInterestForm, setShowInterestForm] = useState(false);

  const handleRegisterInterest = () => {
    setShowInterestForm(true);
  };

  return (
    <div>
      <Header onRegisterInterest={handleRegisterInterest} />
      <div className="page-container">
      <div className="page-content">
        <div className="page-card">
          <div className="page-header">
            <Link to="/" className="back-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
{t('backToHome')}
            </Link>
            <h1 className="page-title">{t('termsConditions')}</h1>
            <p className="page-subtitle">{t('lastUpdated')}: August 30, 2025</p>
          </div>

          <div>
            <section className="content-section">
              <p>
                {t('termsDescription')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('purposeWebsite')}</h2>
              <p>
                {t('preLaunchPlatform')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('useCollectedData')}</h2>
              <ul>
                <li>{t('consentReceive')}</li>
                <li>{t('mayUnsubscribe')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('userObligations')}</h2>
              <p>
                {t('whenUsing')}
              </p>
              <ul>
                <li>{t('provideFalseInfo')}</li>
                <li>{t('attemptAccess')}</li>
                <li>{t('useUnlawful')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('intellectualProperty')}</h2>
              <ul>
                <li>{t('allContent')}</li>
                <li>{t('notReproduce')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('limitationLiability')}</h2>
              <ul>
                <li>{t('websiteProvided')}</li>
                <li>{t('notLiable')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('governingLaw')}</h2>
              <p>
                {t('termsGoverned')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('contact')}</h2>
              <p>
                {t('questionsTerms')}
              </p>
              <p>
                <strong>{t('email')}:</strong> malik@bymalik.dev
              </p>
            </section>
          </div>
        </div>
      </div>
      </div>
      <NewFooter />
      
      <InterestForm 
        isOpen={showInterestForm}
        onClose={() => setShowInterestForm(false)}
      />
    </div>
  );
};

export default TermsAndConditions;