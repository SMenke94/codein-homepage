import React, { Component } from "react";
import Typed from "react-typed";
import '../styles/Mission.scss';
import { withTranslation} from 'react-i18next';

class MissionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsTime: false,
      typedText: undefined,
      timeout: undefined,
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

      setTimeout(() => {
        this.setState({
          timeout:
            <Typed
              strings={[t('mission.line2')]}
              typeSpeed={40}
            />
        });
      }, 4500);

    if (window.pageYOffset > window.innerHeight - 100) {
      const typedText = (
        <div>
        <Typed
          strings={[t('mission.line1')]}
          typeSpeed={40}
          style={{ color: "#6A6A6A" }}
        />
        </div>
      );
      this.setState({typedText});
    }
  };

  updateContent = () => {
    this.setState({ typedText:"", timeout: ""})
    // this.setState({timeout: "", clicked: true})
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

export const Mission = withTranslation()(MissionComponent);