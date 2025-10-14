import "../css/contact.css";
import { Tabtitle } from '../components/GeneralFunctions';
import React, { useEffect, useRef } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import Download from '../images/download.svg';
import resumefile from "../images/resumefile.pdf";

const Contact = () => {
  Tabtitle('Contact | JLB');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Show sending popup
    swal({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      buttons: false,
      closeOnClickOutside: false,
      timer: 1500,
    });

    // Optional debug: log form data
    const data = new FormData(form.current);
    console.log({
      from_name: data.get('from_name'),
      from_email: data.get('from_email'),
      message: data.get('message'),
    });

    try {
      const result = await emailjs.sendForm(
        'service_0goject',      // Your EmailJS service ID
        'template_56zonmj',     // Your EmailJS template ID
        form.current,
        'ESHXTij9cdezyf77R'     // Your EmailJS public key
      );

      // Reset form
      form.current.reset();

      swal("Success", "Your message has been sent!", "success");
      console.log('EmailJS result:', result.text);
    } catch (error) {
      console.error('EmailJS error:', error);
      swal("Error", "There was an issue sending your message. Please try again.", "error");
    }
  };

  return (
    <div className="container mb-5">
      <h1>Contact Me</h1>
      <div className="row gap-5 group-field mt-5">

        {/* Contact Form */}
        <div className="col-sm">
          <form ref={form} onSubmit={sendEmail}>

            <div className="mb-2">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input
                type="text"
                required
                name="from_name"      // ✅ Updated to match EmailJS template
                className="form-control border-dark"
                id="nameInput"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input
                type="email"
                required
                name="from_email"    // ✅ Must match EmailJS template
                className="form-control border-dark"
                id="emailInput"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="messageTextarea" className="form-label">Message</label>
              <textarea
                className="form-control border-dark"
                required
                id="messageTextarea"
                name="message"       // ✅ Must match EmailJS template
                rows="3"
              />
            </div>

            <button type="submit" className="btn btn-dark mt-2">Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col">
          <ol className="list-group">
            <li className="list-group-item border-0">
              <div className="fw-bold">Name</div>
              Joseph Lester S. Bacsarsa
            </li>
            <li className="list-group-item border-0">
              <div className="fw-bold">Address</div>
              Cagayan de Oro City
            </li>
            <li className="list-group-item border-0">
              <div className="fw-bold">Email</div>
              josephlesterbacs@gmail.com
            </li>
            <li className="list-group-item border-0">
              <div className="fw-bold">Contact number</div>
              0936-2760-758
            </li>
          </ol>

          <a href={resumefile} download className="d-inline-flex align-items-center mt-3">
            <img src={Download} alt="Download CV" className="download-image" />
            <strong className="download-font">Download CV</strong>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
