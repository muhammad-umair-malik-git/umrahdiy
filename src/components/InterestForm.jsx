import { useState } from 'react';

const InterestForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) {
      alert('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);

    const portalId = '442080573';
    const formGuid = '88204378-cb8e-4e45-965e-2fb6c9aaa3ac';
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const payload = {
      fields: [
        {
          name: "email",
          value: email
        },
        {
          name: "message",
          value: message.trim()
        }
      ].filter(field => field.value), // Only include non-empty fields
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail('');
        setMessage('');
        
        // Auto-hide success message after 5 seconds, then close modal
        setTimeout(() => {
          setShowSuccess(false);
          setTimeout(() => {
            onClose();
          }, 500);
        }, 5000);
      } else {
        console.error('HubSpot submission failed:', await response.text());
        alert("Oops! Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="interest-form" className="modal" style={{display: isOpen ? 'flex' : 'none'}}>
      <div className="modal-content">
        {/* Success Message */}
        {showSuccess && (
          <div 
            role="alert"
            className="mb-4 p-4 bg-green-50 border border-green-300 rounded-lg"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-green-800 text-sm font-medium">
                  ✨ Thank you! Your interest has been recorded.
                </p>
                <p className="text-green-800 text-sm mt-1">
                  We'll keep you updated on our launch progress, inshaAllah.
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="modal-header">
          <h2>Register Your Interest</h2>
          <button
            onClick={onClose}
            className="modal-close"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Help us make Umrah planning easier for everyone. Register your interest to stay in the loop. 
          If there's enough interest, inshaAllah we'll launch the full version soon.
        </p>
        
        <div className="form-group mb-6">
          <label htmlFor="interest-email">Email Address</label>
          <input
            type="email"
            id="interest-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </div>
        
        <div className="form-group" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <label htmlFor="interest-message">Your message (optional)</label>
          <textarea
            id="interest-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any feedback or thoughts? We'd love to hear from you."
            disabled={isSubmitting}
            rows={4}
            style={{
              resize: 'vertical',
              minHeight: '100px',
              fontFamily: 'inherit',
              fontSize: 'var(--font-size-base)',
              lineHeight: '1.5'
            }}
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="interest-submit-btn"
          style={{
            background: isSubmitting 
              ? 'var(--color-gray-400)' 
              : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-charcoal) 100%)',
            color: 'white',
            border: 'none',
            padding: 'var(--spacing-lg) var(--spacing-2xl)',
            borderRadius: '16px',
            fontSize: 'var(--font-size-base)',
            fontWeight: '700',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all var(--transition-base)',
            fontFamily: 'inherit',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            opacity: isSubmitting ? 0.7 : 1,
            transform: isSubmitting ? 'none' : 'translateY(0)',
            boxShadow: isSubmitting 
              ? 'none' 
              : '0 4px 15px rgba(26, 26, 26, 0.2)',
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(26, 26, 26, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(26, 26, 26, 0.2)';
            }
          }}
        >
          {isSubmitting && (
            <span 
              style={{
                display: 'inline-block',
                width: '16px',
                height: '16px',
                border: '2px solid transparent',
                borderTop: '2px solid currentColor',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginRight: '8px'
              }}
            />
          )}
          {isSubmitting ? 'Submitting...' : 'Register Interest'}
        </button>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .form-group textarea {
          padding: var(--spacing-md) var(--spacing-lg);
          border: 2px solid var(--color-gray-200);
          border-radius: 16px;
          background: white;
          transition: all var(--transition-base);
          width: 100%;
        }
        
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
          transform: scale(1.02);
        }
        
        .form-group textarea:hover:not(:focus) {
          border-color: var(--color-gray-300);
        }
        
        .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .modal-content {
            margin: var(--spacing-md);
            padding: var(--spacing-lg);
            max-width: calc(100vw - 2rem);
          }
          
          .interest-submit-btn {
            padding: var(--spacing-md) var(--spacing-lg) !important;
            font-size: var(--font-size-sm) !important;
          }
          
          .form-group textarea {
            min-height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default InterestForm;