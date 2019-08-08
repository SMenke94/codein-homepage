import React from "react";
import "../styles/References.scss";
import archipinion from "../assets/images/clients/client-1.png";
import volders from "../assets/images/clients/client-2.png";
import kauferportal from "../assets/images/clients/client-3.png";
import tourlane from "../assets/images/clients/client-4.png";
import searchguard from "../assets/images/clients/client-5.png";
import jager from "../assets/images/clients/client-6.png";
import schuco from "../assets/images/clients/client-7.png";
import agripinion from "../assets/images/clients/client-8.png";

const References = () => {
  return (
    <div className="references-wrapper" id="references">
      <div className="row" id="references-row">
        <div className="references-headline">Who Trusts Us</div>
        <div className="references-image-wrapper">
          <img src={archipinion} alt="logo" />
          <img src={volders} alt="logo" />
          <img src={kauferportal} alt="logo" />
          <img src={searchguard} alt="logo" />
          <img src={jager} alt="logo" />
          <img src={tourlane} alt="logo" />
          <img src={schuco} alt="logo" />
          <img src={agripinion} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default References;
