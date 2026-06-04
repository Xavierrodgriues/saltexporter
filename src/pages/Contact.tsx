import { useState } from 'react';
import { motion } from 'framer-motion';
import { SplitTextReveal } from '../components/animations/SplitTextReveal';
import { FadeIn, AnimatedDivider } from '../components/animations/AnimationPrimitives';
import { SeoHead } from '../components/SeoHead';
import { buildOrganizationSchema, buildBreadcrumbSchema, buildWebPageSchema } from '../seo/schemas';
import { SITE_CONFIG } from '../seo/config';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Send to info@saltexporter.com and cc info@avintra.in
    const payload = {
      ...data,
      _cc: "info@avintra.in",
      _subject: "New Contact Form Submission - Jain Salt",
      _template: "table",
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@saltexporter.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        
        const whatsappMessage = `*New Contact Inquiry*\n\n*Name:* ${data.firstName} ${data.lastName}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Message:*\n${data.message}`;
        const url = `https://wa.me/917990933686?text=${encodeURIComponent(whatsappMessage)}`;
        setWhatsappLink(url);
        window.open(url, '_blank');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-page">
      <SeoHead
        title="Contact Jain Salt Traders | Salt Exporter India | Get a Quote | Avintra"
        description="Contact Jain Salt Traders (Avintra International) for bulk salt inquiries. Office in Gandhidham, Kutch, Gujarat. Phone: +91 79909 33686. Email: info@saltexporter.com. FSSAI & ISO certified salt exporter."
        canonical="/contact"
        keywords="contact salt manufacturer India, salt exporter inquiry, bulk salt quote, Jain Salt contact, Avintra International, Gandhidham salt company, Kutch salt exporter"
        schema={[
          buildOrganizationSchema(),
          buildWebPageSchema({
            name: 'Contact Jain Salt Traders — Salt Manufacturer & Exporter India',
            description: 'Contact us for bulk salt inquiries. Gandhidham, Kutch, Gujarat.',
            url: '/contact',
          }),
          buildBreadcrumbSchema([
            { name: 'Home', url: `${SITE_CONFIG.domain}/` },
            { name: 'Contact', url: `${SITE_CONFIG.domain}/contact` },
          ]),
        ]}
      />
      <div className="container">
        <div className="contact-header">
          <FadeIn delay={0.1}><div className="subtitle-label">GET IN TOUCH</div></FadeIn>
          <SplitTextReveal text="Contact Us For Your Any Help & Needs" as="h1" className="hero-title" delay={0.08} />
          <AnimatedDivider center delay={0.5} />
          <FadeIn delay={0.4}>
            <p className="contact-intro">
              We value your feedback and inquiries. Whether you have question about our products, need prices, or want to explore potential partnerships, we're here to assist you. Please feel free to reach out to us via the contact details below.
            </p>
          </FadeIn>
        </div>

        <div className="contact-grid">
          {/* Left Column: Form & Info */}
          <FadeIn delay={0.2} className="contact-form-side">
            <div className="contact-info-blocks">
              <div className="info-block">
                <h4 className="info-heading">Phone Number</h4>
                <p><strong>Export &amp; Domestic:</strong> +91 7990933686</p>
                <p><strong>Only Domestic:</strong> +91 9426203410</p>
              </div>
              <div className="info-block">
                <h4 className="info-heading">Email Addresses</h4>
                <p>info@saltexporter.com</p>
                <p>info@avintra.in</p>
              </div>
              <div className="info-block">
                <h4 className="info-heading">Location</h4>
                <p>
                  <strong>Factory:</strong> Plot No 6-7, Survey No-6, Village Chudva, Taluka Gandhidham,<br />
                  Dist. Kutch - 370240, Gujarat
                </p>
                <p>
                  <strong>Factory Address 1:</strong> 6779+GQ3, Chirai Moti, Gujarat - 370140
                </p>
              </div>
            </div>

            <motion.form
              className="elegant-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <h3 className="form-title">Get In Touch</h3>

              {submitStatus === 'success' && (
                <div style={{ padding: '1rem', backgroundColor: '#e6fffa', color: '#2c7a7b', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>Thank you! Your message has been sent successfully. We will get back to you soon.</p>
                  {whatsappLink && (
                    <p style={{ margin: 0, fontSize: '0.9em' }}>
                      If WhatsApp didn't open automatically, <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#2b6cb0', textDecoration: 'underline' }}>click here to send your message via WhatsApp</a>.
                    </p>
                  )}
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ padding: '1rem', backgroundColor: '#fff5f5', color: '#c53030', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  Oops! Something went wrong. Please try again or contact us directly via email.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" name="firstName" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" name="lastName" required className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" required className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Type your message</label>
                <textarea id="message" name="message" required rows={4} className="form-input"></textarea>
              </div>
              <button type="submit" className="btn-solid submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </FadeIn>

          {/* Right Column: Google Map */}
          <motion.div
            className="contact-map-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=KESRI%20SALT%20WORKS%20|%20JAIN%20SALT&t=&z=10&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
