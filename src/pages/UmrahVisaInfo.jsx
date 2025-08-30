import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';
import InterestForm from '../components/InterestForm';

const UmrahVisaInfo = () => {
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
            <h1 className="page-title">{t('umrahVisaInfo')}</h1>
            <p className="page-subtitle">{t('everythingVisaKnow')}</p>
          </div>

          <div>
            <section className="content-section">
              <h2>{t('whatIsUmrahVisa')}</h2>
              <p>
                {t('umrahVisaDescription')}
              </p>
            </section>

            <section className="content-section">
              <h2>{t('typesOfUmrahVisas')}</h2>
              
              <div className="highlight-box green">
                <h3>{t('touristVisa')}</h3>
                <ul>
                  <li>{t('validForTourism')}</li>
                  <li>{t('multipleEntry')}</li>
                  <li>{t('stayUpTo90Days')}</li>
                  <li>{t('obtainOnline')}</li>
                  <li>{t('processingTime2to5')}</li>
                </ul>
              </div>

              <div className="highlight-box blue">
                <h3>{t('traditionalVisa')}</h3>
                <ul>
                  <li>{t('specificForUmrah')}</li>
                  <li>{t('singleOrMultiple')}</li>
                  <li>{t('valid30to90')}</li>
                  <li>{t('throughTravelAgents')}</li>
                  <li>{t('processingTime5to15')}</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>{t('eligibilityRequirements')}</h2>
              <p>
                {t('eligibleFor')}
              </p>
              <ul>
                <li>{t('beMuslim')}</li>
                <li>{t('validPassport')}</li>
                <li>{t('goodHealth')}</li>
                <li>{t('proofAccommodation')}</li>
                <li>{t('returnTickets')}</li>
                <li>{t('proofFinancial')}</li>
                <li>{t('womenUnder45')}</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('requiredDocuments')}</h2>
              <div className="highlight-box gray">
                <ul>
                  <li>{t('validPassport')}</li>
                  <li>{t('completedApplication')}</li>
                  <li>{t('recentPhotos')}</li>
                  <li>{t('proofMuslim')}</li>
                  <li>{t('vaccinationCert')}</li>
                  <li>{t('flightItinerary')}</li>
                  <li>{t('hotelBooking')}</li>
                  <li>{t('bankStatements')}</li>
                  <li>{t('travelInsurance')}</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>{t('processingTimes')}</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                <div className="highlight-box green">
                  <h3>{t('touristVisa')}</h3>
                  <p style={{marginBottom: 0}}>{t('businessDays2to5')}</p>
                </div>
                <div className="highlight-box blue">
                  <h3>{t('traditionalVisa')}</h3>
                  <p style={{marginBottom: 0}}>{t('businessDays5to15')}</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>{t('vaccinationRequirements')}</h2>
              <div className="highlight-box yellow">
                <h3>{t('importantHealthReq')}</h3>
                <ul>
                  <li><strong>Meningitis ACWY:</strong> {t('meningitisReq')}</li>
                  <li><strong>COVID-19:</strong> {t('covidReq')}</li>
                  <li><strong>Yellow Fever:</strong> {t('yellowFeverReq')}</li>
                  <li><strong>Seasonal Flu:</strong> {t('fluRecommended')}</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>{t('applicationProcess')}</h2>
              <ul className="step-list">
                <li className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>{t('chooseVisaType')}</h4>
                    <p>{t('decideVisa')}</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>{t('prepareDocuments')}</h4>
                    <p>{t('gatherDocs')}</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>{t('submitApplication')}</h4>
                    <p>{t('applyOnline')}</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>{t('waitProcessing')}</h4>
                    <p>{t('processingVary')}</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>{t('receiveVisa')}</h4>
                    <p>{t('printVisa')}</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="content-section">
              <h2>{t('officialResources')}</h2>
              <div className="highlight-box gray">
                <p>
                  {t('upToDateInfo')}
                </p>
                <ul>
                  <li><strong>{t('saudiEvisaPortal')}</strong> <a href="https://visa.visitsaudi.com" style={{color: '#3b82f6', textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer">visa.visitsaudi.com</a></li>
                  <li><strong>{t('ministryHajj')}</strong> <a href="https://www.haj.gov.sa" style={{color: '#3b82f6', textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer">haj.gov.sa</a></li>
                  <li><strong>{t('saudiEmbassy')}</strong></li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>{t('importantNotes')}</h2>
              <div className="highlight-box red">
                <ul>
                  <li>{t('visaRequirementsChange')}</li>
                  <li>{t('verifyCurrentReq')}</li>
                  <li>{t('allowSufficientTime')}</li>
                  <li>{t('keepCopies')}</li>
                  <li>{t('considerInsurance')}</li>
                </ul>
              </div>
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

export default UmrahVisaInfo;