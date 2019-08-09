import React from "react";
import "../styles/team.scss";
import tap_icon from '../assets/images/tap.png'
import sebastian from "../assets/images/team/sebastian.jpg";
import martin from "../assets/images/team/martin.jpg";
import saskia from "../assets/images/team/saskia.jpg";
import katrin from "../assets/images/team/katrin.jpg";
import robin from "../assets/images/team/robin.jpg";
import jakob from "../assets/images/team/jakob.jpg";
import marcus from "../assets/images/team/marcus.jpg";
import max from "../assets/images/team/max.jpg";
import eddie from "../assets/images/team/team-eddie.png";
import cheffo from "../assets/images/team/cheffo.jpg";
import ruby from "../assets/images/stack/ruby.png";
import rails from "../assets/images/stack/rails.png";
import analytics from "../assets/images/stack/analytics.svg";
import tag_manager from "../assets/images/stack/tag-manager.svg";
import salesforce from "../assets/images/stack/salesforce.svg";
import { useTranslation } from "react-i18next";

const Team = () => {

  const { t } = useTranslation();

  let subHeadlineText = t('team.hover');
  if (window.innerWidth < 1200) {
    subHeadlineText = t('team.click');
  }

  return (
    <div className="team-wrapper" id="team">
      <div className="row" id="team-row">
        <div className="team-headline">Who We Are</div>
        {/* <div className="team-sub-header-box">
          <div className="team-sub-headline">{subHeadlineText}</div>
        </div> */}
        <div className="team-box">
          <div className="team-card">
            <img src={sebastian} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Sebastian Schlaak</div>
              <div className="team-card-title">Big Daddy</div>
              <div className="team-card-general-bio">
                Business is not about money. It's about making dreams come
                true for others and for yourself.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  MSc Informatics
                </div>
                <div className="team-card-additional-info-title">
                  MA Management
                </div>
                <div className="team-card-additional-info-title">
                  Stanford Leadership
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <i className="fab fa-sass" />
                  <i className="fab fa-js" />
                  <i className="fab fa-react" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-node-js" />
                  <i className="fas fa-database" />
                  <i className="fab fa-aws" />
                </div>
              </div>
            </div>
          </div>

          <div className="team-box">
            <div className="team-card">
              <img src={martin} alt="" />
              <div className="team-card-general">
                <div className="team-card-name">Martin Dess</div>
                <div className="team-card-title">Bavarian Boss</div>
                <div className="team-card-general-bio">
                  Being curious never stops when you enjoy doing what you do and that simply creates energy.
              </div>
              </div>
              {/* <div className="team-card-additional">
                <div className="team-card-additional-info">
                  <div className="team-card-additional-info-title">
                    Entrepreneur
                </div>
                  <div className="team-card-additional-info-title">
                    Founder
                </div>
                  <div className="team-card-additional-info-stack">
                    <i className="fab fa-html5" />
                    <i className="fab fa-css3-alt" />
                    <i className="fab fa-sass" />
                    <i className="fab fa-js" />
                    <i className="fab fa-react" />
                    <img src={ruby} alt="" />
                    <img src={rails} alt="" />
                    <i className="fab fa-node-js" />
                    <i className="fas fa-database" />
                    <i className="fab fa-aws" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="team-card">
            <img src={robin} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Robin Zuschke</div>
              <div className="team-card-title">AWS Ace</div>
              <div className="team-card-general-bio">
                When I started coding I realized that maybe I am not good, but
                at least I'm slow.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc International Business
                </div>
                <div className="team-card-additional-info-title">
                  Le Wagon Graduate
                </div>
                <div className="team-card-additional-info-title">
                  AWS Solutions Architect
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-aws" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <img src={analytics} alt="" />
                  <i className="fas fa-database" />
                  <i className="fab fa-react" />
                  <i className="fab fa-html5" />
                  {/* <i className="fab fa-css3-alt"></i> */}
                  <i className="fab fa-sass" />
                  <i className="fab fa-js" />
                  <i className="fab fa-node-js" />
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={saskia} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Saskia Menke</div>
              <div className="team-card-title">Data Gymnast</div>
              <div className="team-card-general-bio">
                Cartwheeling through life while flipping code, structuring
                data and appreciating food.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc International Business
                </div>
                <div className="team-card-additional-info-title">
                  MSc Development Studies
                </div>
                <div className="team-card-additional-info-title">
                  Le Wagon Graduate
                </div>
                <div className="team-card-additional-info-stack">
                  <img src={analytics} alt="" />
                  <img src={tag_manager} alt="" />
                  <i className="fas fa-database" />
                  <i className="fab fa-react" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-aws" />
                  {/* <i className="fab fa-html5"></i> */}
                  {/* <i className="fab fa-css3-alt"></i> */}
                  <i className="fab fa-js" />
                  <img src={salesforce} style={{ width: "25px" }} alt="" />
                  <i className="fab fa-sass" />
                  {/* <i className="fab fa-node-js"></i> */}
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={katrin} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Katrin Abel</div>
              <div className="team-card-title">Fullstack Foodie</div>
              <div className="team-card-general-bio">
                Passionate about user centric-coding and analytics (and anything related to chocolate).
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BA Marketing
                </div>
                <div className="team-card-additional-info-title">
                  MA Communication Studies
                </div>
                <div className="team-card-additional-info-title">
                  Ironhack Graduate
                </div>
                <div className="team-card-additional-info-stack">
                  <img src={analytics} alt="" />
                  <img src={tag_manager} alt="" />
                  <i className="fab fa-react" />
                  <i className="fab fa-node-js" />
                  {/* <i className="fab fa-html5"></i> */}
                  {/* <i className="fab fa-css3-alt"></i> */}
                  <i className="fab fa-sass" />
                  <i className="fab fa-js" />
                  <i className="fas fa-database" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-aws" />
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={jakob} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Jakob Bethmann</div>
              <div className="team-card-title">Bug Hunter</div>
              <div className="team-card-general-bio">
                The programmer`s lifestyle is a pathway to many abilities some
                consider to be unnatural.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc International Business
                </div>
                <div className="team-card-additional-info-title">
                  Le Wagon Graduate
                </div>
                <div className="team-card-additional-info-title">
                  AWS Solutions Architect
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fas fa-database" />
                  <i className="fab fa-aws" />
                  <img src={salesforce} style={{ width: "25px" }} alt="" />
                  <i className="fab fa-react" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <i className="fab fa-sass" />
                  <i className="fab fa-js" />
                  {/* <i className="fab fa-node-js"></i> */}
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={marcus} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Marcus Zierke</div>
              <div className="team-card-title">React Black Belt</div>
              <div className="team-card-general-bio">
                Never shying away from the big fights, neither
                Brazilian Jiu-Jitsu nor React.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc Engineering
                </div>
                <div className="team-card-additional-info-title">
                  MSc Engineering
                </div>
                <div className="team-card-additional-info-title">
                  Le Wagon Graduate
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-react" />
                  <i className="fab fa-sass" />
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-js" />
                  <i className="fab fa-node-js" />
                  <i className="fas fa-database" />
                  <i className="fab fa-aws" />
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
                Hired a Ruby on Rails magician once. Started coding and now
                master the sorcery myself.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc Business
                </div>
                <div className="team-card-additional-info-title">
                  MSc Entrepreneurship
                </div>
                <div className="team-card-additional-info-title">
                  Le Wagon Graduate
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <i className="fab fa-sass" />
                  <i className="fab fa-js" />
                  <i className="fab fa-react" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-node-js" />
                  <i className="fas fa-database" />
                  <i className="fab fa-aws" />
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
                Living to the beat of time in balance between Ruby on Rails,
                Discofox and AWS.
              </div>
            </div>
            <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc Computer Sciences
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fas fa-database" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-js" />
                  <i className="fab fa-react" />
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <i className="fab fa-sass" />
                  <i className="fab fa-node-js" />
                  <i className="fab fa-aws" />
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={cheffo} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Cheffo</div>
              <div className="team-card-title">Feelgood Manager</div>
              <div className="team-card-general-bio">
                Barking, barking, barking, barking, barking, barking, barking, barking, barking.
              </div>
            </div>
            {/* <div className="team-card-additional">
              <div className="team-card-additional-info">
                <div className="team-card-additional-info-title">
                  BSc Computer Sciences
                </div>
                <div className="team-card-additional-info-stack">
                  <i className="fas fa-database" />
                  <img src={ruby} alt="" />
                  <img src={rails} alt="" />
                  <i className="fab fa-js" />
                  <i className="fab fa-react" />
                  <i className="fab fa-html5" />
                  <i className="fab fa-css3-alt" />
                  <i className="fab fa-sass" />
                  <i className="fab fa-node-js" />
                  <i className="fab fa-aws" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
