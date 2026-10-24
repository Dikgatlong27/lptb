import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
  

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqypade");
  if (state.succeeded) {
      return <section className="contact-us-section"><div className="contact-us-container" role="status"><h2>Message sent!</h2><p>Thank you for getting in touch. We’ll respond to your enquiry as soon as we can.</p></div></section>;
  }

  return (
    <div className="contact-us-page">
      <section className="contact-us-section">
        <div className="contact-us-container">
          <div className="contact-page-layout">
            <aside className="contact-page-aside">
              <p className="section-eyebrow">LET’S CONNECT</p>
              <h2>A conversation is a good place to start.</h2>
              <p>Share your idea, where your business is now, and what you’d like to achieve.</p>
              <a href="mailto:info@lptbsolutions.co.za"><small>EMAIL</small>info@lptbsolutions.co.za ↗</a>
              <a href="tel:+27676228529"><small>CALL</small>+27 67 622 8529 ↗</a>
              <a href="https://wa.me/27676228529" target="_blank" rel="noopener noreferrer"><small>WHATSAPP</small>Start a conversation ↗</a>
            </aside>
            <div className="contact-page-form-area">
          <h2 className="contact-us-title">Get in Touch</h2>
          <p className="contact-us-subtext">
            Speak directly with LPTB Solutions about your website, app, platform, or partnership idea.
            We will be clear about what can be done now, what needs a phased approach, and where the right technical support is needed.
          </p>

          <form className="contact-us-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading"><p className="section-eyebrow">YOUR PROJECT</p><h2>Tell us what you have in mind.</h2></div>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" name='name' autoComplete="name" required minLength={2} className="form-input" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" name='email' autoComplete="email" required className="form-input" placeholder="Enter your email" />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" name='message' required minLength={20} className="form-input" placeholder="Tell us about your project (at least 20 characters)" rows="5"></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <div role="alert"><ValidationError errors={state.errors} /></div>
            <button type="submit" disabled={state.submitting} className="form-submit-btn">
              {state.submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
