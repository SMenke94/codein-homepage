import React from 'react';
import '../styles/portfolio.scss';
import archipinion_webapp from '../assets/images/portfolio/archipinion_webapp.png';
import archipinion_ios from '../assets/images/portfolio/archipinion_ios.png';
import archipinion_platform from '../assets/images/portfolio/archipinion_platform.png';
import landingpages from '../assets/images/portfolio/landingpages.png';
import archipinion_landing from '../assets/images/portfolio/archipinion_landing.png';
import industry_dashboard from '../assets/images/portfolio/industry_dashboard.png';
import invoice_checker from '../assets/images/portfolio/invoice_checker.png';
import dashboard from '../assets/images/portfolio/dashboard2.png';
import nestle from '../assets/images/portfolio/nestle.png';
import volders from '../assets/images/portfolio/volders.png';
import hrmanager from '../assets/images/portfolio/hrmanager.png';
import searchguard from '../assets/images/portfolio/searchguard.png';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation();
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="portfolio-headline">Portfolio</div>
      {/* <div className="portfolio-sub-headline">
        All App Web
      </div> */}

      {/* <div className="row">
        <div className="col-lg-12">
          <ul className="portfolio-filter">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div> */}


      <div className="portfolio-boxes">
        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={archipinion_platform} alt="archipinion_platform" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>archipinion</p>
                <p style={{ fontSize: '12px' }}>{t('video_platform')}</p>
              </div>
              {/* <a href="https://live.archipinion.com" target="_blank" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-app">
          <div className="portfolio-box-image">
            <img src={industry_dashboard} alt="industry_dashboard" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>archipinion</p>
                <p style={{ fontSize: '12px' }}>{t('survey_results')}</p>
              </div>
              {/* <a href="" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={archipinion_landing} alt="archipinion_landing" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>archipinion</p>
                <p style={{ fontSize: '12px' }}>{t('seo_landingpages')}</p>
              </div>
              {/* <a href="https://video.archipinion.com/mehrgeschossig-in-massivholz" target="_blank" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={invoice_checker} alt="invoice_checker" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>codein</p>
                <p style={{ fontSize: '12px' }}>{t('invoice_checker')}</p>
              </div>
              {/* <a href="" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-web">
          <div className="portfolio-box-image">
            <img src={dashboard} alt="dashboard" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>codein</p>
                <p style={{ fontSize: '12px' }}>{t('sales_dashboard')}</p>
              </div>
              {/* <a href="https://www.salesdashboard.de/" target="_blank" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={hrmanager} alt="hrmanager" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>Käuferportal</p>
                <p style={{ fontSize: '12px' }}>{t('recruiting_platform')}</p>
              </div>
              {/* <a href="" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={searchguard} alt="searchguard" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>Searchguard</p>
                <p style={{ fontSize: '12px' }}>{t('seo_optimized')}</p>
              </div>
              {/* <a href="" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-app">
          <div className="portfolio-box-image">
            <img src={nestle} alt="nestle" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>Codein</p>
                <p style={{ fontSize: '12px' }}>{t('nestle_app')}</p>
              </div>
              {/* <a href="" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={volders} alt="volders" />
            <div className="portfolio-box-info">
              <div className="portfolio-box-info-content">
                <p style={{ fontWeight: 'bold' }}>Volders</p>
                <p style={{ fontSize: '12px' }}>{t('cancellation_platform')}</p>
              </div>
              {/* <a href="" className="portfolio-box-info-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;