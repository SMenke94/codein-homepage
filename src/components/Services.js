
import React from "react";
import "../styles/Services.scss";
import { useTranslation, Trans } from "react-i18next";

const Services = () => {
  const {t} = useTranslation();
  return (
    <div className="services-wrapper" id="services">
      <div className="row">
        <div className="services-container">
          <div className="services-headline">{t('services.what')}</div>
          <div className="services-sub-headline">
            <Trans i18nKey="services.principle">We believe in the <b>lean startup principle</b> that everything we build should be of value for the user. 
            Therefore our work does not start with the question ’Can we build it?’ but rather with ‘Should webuild it?’. We want the
            <b>best possible product for you and your users.</b></Trans>
            <br />
            <br />
            <div style={{ fontSize: "22px" }}>
              <Trans i18nKey="services.more_than_it">Ob ganzheitliche Betreuung oder punktuelle Unterstützung – <br />wir sind immer mit Herzblut dabei.</Trans>
            </div>
          </div>
          <div className="services-boxes">
            <div className="services-box-wrapper">
              <div className="services-box">
                <div className="services-box-icon" />
                <div className="services-box-headline">{t('services.Consulting')}</div>
                <div className="services-box-text">
                  <p>{t('services.Agile Methods')}</p>
                  <p>{t('services.Design Thinking')}</p>
                </div>
              </div>
              <div className="services-box">
                <div className="services-box-icon" />
                <div className="services-box-headline">{t('services.Concept')}</div>
                <div className="services-box-text">
                  <p>{t('services.Product Development')}</p>
                  <p>{t('services.MVP Testing')}</p>
                </div>
              </div>
            </div>
            <div className="services-box">
              <div className="services-box-icon" />
              <div className="services-box-headline">{t('services.Development')}</div>
              <div className="services-box-text">
                <p>{t('services.Web & Mobile')}</p>
                <p>{t('services.Fullstack Software Development')}</p>
                <p>{t('services.Tracking & Analytics')}</p>
                <p>{t('services.Salesforce')}</p>
              </div>
            </div>
            <div className="services-box">
              <div className="services-box-icon" />
              <div className="services-box-headline">{t('services.Tech Stack')}</div>
              <div className="services-box-text">
                <p>
                  <b>Frontend:</b> React (Native), HTML, CSS, JS, jQuery
                </p>
                <p>
                  <b>Backend:</b> Ruby, Ruby on Rails, Node.js
                </p>
                <p>
                  <b>{t('services.Database')}:</b> MySQL, PostgreSQL
                </p>
                <p>
                  <b>{t('services.Infrastructure')}:</b> AWS, Heroku
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