
import React from "react";
import "../styles/Services.scss";

const Services = () => {
  return (
    <div className="services-wrapper" id="services">
      <div className="row">
        <div className="services-container">
          <div className="services-headline">What We Do</div>
          <div className="services-sub-headline">
            We believe in the lean startup principle that everything we build
            should be of value for the user. Therefore our work does not start
            with the question ’Can we build it?’ but rather with ‘Should we
            build it?’. We want the best possible product for you and your
            users.
            <br />
            <br />
            <div style={{ fontWeight: "bold" }}>
              This is why we are more than IT.
            </div>
          </div>
          <div className="services-boxes">
            <div className="services-box-wrapper">
              <div className="services-box">
                <div className="services-box-icon" />
                <div className="services-box-headline">Consulting</div>
                <div className="services-box-text">
                  <p>Agile Methods</p>
                  <p>Design Thinking</p>
                </div>
              </div>
              <div className="services-box">
                <div className="services-box-icon" />
                <div className="services-box-headline">Concept</div>
                <div className="services-box-text">
                  <p>Product Development</p>
                  <p>MVP Testing</p>
                </div>
              </div>
            </div>
            <div className="services-box">
              <div className="services-box-icon" />
              <div className="services-box-headline">Development</div>
              <div className="services-box-text">
                <p>Web & Mobile</p>
                <p>Fullstack Sofware Development</p>
                <p>Fullstack Sofware DevelopmentTracking & Analysis</p>
                <p>Salesforce</p>
              </div>
            </div>
            <div className="services-box">
              <div className="services-box-icon" />
              <div className="services-box-headline">Tech Stack</div>
              <div className="services-box-text">
                <p>
                  <b>Frontend:</b> React (Native), HTML, CSS, JS, jQuery
                </p>
                <p>
                  <b>Backend:</b> Ruby, Ruby on , Node.js
                </p>
                <p>
                  <b>Database:</b> MySQL, PostgreSQL
                </p>
                <p>
                  <b>Infrastructure:</b> AWS, Heroku
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
