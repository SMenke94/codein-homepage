import React from 'react';
import '../styles/Portfolio.scss';
import archipinion_webapp from '../assets/images/portfolio/archipinion_webapp.png';
import archipinion_ios from '../assets/images/portfolio/archipinion_ios.png';
import landingpages from '../assets/images/portfolio/landingpages.png';
import dashboard from '../assets/images/portfolio/dashboard2.png';
import nestle from '../assets/images/portfolio/nestle.png';
import volders from '../assets/images/portfolio/volders.png';
import hrmanager from '../assets/images/portfolio/hrmanager.png';
import searchguard from '../assets/images/portfolio/searchguard.png';

const Portfolio = () => {
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
        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={archipinion_webapp} alt="archipinion_webapp" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>archipinion</p>
                <p style={{ fontSize: '12px' }}>Video platform for architects</p>
              </div>
              <a href="https://live.archipinion.com" target="_blank" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-app">
          <div className="portfolio-box-image">
            <img src={archipinion_ios} alt="archipinion_ios" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>archipinion</p>
                <p style={{ fontSize: '12px' }}>ios app</p>
              </div>
              {/* <a href="" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={landingpages} alt="landingpages" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>archipinion</p>
                <p style={{ fontSize: '12px' }}>SEO landing pages</p>
              </div>
              <a href="https://video.archipinion.com/mehrgeschossig-in-massivholz" target="_blank" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={dashboard} alt="dashboard" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>Sales Dashboard</p>
                <p style={{ fontSize: '12px' }}>Gamification Dashboards for Sales Teams</p>
              </div>
              <a href="https://www.salesdashboard.de/" target="_blank" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-app">
          <div className="portfolio-box-image">
            <img src={nestle} alt="nestle" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>Nestle Finder</p>
                <p style={{ fontSize: '12px' }}>Nutrition App</p>
              </div>
              {/* <a href="" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box darkBlue filter-web">
          <div className="portfolio-box-image">
            <img src={hrmanager} alt="hrmanager" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>Käuferportal</p>
                <p style={{ fontSize: '12px' }}>internal recruiting platform</p>
              </div>
              {/* <a href="" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box lightGrey filter-web">
          <div className="portfolio-box-image">
            <img src={searchguard} alt="searchguard" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>Searchguard</p>
                <p style={{ fontSize: '12px' }}>SEO optimized landing page</p>
              </div>
              {/* <a href="" className="portfolio-box-overlay-icon">
                <i className="fas fa-external-link-alt" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="portfolio-box pantone filter-web">
          <div className="portfolio-box-image">
            <img src={volders} alt="volders" />
            <div className="portfolio-box-overlay">
              <div className="portfolio-box-overlay-content">
                <p style={{ fontWeight: 'bold' }}>Volders</p>
                <p style={{ fontSize: '12px' }}>Subscription cancellation platform</p>
              </div>
              {/* <a href="" className="portfolio-box-overlay-icon">
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