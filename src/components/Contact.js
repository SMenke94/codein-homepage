import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <div className="cotact-wrapper" id="contact">
      <div className="row">
        <div className="contact-headline">
          Let's
          <div style={{ color: "#000", padding: "0 10px" }}>
            {" "}
            get in touch
          </div>
        </div>
        <div className="contact-headline">
          Let's
          <div style={{ color: "#000", padding: "0 10px" }}> meet up</div>
        </div>
        <div className="contact-headline">
          Let's<div style={{ color: "#000", padding: "0 10px" }}> build </div>
        </div>
        <a href="mailto:info@web-development.berlin">
          <div class="button">
            <span>Say Hi</span>
            <svg>
              <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
              <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
            </svg>
          </div>
        </a>
        <div className="contact-info-box">
          <div className="contact-address">
            <div className="contact-box-headline">Office</div>
            <div className="contact-box-text">
              <p>CodeIn UG (haftungsbeschränkt)</p>
              <p>Potsdamer Str. 87</p>
              <p>10785 Berlin</p>
              <p>Germany</p>
            </div>
          </div>
          <div className="contact-phone">
            <div className="contact-box-headline">Phone</div>
            <div className="contact-box-text">+49 173 677 27 81</div>
          </div>
          <div className="contact-email">
            <div className="contact-box-headline">Email</div>
            <div className="contact-box-text">
              info@web-development.berlin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;