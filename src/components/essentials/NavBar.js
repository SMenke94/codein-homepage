import React, { Component } from "react";
import '../../styles/NavBar.scss';
import menu from "../../assets/images/menu.png";
import cross from "../../assets/images/cross.png";
import i18n from './../../i18n-init';
import ReactCountryFlag from 'react-country-flag';
import { Trans } from "react-i18next";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 0,
        prevScrollpos: window.pageYOffset,
        visible: true
      },
      svgSize: {
        width: '48px',
        height: '48px'
      },
      language: undefined
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    const style = { width: "100%" };
    this.setState({ style });
    document.addEventListener("click", this.closeNav);
  }

  closeNav() {
    document.removeEventListener("click", this.closeNav);
    const style = { width: 0 };
    this.setState({ style });
  }

  render() {
    const style = {
      active: {
        borderBothrefm: "2px solid #00FCE5",
        marginBothrefm: 0
      },
      activeContact: {
        border: "2px solid #00FCE5"
      },
      icon: {
        width: '36px',
        height: '36px'
      }
    };
    
    if(window.innerWidth < 640){
      style.icon = {width: '20px', height:'20px'}
    }

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className={this.state.visible ? "navbar" : null}>
        <div
          className="navbar-navbar-container"
          id="navbar"
          style={{ backgroundColor: this.props.background }}
        >
          <div className="navbar-navbar-wrapper">
            <a href="/" />
            <div className="navbar-menu-container">
              <div className="navbar-nav-link" onClick={this.openNav}>
                <img
                  src={menu}
                  alt="menu"
                  className="navbar-logo-style"
                />
              </div>
              <div
                ef="snav"
                className="navbar-overlay"
                style={this.state.style}
              >
                <div className="navbar-sidenav-container">
                  <div
                    href="/"
                    className="navbar-nav-links-container-mobile"
                  >
                    <div onClick={this.closeNav}>
                      <img
                        src={cross}
                        alt="close"
                        className="navbar-close-btn"
                      />
                    </div>
                    <a
                      href="#mission"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      <Trans>navbar.mission</Trans>
                    </a>
                    <a
                      href="#values"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      <Trans>navbar.values</Trans>
                    </a>
                    <a
                      href="#services"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      <Trans>navbar.services</Trans>
                    </a>
                    <a
                      href="#portfolio"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      <Trans>navbar.portfolio</Trans>
                    </a>
                    <a
                      href="#team"
                      className="navbar-nav-link"
                      activeStyle={style.activeContact}
                    >
                      <Trans>navbar.team</Trans>
                    </a>
                    <a
                      href="#references"
                      className="navbar-nav-link"
                      activeStyle={style.activeContact}
                    >
                      <Trans>navbar.references</Trans>
                    </a>
                    <a
                      href="#contact"
                      className="navbar-nav-link"
                      activeStyle={style.activeContact}
                    >
                      <Trans>navbar.contact</Trans>
                    </a>
                    <div className="navbar-nav-toggle-box">
                      <button id='i18n-de' className="navbar-nav-button" onClick={() => changeLanguage('de')}>
                        <div className="navbar-nav-icon">
                          <ReactCountryFlag code="de" svg styleProps={style.icon}/>
                        </div>
                      </button>
                      <button id='i18n-en' className="navbar-nav-button" onClick={() => changeLanguage('en')}>
                        <div className="navbar-nav-icon">
                          <ReactCountryFlag code="gb" svg styleProps={style.icon}/>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
