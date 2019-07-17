import React, { Component } from 'react'

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
          <div className="services-headline">What We Do</div>
          <div className="services-sub-headline">
            We believe in the lean startup principle that everything we
            build should be of value for the user. Therefore our work does
            not start with the question ’Can we build it?’ but rather with
            ‘Should we build it?’. We want the best possible product for you
            and your users.
            <br />
            <br />
            <div style={{ fontWeight: "bold" }}>
              This is why we are more than IT.
            </div>
          </div>
          <div className="services-boxes-wrapper">
            <div className="services-boxes">
              <div className="services-box frame peach">
                <div className="services-box-details">
                  <div className="services-box-headline">Consulting</div>
                  <p>Agile Methods</p>
                  <p>Design Thinking</p>
                </div>
              </div>
              <div className="services-box darkGrey">
                <div className="services-box-headline">Concept</div>
              </div>
            </div>
            <div className="services-boxes">
              <div className="services-box lightGrey">
                <div className="services-box-headline">Development</div>
              </div>
              <div className="services-box pantone">
                <div className="services-box-headline">Tech Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
