import './CTA.css'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-cta">
      <div className="contact-cta-container">
        <h2 className="contact-cta-title">Let's Build Something Useful.</h2>
        <p className="contact-cta-subtext">
          If you need a website, app, or custom system, speak directly with LPTB Solutions about
          scope, budget, timelines, and the best first step.
        </p>
        <button className="contact-cta-button btn-outline slide-bottom" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </div>
    </section>
  )
}

export default CTA
