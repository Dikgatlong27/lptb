import './CTA.css'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-cta">
      <div className="contact-cta-container">
        <div className="cta-copy">
        <p className="section-eyebrow">YOUR NEXT CHAPTER</p>
        <h2 className="contact-cta-title">Let's Build Something Useful.</h2>
        <p className="contact-cta-subtext">
          If you need a website, app, or custom system, speak directly with LPTB Solutions about
          scope, budget, timelines, and the best first step.
        </p>
        </div>
        <button className="contact-cta-button btn-outline slide-bottom" onClick={() => navigate("/contact")}>
          Let’s talk about it ↗
        </button>
      </div>
    </section>
  )
}

export default CTA
