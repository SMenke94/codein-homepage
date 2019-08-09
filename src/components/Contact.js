import React from 'react';
import '../styles/Contact.scss';
import { useTranslation, Trans } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-wrapper" id="contact">
      <div className="row">
        <div className="contact-headline">
          <Trans i18nKey="contact.get_in_touch"></Trans>
        </div>
        <div className="contact-headline">
          <Trans i18nKey="contact.meet_up"></Trans>
        </div>
        <div className="contact-headline">
          <Trans i18nKey="contact.build"></Trans>
        </div>
        <a href="mailto:sebastian@codein.berlin">
          <div class="button">
            <span>{t('contact.say_hi')}</span>
            <svg>
              <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
              <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
            </svg>
          </div>
        </a>
        <div className="contact-info-box">
          <div className="contact-info-box-element contact-address">
            <div className="contact-box-headline">{t('contact.office')}</div>
            <div className="contact-box-text">
              <p>Adrilina UG</p>
              <p>(haftungsbeschränkt)</p>
              <p>Elchdamm 74</p>
              <p>13503 Berlin</p>
              <p>Germany</p>
            </div>
          </div>
          <div className="contact-info-box-element contact-phone">
            <div className="contact-box-headline">{t('contact.phone')}</div>
            <div className="contact-box-text">+49 173 677 27 81</div>
          </div>
          <div className="contact-info-box-element contact-email">
            <div className="contact-box-headline">{t('contact.email')}</div>
            <div className="contact-box-text">
              sebastian@codein.berlin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;