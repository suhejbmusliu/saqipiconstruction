// src/sections/Contact.jsx
import { contactInfo } from "../data/content";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import Reveal from "../components/animations/Reveal";
import "../styles/sections/contact.css";

const Contact = () => {
  const { title, phone, email, address, image } = contactInfo;

  return (
    <section id="contact" className="contact">
      <div className="container contact__wrapper">
        
        {/* IMAGE --- reveal from left */}
        <Reveal direction="left">
          <div className="contact__image-box">
            <img src={image} alt="" className="contact__image" />
          </div>
        </Reveal>

        {/* CARD --- reveal from right */}
        <Reveal direction="right">
          <div className="contact__card">
            <h2 className="contact__title">{title}</h2>

            <div className="contact__row">
              <FiPhoneCall className="contact__icon" />
              <a href={`tel:${phone}`} className="contact__text">
                {phone}
              </a>
            </div>

            <div className="contact__row">
              <FiMail className="contact__icon" />
              <a href={`mailto:${email}`} className="contact__text">
                {email}
              </a>
            </div>

            <div className="contact__row">
              <FiMapPin className="contact__icon" />
              <p className="contact__text">{address}</p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
