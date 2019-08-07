import React from 'react';
import "../styles/Values.scss";
import star from '../assets/images/star.png';
import heart from '../assets/images/heart.png';
import rocket from '../assets/images/rocket.png';
import { useTranslation } from 'react-i18next'

const Values = () =>{
  const {t} = useTranslation();
  return (
    <div className="values-wrapper" id="values">
      <div className="row">
        {/* <div className="values-container"> */}
          <div className="values-headline">{t('values.what')}</div>
          <div className="values-sub-headline">
            {t('values.build_happiness')}
          </div>
          <div className="values-boxes">
            <div className="values-box">
              <div className="values-box-icon">
                <img src={star} alt="star" />
              </div>
              <div className="values-box-headline">{t('values.Excitement')}</div>
              <div className="values-box-text">
                {t('values.Excitement_text')}
              </div>
            </div>
            <div className="values-box">
              <div className="values-box-icon">
                <img src={heart} alt="heart" />
              </div>
              <div className="values-box-headline">{t('values.Trust')}</div>
              <div className="values-box-text">
                {t('values.Trust_text')}
              </div>
            </div>
            <div className="values-box">
              <div className="values-box-icon">
                <img src={rocket} alt="rocket" />
              </div>
              <div className="values-box-headline">{t('values.Growth')}</div>
              <div className="values-box-text">
                {t('values.Growth_text')}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Values;