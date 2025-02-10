import React from "react";
import "./Clients.css";

const testimonials = [
  {
    name: "Abraham Mofokeng",
    position: "Founder, NNGA Holdings",
    feedback: "LPTB Solutions played a crucial role in launching NNGA Holdings. From business registration to branding, logo design, and essential certifications, they provided a strong foundation for our company to grow. Their expertise made the entire process seamless and efficient.",
    image: "NNGA logo 4.png",
  },
  {
    name: "Tlotlo Ngwenya",
    position: "Founder & Language Practitioner, Twinkle Dells Florist | The Buzz Mic | Lebone Consultants",
    feedback: "LPTB Solutions has been instrumental in bringing my ideas to life. They developed a custom web app for Twinkle Dells and designed all the branding elements for my businesses. Their graphic design work, from social media content to business logos, has helped elevate my brand identity.",
    image: "tlotlo.svg",
  },
  {
    name: "Nkululeko Maphanga",
    position: "CEO & Founder, The Chairman Fortaleza de Sol & Fortress Restaurant",
    feedback: "The LPTB Solutions team built professional web platforms for both of my restaurants, enhancing our online presence and customer engagement. Their ability to deliver high-quality, tailored solutions has been invaluable to our business growth.",
    image: "nkuli.svg",
  },
];

const Clients = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtext">Hear from businesses that trust LPTB Solutions.</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
