import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NewFooter from '../components/NewFooter';
import InterestForm from '../components/InterestForm';

const TermsAndConditions = () => {
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
              Back to Home
            </Link>
            <h1 className="page-title">Terms and Conditions</h1>
            <p className="page-subtitle">Last updated: August 30, 2025</p>
          </div>

          <div>
            <section className="content-section">
              <p>
                These Terms and Conditions govern your use of our website. By accessing or using this site, you agree to be bound by these terms.
              </p>
            </section>

            <section className="content-section">
              <h2>Purpose of the Website</h2>
              <p>
                This website is a pre-launch platform for our upcoming DIY Umrah planning service, which will enable users to book flights, hotels, and local transportation in a single, agent-free checkout experience.
              </p>
            </section>

            <section className="content-section">
              <h2>Use of Collected Data</h2>
              <ul>
                <li>By submitting your email or a message through the site, you consent to receive updates and marketing communications from us.</li>
                <li>You may unsubscribe at any time by following the opt-out link in our emails or contacting us directly.</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>User Obligations</h2>
              <p>
                When using our website, you agree not to:
              </p>
              <ul>
                <li>Provide false, misleading, or incomplete information</li>
                <li>Attempt unauthorized access to our systems or data</li>
                <li>Use the site for any unlawful, malicious, or harmful purposes</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Intellectual Property</h2>
              <ul>
                <li>All content, branding, design elements, and materials on this site are the property of us or our licensors</li>
                <li>You may not reproduce, copy, distribute, or use any part of this content without prior written permission</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Limitation of Liability</h2>
              <ul>
                <li>This website is provided for informational and interest-gathering purposes only</li>
                <li>We are not liable for any direct or indirect loss, damage, or inconvenience resulting from your use of or reliance on the content of this site</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of New Zealand.
              </p>
            </section>

            <section className="content-section">
              <h2>Contact</h2>
              <p>
                If you have any questions or concerns regarding these Terms, please contact:
              </p>
              <p>
                <strong>Email:</strong> malik@bymalik.dev
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