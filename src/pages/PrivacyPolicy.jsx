import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <h1 className="page-title">Privacy Policy</h1>
            <p className="page-subtitle">Last updated: August 30, 2025</p>
          </div>

          <div>
            <section className="content-section">
              <p>
                We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our website.
              </p>
            </section>

            <section className="content-section">
              <h2>Information We Collect</h2>
              <p>
                We may collect the following information when you use our website:
              </p>
              <ul>
                <li>Email address – when you register your interest or subscribe to updates</li>
                <li>Message or feedback – any optional information you provide through the interest form</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul>
                <li>To send updates about our Umrah DIY platform</li>
                <li>To notify you of launch progress, feature announcements, and other related information</li>
                <li>To understand user interest and improve our offerings</li>
              </ul>
              <p>
                We do not sell or rent your personal information to third parties. Your data will never be used for third-party marketing.
              </p>
            </section>

            <section className="content-section">
              <h2>Data Storage and Security</h2>
              <ul>
                <li>Your information may be stored and processed in secure third-party systems (e.g., HubSpot)</li>
                <li>We implement reasonable administrative, technical, and physical safeguards to protect your data against unauthorized access or disclosure</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Data Retention and Deletion</h2>
              <ul>
                <li>We retain your information only as long as necessary for the purposes stated above</li>
                <li>You can request deletion of your personal data at any time by contacting us at malik@bymalik.dev</li>
              </ul>
            </section>

            <section className="content-section">
              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate or outdated information</li>
                <li>Request deletion of your data</li>
              </ul>
              <p>
                To make a request, contact us at malik@bymalik.dev
              </p>
            </section>

            <section className="content-section">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;