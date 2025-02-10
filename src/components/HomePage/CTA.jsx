import './CTA.css'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
    const navigate = useNavigate();

    return (
        <section className="contact-cta">
      <div className="contact-cta-container">
        <h2 className="contact-cta-title">Let's Build Something Amazing!</h2>
        <p className="contact-cta-subtext">
          Whether you need a website, mobile app, or custom software solution, LPTB Solutions is here to help.  
          Get in touch with us today and let’s bring your vision to life!
        </p>
        <button className="contact-cta-button btn-outline" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>
    </section>
    )
}

export default CTA
