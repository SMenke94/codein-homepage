import React, { Component } from "react";
import '../../styles/NavBar.scss';
import menu from "../../assets/images/menu.png";
import cross from "../../assets/images/cross.png";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 0,
        prevScrollpos: window.pageYOffset,
        visible: true
      }
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
      }
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
                    {/* <a
                      href="#mission"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      mission
                    </a> */}
                    <a
                      href="#services"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      what we do
                    </a>
                    <a
                      href="#values"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      what we value
                    </a>
                    <a
                      href="#portfolio"
                      className="navbar-nav-link"
                      activeStyle={style.active}
                    >
                      what we built
                    </a>
                    <a
                      href="#team"
                      className="navbar-nav-link"
                      activeStyle={style.activeContact}
                    >
                      who we are
                    </a>
                    <a
                      href="#references"
                      className="navbar-nav-link"
                      activeStyle={style.activeContact}
                    >
                      references
                    </a>
                    <a
                      href="#contact"
                      className="navbar-nav-link"
                      activeStyle={style.activeContact}
                    >
                      contact
                    </a>
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
