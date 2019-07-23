import React from 'react';
import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="row">
        <div className="footer-container">
          <p><strong>Codein </strong> - Your destination for impactful digital products.</p>
          <a href="https://s3.eu-central-1.amazonaws.com/adrilina/imprint.html" target="_blank">Impressum</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;