import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="footer-section">
            <h4>Umrah DIY</h4>
            <p>
              Making Umrah planning simple and accessible for everyone. Plan your sacred journey with confidence.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div>
              <Link to="/umrah-visa-info">Visa Information</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <div>
              <Link to="/terms-and-conditions">Terms of Service</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <a href="#">Contact Us</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Follow us for updates and travel inspiration</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; 2025 Umrah DIY. All rights reserved. | Built with ❤️ for the Ummah
          </p>
        </div>
    </footer>
  );
};

export default Footer;