import React, { Component } from "react";
import Typed from "react-typed";
import '../styles/Mission.scss';
import { withTranslation} from 'react-i18next';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsTime: false,
      typedText: undefined,
      timeout: undefined,
      finished: true
    };
    this.handleScroll = this.handleScroll.bind(this)
    this.updateContent = this.updateContent.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.getElementById('i18n-de').addEventListener('click', this.updateContent)
    document.getElementById('i18n-en').addEventListener('click', this.updateContent)
  }

  handleScroll = () => {
    const { t } = this.props;

    if (window.pageYOffset > window.innerHeight - 100) {

      setTimeout(() => {
        this.setState({
          timeout:
            <Typed
              strings={[t('mission2')]}
              typeSpeed={40}
            />
        });
      }, 4500);

      const typedText = (
        <div>
        <Typed
          strings={[t('mission1')]}
          typeSpeed={40}
          style={{ color: "#6A6A6A" }}
        />
        </div>
      );
      this.setState({typedText});
    }
  };

  updateContent = () => {
    this.setState({timeout: ""})
    this.setState({ typedText:""})
  };

  render() {
    return (
      <div className="mission-wrapper" id="mission">
        <div className="row">
          <div className="mission-box">
            <div className="mission-text">
            {this.state.typedText}       
            {this.state.timeout}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const MissionComp = withTranslation()(Mission);