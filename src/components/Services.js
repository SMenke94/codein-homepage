
import React from "react";
import "../styles/Services.scss";
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t} = useTranslation();
  return (
    <div className="services-wrapper" id="services">
      <div className="row">
        <div className="services-container">
          <div className="services-headline">{t('What We Do')}</div>
          <div className="services-sub-headline">
            {t('We believe in the')} <b>{t('startup_principle')} </b> {t('user_advantage')} <b>{t('best_product')}</b>
            <br />
            <br />
            <div style={{ fontSize: "22px" }}>
              {t('more_than_IT')}
            </div>
          </div>
          <div className="services-boxes">
            <div className="services-box-wrapper">
              <div className="services-box">
                <div className="services-box-icon" />
                <div className="services-box-headline">{t('Consulting')}</div>
                <div className="services-box-text">
                  <p>{t('Agile Methods')}</p>
                  <p>{t('Design Thinking')}</p>
                </div>
              </div>
              <div className="services-box">
                <div className="services-box-icon" />
                <div className="services-box-headline">{t('Concept')}</div>
                <div className="services-box-text">
                  <p>{t('Product Development')}</p>
                  <p>{t('MVP Testing')}</p>
                </div>
              </div>
            </div>
            <div className="services-box">
              <div className="services-box-icon" />
              <div className="services-box-headline">{t('Development')}</div>
              <div className="services-box-text">
                <p>{t('Web & Mobile')}</p>
                <p>{t('Fullstack Software Development')}</p>
                <p>{t('Tracking & Analytics')}</p>
                <p>{t('Salesforce')}</p>
              </div>
            </div>
            <div className="services-box">
              <div className="services-box-icon" />
              <div className="services-box-headline">{t('Tech Stack')}</div>
              <div className="services-box-text">
                <p>
                  <b>Frontend:</b> React (Native), HTML, CSS, JS, jQuery
                </p>
                <p>
                  <b>Backend:</b> Ruby, Ruby on Rails, Node.js
                </p>
                <p>
                  <b>{t('Database')}:</b> MySQL, PostgreSQL
                </p>
                <p>
                  <b>{t('Infrastructure')}:</b> AWS, Heroku
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
