import React from 'react';
import './Contact.scss';
import { images } from '../../constants';
import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="app__wrapper">
      <h1 className="heading-1">Take A Coffee & Chat With Me</h1>

      <div className="contact">
        <div className="contact__card">
          <img src={images.phone} alt="phone" className="contact__card--phone" />
          <a href="tel: +37066270274" className="p-text">
            +370 66270274
          </a>
        </div>

        <div className="contact__card">
          <img src={images.email} alt="email" className="contact__card--email" />
          <a href="mailto: lukjanov.igr@gmail.com" className="p-text">
            lukjanov.igr@gmail.com
          </a>
        </div>
      </div>

      <form className="contact__form" autoComplete="false" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required="" />
        <div>
          <textarea placeholder="Your Message" name="message" required></textarea>
        </div>
        <button type="submit" className="contact__form--submit">
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;
