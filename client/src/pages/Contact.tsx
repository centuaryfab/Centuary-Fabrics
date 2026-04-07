export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .contact-root {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          background-color: #faf9f7;
          color: #1a1a1a;
          min-height: 100vh;
          padding: 80px 0 120px;
        }

        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .contact-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .contact-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #b89a5e;
          margin-bottom: 16px;
        }

        .contact-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 5vw, 3.8rem);
          font-weight: 300;
          letter-spacing: 0.02em;
          line-height: 1.1;
          color: #111;
          margin: 0 0 24px;
        }

        .contact-title em {
          font-style: italic;
          color: #3a3a3a;
        }

        .gold-rule {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b89a5e, transparent);
          margin: 0 auto 20px;
        }

        .contact-subtitle {
          font-size: 14px;
          color: #7a7a7a;
          letter-spacing: 0.04em;
          font-weight: 300;
        }

        /* Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .contact-inner { padding: 0 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        /* Info Cards */
        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 2px;
          padding: 24px 28px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .info-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.07);
          transform: translateY(-2px);
        }

        .info-icon {
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
          opacity: 0.8;
        }

        .info-content {}

        .info-label {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b89a5e;
          margin-bottom: 6px;
        }

        .info-text {
          font-size: 14px;
          color: #333;
          line-height: 1.7;
          font-weight: 300;
        }

        .info-text a {
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #e8e2d9;
          padding-bottom: 1px;
          transition: border-color 0.2s, color 0.2s;
        }

        .info-text a:hover {
          color: #b89a5e;
          border-color: #b89a5e;
        }

        /* Form */
        .form-card {
          background: #fff;
          border: 1px solid #e8e2d9;
          border-radius: 2px;
          padding: 40px 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        }

        .form-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem;
          font-weight: 400;
          color: #111;
          margin: 0 0 6px;
          letter-spacing: 0.02em;
        }

        .form-subheading {
          font-size: 12px;
          color: #aaa;
          letter-spacing: 0.08em;
          margin-bottom: 28px;
          font-weight: 300;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          border: none;
          border-bottom: 1px solid #ddd;
          background: transparent;
          padding: 12px 0;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
          border-radius: 0;
          -webkit-appearance: none;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #bbb;
          letter-spacing: 0.04em;
          font-size: 13px;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-bottom-color: #b89a5e;
        }

        .form-textarea {
          resize: none;
          height: 100px;
          display: block;
        }

        .form-btn {
          width: 100%;
          margin-top: 28px;
          background: #1a1a1a;
          color: #fff;
          border: 1px solid #1a1a1a;
          padding: 15px 24px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 0;
          transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }

        .form-btn:hover {
          background: #b89a5e;
          border-color: #b89a5e;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(184,154,94,0.25);
        }

        .form-btn:active {
          transform: translateY(0);
        }

        /* Divider */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 72px 0 40px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #e8e2d9;
        }

        .divider-label {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b89a5e;
          white-space: nowrap;
        }

        /* Map */
        .map-wrapper {
          width: 100%;
          height: 400px;
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid #e8e2d9;
          box-shadow: 0 8px 40px rgba(0,0,0,0.07);
          transition: box-shadow 0.3s ease;
        }

        .map-wrapper:hover {
          box-shadow: 0 12px 48px rgba(0,0,0,0.11);
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-inner">

          {/* ── Header ── */}
          <header className="contact-header">
            <p className="contact-label">Get in Touch</p>
            <h1 className="contact-title">
              Contact <em>Centuary Fab</em>
            </h1>
            <div className="gold-rule" />
            <p className="contact-subtitle">
              Reach out for fabric enquiries, bulk orders &amp; trade support.
            </p>
          </header>

          {/* ── Two-column grid ── */}
          <div className="contact-grid">

            {/* Left — Info Cards */}
            <div className="info-stack">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div className="info-content">
                  <p className="info-label">Address</p>
                  <p className="info-text">
                    Centuary Fab<br />
                    5/1, Natrayan Kovil St<br />
                    Water Office Road<br />
                    Erode, Tamil Nadu — 638003
                  </p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📧</span>
                <div className="info-content">
                  <p className="info-label">Email</p>
                  <p className="info-text">
                    <a href="mailto:centuaryfab@gmail.com">centuaryfab@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📞</span>
                <div className="info-content">
                  <p className="info-label">Phone</p>
                  <p className="info-text">
                    <a href="tel:+918148008588">+91 81480 08588</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">⏰</span>
                <div className="info-content">
                  <p className="info-label">Business Hours</p>
                  <p className="info-text">9:30 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="form-card">
              <h2 className="form-heading">Send a Message</h2>
              <p className="form-subheading">We respond within one business day.</p>

              <form
                action="https://formspree.io/f/mqegagqw"
                method="POST"
              >
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button type="submit" className="form-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* ── Map ── */}
          <div className="section-divider">
            <div className="divider-line" />
            <span className="divider-label">Our Location</span>
            <div className="divider-line" />
          </div>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4808.179379981675!2d77.71786827588647!3d11.353753188832318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f33bfad08f1%3A0xeccba746c62c537a!2scentuaryfab!5e1!3m2!1sen!2sin!4v1774526187858!5m2!1sen!2sin"
              loading="lazy"
              title="Centuary Fab Location"
            />
          </div>

        </div>
      </div>
    </>
  );
}