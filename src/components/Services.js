
import React, { Component } from "react";
import "../styles/Services.scss";
import { withTranslation, Trans } from "react-i18next";

class ServicesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: false,
      mainStyle1: { display: 'flex', },
      linkStyle1: { color: '#FF6F61' },
      infoStyle1: { display: 'none' },
      active2: false,
      mainStyle2: { display: 'flex', },
      linkStyle2: { color: '#FF6F61' },
      infoStyle2: { display: 'none' },
      active3: false,
      mainStyle3: { display: 'flex', },
      linkStyle3: { color: '#FF6F61' },
      infoStyle3: { display: 'none' },
      active4: false,
      mainStyle4: { display: 'flex', },
      linkStyle4: { color: '#FF6F61' },
      infoStyle4: { display: 'none' }
    };
  }

  // componentDidMount() {
  //   document.getElementById('i18n-de').addEventListener('click', this.moreInfoToggle1())
  //   document.getElementById('i18n-en').addEventListener('click', this.moreInfoToggle1())
  // }

  moreInfoToggle1 = () => {
    if (!this.state.active1) {
      const active1 = true;
      const mainStyle1 = { display: 'none' };
      const linkStyle1 = { color: '#353535', transform: 'rotate(180deg)' };
      const infoStyle1 = { display: 'initial' };
      this.setState({ active1, mainStyle1, linkStyle1, infoStyle1});
    } else {
      const active1 = false;
      const mainStyle1 = { display: 'flex' };
      const linkStyle1 = { color: '#FF6F61' };
      const infoStyle1 = { display: 'none' };
      this.setState({ active1, mainStyle1, linkStyle1, infoStyle1 });
    }
  }

  moreInfoToggle2 = () => {
    if (!this.state.active2) {
      const active2 = true;
      const mainStyle2 = { display: 'none' };
      const linkStyle2 = { color: '#353535', transform: 'rotate(180deg)' };
      const infoStyle2 = { display: 'initial' };
      this.setState({ active2, mainStyle2, linkStyle2, infoStyle2 });
    } else {
      const active2 = false;
      const mainStyle2 = { display: 'flex' };
      const linkStyle2 = { color: '#FF6F61' };
      const infoStyle2 = { display: 'none' };
      this.setState({ active2, mainStyle2, linkStyle2, infoStyle2 });
    }
  }

  moreInfoToggle3 = () => {
    if (!this.state.active3) {
      const active3 = true;
      const mainStyle3 = { display: 'none' };
      const linkStyle3 = { color: '#353535', transform: 'rotate(180deg)' };
      const infoStyle3 = { display: 'initial' };
      this.setState({ active3, mainStyle3, linkStyle3, infoStyle3 });
    } else {
      const active3 = false;
      const mainStyle3 = { display: 'flex' };
      const linkStyle3 = { color: '#FF6F61' };
      const infoStyle3 = { display: 'none' };
      this.setState({ active3, mainStyle3, linkStyle3, infoStyle3 });
    }
  }

  moreInfoToggle4 = () => {
    if (!this.state.active4) {
      const active4 = true;
      const mainStyle4 = { display: 'none' };
      const linkStyle4 = { color: '#353535', transform: 'rotate(180deg)' };
      const infoStyle4 = { display: 'initial' };
      this.setState({ active4, mainStyle4, linkStyle4, infoStyle4 });
    } else {
      const active4 = false;
      const mainStyle4 = { display: 'flex' };
      const linkStyle4 = { color: '#FF6F61' };
      const infoStyle4 = { display: 'none' };
      this.setState({ active4, mainStyle4, linkStyle4, infoStyle4 });
    }
  }

  render() {
    return (
      <div className="services-wrapper" id="services">
        <div className="row">
          <div className="services-container">
            <div className="services-headline">
              <Trans i18nKey="services.what"></Trans>
            </div>
            <div className="services-sub-headline">
              <Trans i18nKey="services.more_than_it"></Trans>
            </div>

            <div className="services-boxes">
              <div className="service-box">
                <div className="service-box-main" style={this.state.mainStyle1}>
                  <div className="service-box-icon">
                    <i class="far fa-comments"></i>
                  </div>
                  <div className="service-box-header">
                    <div className="service-box-headline"><Trans i18nKey="services.consulting"></Trans></div>
                    <div className="service-box-sub-headline"><Trans i18nKey="services.consulting_info"></Trans></div>
                  </div>
                </div>
                <div onClick={this.moreInfoToggle1} className="service-box-link" style={this.state.linkStyle1}>
                  <i class="far fa-arrow-alt-circle-down"></i>
                </div>
                <div className="service-box-additional" style={this.state.infoStyle1}>
                  <div><strong style={{color: "#FF6F61"}}>#</strong><Trans i18nKey="services.consulting1"></Trans></div>
                  <div><strong style={{color: "#FF6F61"}}>#</strong><Trans i18nKey="services.consulting2"></Trans></div>
                  <div><strong style={{color: "#FF6F61"}}>#</strong><Trans i18nKey="services.consulting3"></Trans></div>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-main" style={this.state.mainStyle2}>
                  <div className="service-box-icon">
                    <i class="far fa-lightbulb"></i>
                  </div>
                  <div className="service-box-header">
                    <div className="service-box-headline"><Trans i18nKey="services.concept"></Trans></div>
                    <div className="service-box-sub-headline"><Trans i18nKey="services.concept_info"></Trans></div>
                  </div>
                </div>
                <div onClick={this.moreInfoToggle2} className="service-box-link" style={this.state.linkStyle2}>
                  <i class="far fa-arrow-alt-circle-down"></i>
                </div>
                <div className="service-box-additional" style={this.state.infoStyle2}>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.concept1"></Trans></div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.concept2"></Trans></div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.concept3"></Trans></div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.concept4"></Trans></div>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-main" style={this.state.mainStyle3}>
                  <div className="service-box-icon">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div className="service-box-header">
                    <div className="service-box-headline"><Trans i18nKey="services.development"></Trans></div>
                    <div className="service-box-sub-headline"><Trans i18nKey="services.development_info"></Trans></div>
                  </div>
                </div>
                <div onClick={this.moreInfoToggle3} className="service-box-link" style={this.state.linkStyle3}>
                  <i class="far fa-arrow-alt-circle-down"></i>
                </div>
                <div className="service-box-additional" style={this.state.infoStyle3}>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.development1"></Trans></div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.development2"></Trans></div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.development3"></Trans></div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong><Trans i18nKey="services.development4"></Trans></div>
                </div>
              </div>

              <div className="service-box">
                <div className="service-box-main" style={this.state.mainStyle4}>
                  <div className="service-box-icon">
                    <i class="fas fa-code"></i>
                  </div>
                  <div className="service-box-header">
                    <div className="service-box-headline"><Trans i18nKey="services.tech_stack"></Trans></div>
                    <div className="service-box-sub-headline"><Trans i18nKey="services.tech_stack_info"></Trans></div>
                  </div>
                </div>
                <div onClick={this.moreInfoToggle4} className="service-box-link" style={this.state.linkStyle4}>
                  <i class="far fa-arrow-alt-circle-down"></i>
                </div>
                <div className="service-box-additional" style={this.state.infoStyle4}>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong> <strong>Frontend:</strong> React (Native), HTML, CSS, JS</div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong> <strong>Backend:</strong> Ruby, Ruby on Rails, Node.js</div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong> <strong><Trans i18nKey="services.tech_stack1"></Trans>:</strong> MySQL, PostgreSQL</div>
                  <div><strong style={{ color: "#FF6F61" }}>#</strong> <strong><Trans i18nKey="services.tech_stack2"></Trans>:</strong> AWS, Heroku</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Services = withTranslation()(ServicesComponent);
