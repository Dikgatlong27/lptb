import React from 'react';
import './Services.css'; // Add your styles here

const Services = () => {
  return (
    <div className="services-container">
       <section className="services-section">

      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtext">We offer custom web and mobile development solutions to bring your ideas to life, along with comprehensive business and digital transformation strategies.</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🌐</div>
            <h3 className="service-title">Custom Software Development</h3>
            <p className="service-description">
              Build modern, scalable web apps and cross-platform mobile apps tailored to your needs.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3 className="service-title">Branding & UI/UX Design</h3>
            <p className="service-description">
              We craft stunning logos, intuitive UI/UX designs, and prototypes to represent your brand.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3 className="service-title">SEO & Digital Marketing</h3>
            <p className="service-description">
              Enhance your online presence with SEO optimization and digital marketing strategies.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔒</div>
            <h3 className="service-title">Cloud Solutions</h3>
            <p className="service-description">
              Scalable and secure cloud solutions to manage your data and deploy applications seamlessly.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3 className="service-title">AI & Automation</h3>
            <p className="service-description">
              Leverage AI-driven solutions, automation, and predictive analytics to improve efficiency.
            </p>
          </div>

         
        </div>
      </div>
    </section>

      <section className="services-lists services-section">
        <div className="services-container">

        <h2 className='services-title'>Enterprise & Advanced Tech</h2>
        <p className="services-subtext">Leverage advanced technologies to streamline your business operations.</p>

        <div className="services-grid">
          <div className="service-card">
            <h3>ERP</h3>
            <p>Enterprise Resource Planning solutions for handling finance, HR, inventory, and operations.</p>
          </div>

          <div className="service-card">
            <h3>CRM</h3>
            <p>Custom CRM solutions to improve sales, customer relationships, and support management.</p>
          </div>

          <div className="service-card">
            <h3>Management Systems</h3>
            <p>Custom-built systems for business operations like project management and logistics.</p>
          </div>


        </div> 
        
        
        <button className="services-cta-btn">Empower your business with smart technology!</button>
       </div>
      </section>
    </div>
  );
};

export default Services;
