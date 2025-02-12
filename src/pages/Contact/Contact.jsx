import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us-page">
      <section className="contact-us-section">
        <div className="contact-us-container">
          <h2 className="contact-us-title">Get in Touch</h2>
          <p className="contact-us-subtext">
            We'd love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.
          </p>

          <form className="contact-us-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" className="form-input" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" className="form-input" placeholder="Write your message" rows="5"></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
