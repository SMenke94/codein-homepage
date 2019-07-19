import React from 'react';
import '../styles/team.scss';
import sebastian from '../assets/images/team/team-sebastian.png';
import saskia from '../assets/images/team/team-saskia4.png';
import katrin from '../assets/images/team/team-katrin-1.png';
import robin from '../assets/images/team/team-robin.png';
import jakob from '../assets/images/team/team-jakob.png';
import marcus from '../assets/images/team/team-marcus-2.png';
import max from '../assets/images/team/team-max.png';
import eddie from '../assets/images/team/team-eddie.png';
import ruby from '../assets/images/stack/ruby.png';
import rails from '../assets/images/stack/rails.png';
import analytics from '../assets/images/stack/analytics.svg';
import tag_manager from '../assets/images/stack/tag-manager.svg';
import salesforce from '../assets/images/stack/salesforce.svg';

const Team = () => {
  return (
    <div className="team-wrapper" id="team">
      <div className="row" id="team-row">
        <div className="team-header">Team</div>
        {/* <div className="team-description">
          We all come from different professional backgrounds. Each bringing a unique set of skills to the team. 
          Brought together by a shared passion for coding and building tech products - making us more than IT. 
          <br/>
          <br/>
          Excited about all things React, Ruby, Rails, AWS and the opportunity to learn something new.
        </div> */}
        <div className="team-box">

          <div className="team-card">
            <img src={sebastian} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Sebastian Schlaak</div>
              <div className="team-card-title">Big Daddy</div>
              <div className="team-card-general-bio">
                Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">MSc Informatics</div>
                <div className="team-card-additional-info-title">MA Management</div>
                <div className="team-card-additional-info-title">Stanford Leadership</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-node-js"></i>
                  <i className="fas fa-database"></i>
                  <i className="fab fa-aws"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={robin} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Robin Zuschke</div>
              <div className="team-card-title">AWS Ace</div>
              <div className="team-card-general-bio">
                When I started coding I realized that maybe I am not good, but at least I'm slow.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BSc International Business</div>
                <div className="team-card-additional-info-title">Le Wagon Graduate</div>
                <div className="team-card-additional-info-title">AWS Solutions Architect</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-aws"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <img src={analytics} alt="" />
                  <i className="fas fa-database"></i>
                  <i className="fab fa-react"></i>
                  <i className="fab fa-html5"></i>
                  {/* <i className="fab fa-css3-alt"></i> */}
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-node-js"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src={saskia} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Saskia Menke</div>
              <div className="team-card-title">Data Cheerleader</div>
              <div className="team-card-general-bio">
                Cartwheeling between impact investment and data analytics by flipping code.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BSc International Business</div>
                <div className="team-card-additional-info-title">MSc Development Studies</div>
                <div className="team-card-additional-info-title">Le Wagon Graduate</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-react"></i>
                  <img src={analytics} alt="" />
                  <img src={tag_manager} alt="" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fas fa-database"></i>
                  <i className="fab fa-aws"></i>
                  {/* <i className="fab fa-html5"></i> */}
                  {/* <i className="fab fa-css3-alt"></i> */}
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <img src={salesforce} style={{ width: '25px' }} alt="" />
                  {/* <i className="fab fa-node-js"></i> */}
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src={katrin} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Katrin Abel</div>
              <div className="team-card-title">Marketing Machine</div>
              <div className="team-card-general-bio">
                Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BA Marketing</div>
                <div className="team-card-additional-info-title">MA Communication Studies</div>
                <div className="team-card-additional-info-title">Ironhack Graduate</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  {/* <i className="fab fa-sass"></i> */}
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <i className="fas fa-database"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  {/* <i className="fab fa-node-js"></i> */}
                  <i className="fab fa-aws"></i>
                  <img src={analytics} alt="" />
                  <img src={tag_manager} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src={jakob} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Jakob Bethmann</div>
              <div className="team-card-title">Salesforce Guru</div>
              <div className="team-card-general-bio">
                Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BSc International Business</div>
                <div className="team-card-additional-info-title">Le Wagon Graduate</div>
                <div className="team-card-additional-info-title">AWS Solutions Architect</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <img src={salesforce} style={{ width: '25px' }} alt="" />
                  {/* <i className="fab fa-node-js"></i> */}
                  <i className="fas fa-database"></i>
                  <i className="fab fa-aws"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src={marcus} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Marcus Zierke</div>
              <div className="team-card-title">Frontend Model</div>
              <div className="team-card-general-bio">
                Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BSc Engineering</div>
                <div className="team-card-additional-info-title">MSc Engineering</div>
                <div className="team-card-additional-info-title">Le Wagon Graduate</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-node-js"></i>
                  <i className="fas fa-database"></i>
                  <i className="fab fa-aws"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src={max} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Max Brückner</div>
              <div className="team-card-title">Ruby Poet</div>
              <div className="team-card-general-bio">
                Hired a Ruby on Rails magician once. Started coding and now master the sorcery myself.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BSc Business</div>
                <div className="team-card-additional-info-title">MSc Entrepreneurship</div>
                <div className="team-card-additional-info-title">Le Wagon Graduate</div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-node-js"></i>
                  <i className="fas fa-database"></i>
                  <i className="fab fa-aws"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img src={eddie} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Eddie Muss</div>
              <div className="team-card-title">Backend Dancer</div>
              <div className="team-card-general-bio">
                Living to the beat of time in balance between Ruby on Rails, Discofox and AWS.
            </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">BSc Computer Sciences</div>
                {/* <div className="team-card-additional-info-title">BSc Computer Sciences</div> */}
                {/* <div className="team-card-additional-info-title">BSc Computer Sciences</div> */}
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-react"></i>
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-node-js"></i>
                  <i className="fas fa-database"></i>
                  <i className="fab fa-aws"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;