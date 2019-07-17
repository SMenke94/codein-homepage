import * as React from 'react';
import '../styles/index.scss';
import NavBar from './essentials/NavBar';

const Hero = () => {
  return (
    <div>
      <NavBar />
      <div className="hero-wrapper">
        <div className="row">
          <div className="hero-box">
            <div className="hero-headline">code&#183;in</div>
            <div className="hero-sub-headline">more than IT</div>
            <div className="hero-slogan">
              Your digital lab for impactful products
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Hero;