import React from 'react';
import '../styles/portfolio.scss';
import archipinion_webapp from '../assets/images/portfolio/archipinion_webapp.png';
import archipinion_ios from '../assets/images/portfolio/archipinion_ios.png';
import archipinion_platform from '../assets/images/portfolio/archipinion_platform.png';
import landingpages from '../assets/images/portfolio/landingpages.png';
import archipinion_landing from '../assets/images/portfolio/archipinion_landing.png';
import industry_dashboard from '../assets/images/portfolio/industry_dashboard.png';
import invoice_checker from '../assets/images/portfolio/invoice_checker.png';
import dashboard from '../assets/images/portfolio/dashboard1.png';
import nestle from '../assets/images/portfolio/nestle.png';
import volders from '../assets/images/portfolio/volders.png';
import hrmanager from '../assets/images/portfolio/hrmanager.png';
import searchguard from '../assets/images/portfolio/searchguard.png';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation();
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="portfolio-headline">{t('portfolio.what')}</div>

      <div className="portfolio-boxes">
        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={archipinion_platform} alt="archipinion_platform" />
            <div className="portfolio-box-info-content">
              <p style={{ fontWeight: 'bold' }}>archipinion</p>
              <p style={{ fontSize: '12px' }}>{t('portfolio.video_platform')}</p>
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-app">
          <div className="portfolio-box-image">
            <img src={industry_dashboard} alt="industry_dashboard" />
            <div className="portfolio-box-info-content">
              <p style={{ fontWeight: 'bold' }}>archipinion</p>
              <p style={{ fontSize: '12px' }}>{t('portfolio.survey_results')}</p>
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={dashboard} alt="dashboard" />
            <div className="portfolio-box-info-content">
              <p style={{ fontWeight: 'bold' }}>codein</p>
              <p style={{ fontSize: '12px' }}>{t('portfolio.sales_dashboard')}</p>
            </div>
          </div>
        </div>

        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={searchguard} alt="searchguard" />
            <div className="portfolio-box-info-content">
              <p style={{ fontWeight: 'bold' }}>Searchguard</p>
              <p style={{ fontSize: '12px' }}>{t('portfolio.seo_optimized')}</p>
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-web">
          <div className="portfolio-box-image">
            <img src={invoice_checker} alt="invoice_checker" />
            <div className="portfolio-box-info-content">
              <p style={{ fontWeight: 'bold' }}>codein</p>
              <p style={{ fontSize: '12px' }}>{t('portfolio.invoice_checker')}</p>
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={hrmanager} alt="hrmanager" />
            <div className="portfolio-box-info-content">
              <p style={{ fontWeight: 'bold' }}>Käuferportal</p>
              <p style={{ fontSize: '12px' }}>{t('portfolio.recruiting_platform')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;