import { Link } from 'react-router-dom';

const UmrahVisaInfo = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-card">
          <div className="page-header">
            <Link to="/" className="back-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <h1 className="page-title">Umrah Visa Information</h1>
            <p className="page-subtitle">Everything you need to know about obtaining an Umrah visa</p>
          </div>

          <div>
            <section className="content-section">
              <h2>What is an Umrah Visa?</h2>
              <p>
                An Umrah visa is a special type of visa issued by the Kingdom of Saudi Arabia that allows Muslims to visit the holy cities of Mecca and Medina for the purpose of performing Umrah, the Islamic pilgrimage that can be undertaken at any time of the year.
              </p>
            </section>

            <section className="content-section">
              <h2>Types of Umrah Visas</h2>
              
              <div className="highlight-box green">
                <h3>Tourist Visa (eVisa)</h3>
                <ul>
                  <li>Valid for tourism and Umrah purposes</li>
                  <li>Multiple entry visa valid for 1 year</li>
                  <li>Stay up to 90 days per visit</li>
                  <li>Can be obtained online</li>
                  <li>Processing time: 2-5 business days</li>
                </ul>
              </div>

              <div className="highlight-box blue">
                <h3>Umrah Visa (Traditional)</h3>
                <ul>
                  <li>Specifically for Umrah pilgrimage</li>
                  <li>Single or multiple entry options</li>
                  <li>Valid for 30-90 days</li>
                  <li>Must be obtained through licensed travel agents</li>
                  <li>Processing time: 5-15 business days</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Eligibility Requirements</h2>
              <p>
                To be eligible for an Umrah visa, you must:
              </p>
              <ul>
                <li>Be a Muslim (may require proof such as a certificate from a mosque)</li>
                <li>Have a passport valid for at least 6 months from travel date</li>
                <li>Be in good health with required vaccinations</li>
                <li>Have proof of accommodation in Saudi Arabia</li>
                <li>Have return flight tickets</li>
                <li>Provide proof of financial means</li>
                <li>Women under 45 must be accompanied by a male guardian (mahram)</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Required Documents</h2>
              <div className="highlight-box gray">
                <ul>
                  <li>Valid passport with at least 6 months validity</li>
                  <li>Completed visa application form</li>
                  <li>Recent passport-sized photographs</li>
                  <li>Proof of Muslim faith (if required)</li>
                  <li>Vaccination certificate (Meningitis ACWY, COVID-19)</li>
                  <li>Return flight itinerary</li>
                  <li>Hotel booking confirmation</li>
                  <li>Bank statements or proof of financial means</li>
                  <li>Travel insurance (recommended)</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Processing Times</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                <div className="highlight-box green">
                  <h3>Tourist eVisa</h3>
                  <p style={{marginBottom: 0}}>2-5 business days (online application)</p>
                </div>
                <div className="highlight-box blue">
                  <h3>Traditional Umrah Visa</h3>
                  <p style={{marginBottom: 0}}>5-15 business days (through travel agent)</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h2>Vaccination Requirements</h2>
              <div className="highlight-box yellow">
                <h3>⚠️ Important Health Requirements</h3>
                <ul>
                  <li><strong>Meningitis ACWY:</strong> Required for all pilgrims, must be received at least 10 days before travel</li>
                  <li><strong>COVID-19:</strong> Vaccination requirements may vary based on current health guidelines</li>
                  <li><strong>Yellow Fever:</strong> Required if traveling from or through endemic areas</li>
                  <li><strong>Seasonal Flu:</strong> Recommended, especially during Hajj season</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Application Process</h2>
              <ul className="step-list">
                <li className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Choose Visa Type</h4>
                    <p>Decide between Tourist eVisa or traditional Umrah visa</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Prepare Documents</h4>
                    <p>Gather all required documents and ensure vaccinations are up to date</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Apply online (eVisa) or through a licensed travel agent</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Wait for Processing</h4>
                    <p>Processing times vary by visa type</p>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Receive Visa</h4>
                    <p>Print your visa and keep it with your passport</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Official Resources</h2>
              <div className="highlight-box gray">
                <p>
                  For the most up-to-date information and to apply for visas, visit these official websites:
                </p>
                <ul>
                  <li><strong>Saudi eVisa Portal:</strong> <a href="https://visa.visitsaudi.com" style={{color: '#3b82f6', textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer">visa.visitsaudi.com</a></li>
                  <li><strong>Ministry of Hajj and Umrah:</strong> <a href="https://www.haj.gov.sa" style={{color: '#3b82f6', textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer">haj.gov.sa</a></li>
                  <li><strong>Saudi Arabian Embassy:</strong> Contact your local Saudi embassy or consulate</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <h2>Important Notes</h2>
              <div className="highlight-box red">
                <ul>
                  <li>Visa requirements and processes can change frequently</li>
                  <li>Always verify current requirements with official Saudi government sources</li>
                  <li>Allow sufficient time for visa processing before your travel date</li>
                  <li>Keep digital and physical copies of all your travel documents</li>
                  <li>Consider travel insurance for your trip</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmrahVisaInfo;