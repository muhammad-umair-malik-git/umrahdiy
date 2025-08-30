import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';
import InterestForm from '../components/InterestForm';

const PrivacyPolicy = () => {
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
            <h1 className="page-title">{t('privacyPolicy')}</h1>
            <p className="page-subtitle">{t('lastUpdated')}: August 30, 2025</p>
          </div>

          <div>
            <section className="content-section">
              <p>
                {t('privacyDescription')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('informationWeCollect')}</h2>
              <p>
                {t('mayCollectInfo')}
              </p>
              <ul>
                <li>{t('emailAddress')}</li>
                <li>{t('messageInfo')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('howWeUseInfo')}</h2>
              <p>
                {t('useInfoFor')}
              </p>
              <ul>
                <li>{t('sendUpdates')}</li>
                <li>{t('notifyLaunch')}</li>
                <li>{t('understandInterest')}</li>
              </ul>
              <p>
                {t('noSellData')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('dataStorageSecurity')}</h2>
              <ul>
                <li>{t('storedSecurely')}</li>
                <li>{t('implementSafeguards')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('dataRetentionDeletion')}</h2>
              <ul>
                <li>{t('retainNecessary')}</li>
                <li>{t('requestDeletion')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('yourRights')}</h2>
              <p>
                {t('rightTo')}
              </p>
              <ul>
                <li>{t('accessData')}</li>
                <li>{t('requestCorrection')}</li>
                <li>{t('requestDeletion2')}</li>
              </ul>
              <p>
                {t('makeRequest')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('updatesPolicy')}</h2>
              <p>
                {t('mayUpdatePolicy')}
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

export default PrivacyPolicy;