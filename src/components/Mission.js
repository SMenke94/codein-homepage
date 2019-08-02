import React, { Component } from "react";
import Typed from "react-typed";
import '../styles/Mission.scss';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsTime: false,
      typedText: undefined,
      timeout: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    setTimeout(() => {
      this.setState({
        timeout:
          <Typed
            strings={["With ease, on time, no pain."]}
            typeSpeed={40}
          />
      })
    }, 4500);

    if (window.pageYOffset > window.innerHeight - 100) {
      const typedText = (
        <div>
        <Typed
          strings={[
            "We help you digitize your ventures and products."
          ]}
          typeSpeed={40}
          style={{ color: "#6A6A6A" }}
        />
          </div>
      );
      this.setState({ typedText });
    }
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

export default Mission;
