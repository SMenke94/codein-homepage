import React from 'react';
import sebastian from '../assets/images/team/team-sebastian.png';
import saskia from '../assets/images/team/team-saskia.png';
import katrin from '../assets/images/team/team-katrin-1.png';
import robin from '../assets/images/team/team-robin.png';
import jakob from '../assets/images/team/team-jakob.png';
import marcus from '../assets/images/team/team-marcus-2.png';
import max from '../assets/images/team/team-max.png';
import eddie from '../assets/images/team/team-eddie.png';


const Team = () => {
  return (
    <div className="team-wrapper">
      <div className="team-header">Team</div>
      {/* <div className="team-description">
        We all come from different professional backgrounds. Each bringing a unique set of skills to the team. 
        Brought together by a shared passion for coding and building tech products - making us more than IT. 
        <br/>
        <br/>
        Excited about all things React, Ruby, Rails, AWS and the opportunity to learn something new.
      </div> */}
      <div className="team-box">

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={sebastian} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Sebastian Schlaak</div>
              <div className="team-profile-intro-content-subheader">CEO</div>
              <div className="team-profile-details">
                MSc Informatics | MA Management | Stanford Executive Education Graduate | Startup Founder | Kaltduscher
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={robin} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Robin Zuschke</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BSc International Business | AWS Solutions Architect | Drummer
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={saskia} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Saskia Menke</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BSc International Business | MSc Business & Development Studies | Data Enthusiast | Cheerleader
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={katrin} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Katrin Abel</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BA Economics/Marketing | MA Communication Sciences | Google Analytics Pro | Half Marathon Finisher
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={jakob} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Jakob Bethmann</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BSc International Business | AWS Solutions Architect | Food Fanatic
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={marcus} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Marcus Zierke</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BSc/MSc Engineering | Mobile App Expert | Dog Lover
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={max} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Max Brückner</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BSc Economics | MSc Entrepreneurship | Ruby/Rails Expert | Rapper
              </div>
            </div>
          </div>
        </div>

        <div className="team-profile">
          <div className="team-profile-intro">
            <img src={eddie} alt="" />
            <div className="team-profile-intro-content">
              <div className="team-profile-intro-content-mainheader">Eddie Muss</div>
              <div className="team-profile-intro-content-subheader">Fullstack Developer</div>
              <div className="team-profile-details">
                BSc Computer Science | All Things Machine Learning | Salsa Dancer
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Team;