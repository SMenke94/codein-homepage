import React from 'react';
import "../styles/Values.scss";
import star from '../assets/images/star.png';
import heart from '../assets/images/heart.png';
import rocket from '../assets/images/rocket.png';

const Values = () =>{
  return (
    <div className="values-wrapper" id="values">
      <div className="row">
        {/* <div className="values-container"> */}
          <div className="values-headline">What We Value</div>
          <div className="values-sub-headline">
            Learn and grow as a team. Create impactful products. Build
            happiness.
          </div>
          <div className="values-boxes">
            <div className="values-box">
              <div className="values-box-icon">
                <i class="fas fa-heart"></i>
              </div>
              <div className="values-box-headline">Excitement</div>
              <div className="values-box-text">
                We love coding and aspire to build extraordinary products that
                excite us and have an impact to the world.
              </div>
            </div>
            <div className="values-box">
              <div className="values-box-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <div className="values-box-headline">Trust</div>
              <div className="values-box-text">
                For us the foundation of successful teamwork and collaboration
                is trust based on honest and transparent communication.
              </div>
            </div>
            <div className="values-box">
              <div className="values-box-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div className="values-box-headline">Growth</div>
              <div className="values-box-text">
                We strive for more – personal and professional growth is an
                essential part of our everyday work.
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Values;