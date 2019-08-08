
import React from "react";
import "../styles/Services.scss";

const Services = () => {
  return (
    <div className="services-wrapper" id="services">
      <div className="row">
        <div className="services-container">
          <div className="services-headline">What We Do</div>
          <div className="services-sub-headline">
            {/* We believe in the <b>lean startup principle</b> that everything we build
            should be of value for the user. Therefore our work does not start
            with the question ’Can we build it?’ but rather with ‘Should we
            build it?’. We want the <b>best possible product for you and your
            users.</b>
            <br />
            <br /> */}
            This is why we are more than IT.
          </div>
          <div className="services-boxes">

            <div className="service-box">
              <div className="service-box-main">
                <div className="service-box-icon">
                  <i class="far fa-comments"></i>
                </div>
                <div className="service-box-header">
                  <div className="service-box-headline">Consulting</div>
                  <div className="service-box-sub-headline">We help you to identify the digital needs of your customers.</div>
                  <div className="service-box-link">
                    <i class="far fa-arrow-alt-circle-right"></i>
                    More info
                  </div>
                </div>
              </div>
            </div>

            <div className="service-box">
              <div className="service-box-main">
                <div className="service-box-icon">
                  <i class="far fa-lightbulb"></i>
                </div>
                <div className="service-box-header">
                  <div className="service-box-headline">Concept</div>
                  <div className="service-box-sub-headline">We support you along the product development journey.</div>
                  <div className="service-box-link">
                    <i class="far fa-arrow-alt-circle-right"></i>
                    More info
                  </div>
                </div>
              </div>
            </div>

            <div className="service-box">
              <div className="service-box-main">
                <div className="service-box-icon">
                  <i class="fas fa-tools"></i>
                </div>
                <div className="service-box-header">
                  <div className="service-box-headline">Development</div>
                  <div className="service-box-sub-headline">We build the entire product - from A to Z.</div>
                  <div className="service-box-link">
                    <i class="far fa-arrow-alt-circle-right"></i>
                    More info
                  </div>
                </div>
              </div>
            </div>

            <div className="service-box">
              <div className="service-box-main">
                <div className="service-box-icon">
                  <i class="fas fa-code"></i>
                </div>
                <div className="service-box-header">
                  <div className="service-box-headline">Tech Stack</div>
                  <div className="service-box-sub-headline">We work with the latest technologies.</div>
                  <div className="service-box-link">
                    <i class="far fa-arrow-alt-circle-right"></i>
                    More info
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="services-box-wrapper">
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
                <p>Fullstack Software Development</p>
                <p>Tracking & Analytics</p>
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
                  <b>Backend:</b> Ruby, Ruby on Rails, Node.js
                </p>
                <p>
                  <b>Database:</b> MySQL, PostgreSQL
                </p>
                <p>
                  <b>Infrastructure:</b> AWS, Heroku
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
