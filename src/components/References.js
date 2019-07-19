import React from 'react';
import '../styles/References.scss';
import archipinion from '../assets/images/clients/client-1.png';
import volders from '../assets/images/clients/client-2.png';
import kauferportal from '../assets/images/clients/client-3.png';
import tourlane from '../assets/images/clients/client-4.png';
import searchguard from '../assets/images/clients/client-5.png';
import jager from '../assets/images/clients/client-6.png';
import schuco from '../assets/images/clients/client-7.png';
import agripinion from '../assets/images/clients/client-8.png';

const References = () => {
  return(
    <div className="references-wrapper" id="references">
      <div className="row">
        <div className="references-headline">References</div>
        <div className="references-image-wrapper">
          <img src={archipinion} alt="" />
          <img src={volders} alt="" />
          <img src={kauferportal} alt="" />
          <img src={searchguard} alt="" />
          <img src={jager} alt="" />
          <img src={tourlane} alt="" />
          <img src={schuco} alt="" />
          <img src={agripinion} alt="" />
        </div>
      </div>
    </div>
  );
}

export default References;