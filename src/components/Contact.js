import React from 'react';
import '../styles/Contact.scss';
import { useTranslation, Trans } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="cotact-wrapper" id="contact">
      <div className="row">
        <div className="contact-headline">
          <Trans i18nKey="contact.get_in_touch">Let's<div style={{ color: "#000", padding: "0 10px" }}>get in touch</div></Trans>
        </div>
        <div className="contact-headline">
        <Trans i18nKey="contact.meet_up">Let's<div style={{ color: "#000", padding: "0 10px" }}>meet up</div></Trans>
        </div>
        <div className="contact-headline">
        <Trans i18nKey="contact.build">Let's<div style={{ color: "#000", padding: "0 10px" }}>build</div></Trans>
        </div>
        <a href="mailto:info@web-development.berlin">
          <div class="button">
            <span>{t('contact.say_hi')}</span>
            <svg>
              <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
              <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
            </svg>
          </div>
        </a>
        <div className="contact-info-box">
          <div className="contact-address">
            <div className="contact-box-headline">{t('contact.office')}</div>
            <div className="contact-box-text">
              <p>Adrilina UG (haftungsbeschränkt)</p>
              <p>Elchdamm 74</p>
              <p>13503 Berlin</p>
              <p>Germany</p>
            </div>
          </div>
          <div className="contact-phone">
            <div className="contact-box-headline">{t('contact.phone')}</div>
            <div className="contact-box-text">+49 173 677 27 81</div>
          </div>
          <div className="contact-email">
            <div className="contact-box-headline">{t('contact.email')}</div>
            <div className="contact-box-text">
              info@web-development.berlin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;