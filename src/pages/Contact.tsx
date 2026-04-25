export function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <div className="subtitle-label">GET IN TOUCH</div>
          <h1 className="hero-title">
            Contact Us For <br/>
            <em>Your Any Help & Needs</em>
          </h1>
          <div className="divider-line center-line"></div>
          <p className="contact-intro">
            We value your feedback and inquiries. Whether you have question about our products, need prices, or want to explore potential partnerships, we're here to assist you. Please feel free to reach out to us via below mentioned phone number.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Form & Info */}
          <div className="contact-form-side">
            <div className="contact-info-blocks">
              <div className="info-block">
                <h4 className="info-heading">Phone Number</h4>
                <p>+91 7990933686</p>
                <p>+91 9426203410</p>
              </div>
              <div className="info-block">
                <h4 className="info-heading">Location</h4>
                <p>
                  Office No 9-10, Plot No 17-18, Shahil Appt.,<br/>
                  Opp GMCB Bank, Gandhidham (Kutch) 370201, India.
                </p>
              </div>
            </div>

            <form className="elegant-form">
              <h3 className="form-title">Get In Touch</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" name="firstName" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" name="lastName" className="form-input" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-input" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Type your message</label>
                <textarea id="message" name="message" rows={4} className="form-input"></textarea>
              </div>
              
              <button type="submit" className="btn-solid submit-btn">Send Message</button>
            </form>
          </div>

          {/* Right Column: Google Map */}
          <div className="contact-map-side">
            <div className="map-wrapper">
              <iframe 
                src="https://maps.google.com/maps?q=KESRI%20SALT%20WORKS%20|%20JAIN%20SALT&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
