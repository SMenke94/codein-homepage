import React from "react";
import "../styles/team.scss";
import sebastian from "../assets/images/team/sebastian.jpg";
import martin from "../assets/images/team/martin.jpg";
import saskia from "../assets/images/team/saskia.jpg";
import katrin from "../assets/images/team/katrin.jpg";
import robin from "../assets/images/team/robin.jpg";
import jakob from "../assets/images/team/jakob.jpg";
import marcus from "../assets/images/team/marcus.jpg";
import max from "../assets/images/team/max.jpg";
import eddie from "../assets/images/team/eddie.jpg";
import cheffo from "../assets/images/team/cheffo.jpg";
import ruby from "../assets/images/stack/ruby.png";
import rails from "../assets/images/stack/rails.png";
import analytics from "../assets/images/stack/analytics.svg";
import tag_manager from "../assets/images/stack/tag-manager.svg";
import salesforce from "../assets/images/stack/salesforce.svg";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="team-wrapper" id="team">
      <div className="row" id="team-row">
        <div className="team-headline">{t('team.what')}</div>
        <div className="team-box">
          <div className="team-card">
            <img src={sebastian} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Sebastian Schlaak</div>
              <div className="team-card-title">{t('team.sebastian_title')}</div>
              <div className="team-card-general-bio">{t('team.sebastian_bio')}</div>
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
                <div className="team-card-title">{t('team.martin_title')}</div>
                <div className="team-card-general-bio">{t('team.martin_bio')}</div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={robin} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Robin Zuschke</div>
              <div className="team-card-title">{t('team.robin_title')}</div>
              <div className="team-card-general-bio">{t('team.robin_bio')}</div>
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
              <div className="team-card-title">{t('team.saskia_title')}</div>
              <div className="team-card-general-bio">{t('team.saskia_bio')}</div>
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
                  <i className="fab fa-js" />
                  <img src={salesforce} style={{ width: "25px" }} alt="" />
                  <i className="fab fa-sass" />
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={katrin} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Katrin Abel</div>
              <div className="team-card-title">{t('team.katrin_title')}</div>
              <div className="team-card-general-bio">{t('team.katrin_bio')}</div>
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
              <div className="team-card-title">{t('team.jakob_title')}</div>
              <div className="team-card-general-bio">{t('team.jakob_bio')}</div>
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
                </div>
              </div>
            </div>
          </div>

          <div className="team-card">
            <img src={marcus} alt="" />
            <div className="team-card-general">
              <div className="team-card-name">Marcus Zierke</div>
              <div className="team-card-title">{t('team.marcus_title')}</div>
              <div className="team-card-general-bio">{t('team.marcus_bio')}</div>
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
              <div className="team-card-title">{t('team.max_title')}</div>
              <div className="team-card-general-bio">{t('team.max_bio')}</div>
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
              <div className="team-card-title">{t('team.eddie_title')}</div>
              <div className="team-card-general-bio">{t('team.eddie_bio')}</div>
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
              <div className="team-card-title">{t('team.cheffo_title')}</div>
              <div className="team-card-general-bio">{t('team.cheffo_bio')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
