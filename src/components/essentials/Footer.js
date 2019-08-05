import React from 'react';
import '../../styles/Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-wrapper">
      <div className="row footer-container">
        <p><strong>Codein </strong> - {t('footer')}</p>
        <a href="https://s3.eu-central-1.amazonaws.com/adrilina/imprint.html" target="_blank">Impressum</a>
      </div>
    </div>
  );
};

export default Footer;