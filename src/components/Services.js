import React, { Component } from "react";
import "../styles/Services.scss";

class Services extends Component {
  componentDidMount() {
    // document.getElementsByClassName('services-boxes').addEventListener("mouseover", function() {
    //   const headline = document.getElementsByName('services-box-headline');
    //   console.log('headline', headline)
    // });
  }

  render() {
    return (
      <div className="services-wrapper" id="services">
        <div className="row">
          <div className="services-container">
            <div className="services-headline">What We Do</div>
            <div className="services-sub-headline">
              We believe in the lean startup principle that everything we
              build should be of value for the user. Therefore our work does
              not start with the question ’Can we build it?’ but rather with
              ‘Should we build it?’. We want the best possible product for
              you and your users.
              <br />
              <br />
              <div style={{ fontWeight: "bold" }}>
                This is why we are more than IT.
              </div>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="front">
                  <div className="card--display">
                    <p>consulting</p>
                  </div>
                  <div className="card--hover">
                    <h2>Consulting</h2>
                    <p>Agile Methods</p>
                    <p>Design Thinking</p>
                  </div>
                </div>
                <div className="card--border" />
              </div>
              <div className="card">
                <div className="front">
                  <div className="card--display">
                    <p>concept</p>
                  </div>
                  <div className="card--hover">
                    <h2>Concept</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam at est orci. Nam molestie pellentesque mi
                      nec lacinia. Cras volutpat arcu sit amet elit sodales,
                      nec volutpat velit bibendum.
                    </p>
                  </div>
                </div>
                <div className="card--border" />
              </div>
              <div className="card">
                <div className="front">
                  <div className="card--display">
                    <p>development</p>
                  </div>
                  <div className="card--hover">
                    <h2>Development</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam at est orci. Nam molestie pellentesque mi
                      nec lacinia. Cras volutpat arcu sit amet elit sodales,
                      nec volutpat velit bibendum.
                    </p>
                  </div>
                </div>
                <div className="card--border" />
              </div>
              <div className="card">
                <div className="front">
                  <div className="card--display">
                    <p>tech_stack</p>
                  </div>
                  <div className="card--hover">
                    <h2>Our Tech Stack</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Nullam at est orci. Nam molestie pellentesque mi
                      nec lacinia. Cras volutpat arcu sit amet elit sodales,
                      nec volutpat velit bibendum.
                    </p>
                  </div>
                </div>
                <div className="card--border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
