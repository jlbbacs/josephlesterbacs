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
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    swal({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      buttons: false,
      closeOnClickOutside: false,
      timer: 1500,
    });

    emailjs.sendForm(
      'service_0goject',
      'template_56zonmj',
      form.current,
      'ESHXTij9cdezyf77R'
    ).then((result) => {
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";

      swal("Success", "Your message has been sent!", "success");
    }, (error) => {
      console.error(error.text);
      swal("Error", "There was an issue sending your message. Please try again.", "error");
    });
  };

  return (
    <div className="container mb-5">
      <h1>Contact Me</h1>
      <div className="row gap-5 group-field mt-5">
        <div className="col-sm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-2">
              <label htmlFor="nameInput" className="form-label">Name</label>
              <input type="text" required name="to_name" ref={name} className="form-control border-dark" id="nameInput" />
            </div>

            <div className="mb-2">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input type="email" required name="from_email" ref={email} className="form-control border-dark" id="emailInput" />
            </div>

            <div className="mb-2">
              <label htmlFor="messageTextarea" className="form-label">Message</label>
              <textarea className="form-control border-dark" required ref={message} id="messageTextarea" name="message" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-dark mt-2">Submit</button>
          </form>
        </div>

        <div className="col">
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start border-0">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Name</div>
                Joseph Lester S. Bacsarsa
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start border-0">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Address</div>
                Cagayan de Oro City
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start border-0">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Email</div>
                josephlesterbacs@gmail.com
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between align-items-start border-0">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Contact number</div>
                0936-2760-758
              </div>
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
