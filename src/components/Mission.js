import React, { Component } from "react";
import Typed from "react-typed";
import '../styles/Mission.scss';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsTime: false
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ itsTime: true });
      }.bind(this),
      4500
    );
  }

  render() {
    let timeout = undefined;
    if (this.state.itsTime) {
      timeout = (
        <Typed strings={["With ease, on time, with no pain."]} typeSpeed={40} />
      );
    }

    return (
      <div className="mission-wrapper" id="mission">
        <div className="row">
          <div className="mission-box">
            <div className="mission-text">
              <Typed
                strings={[
                  "We help companies digitalize their ventures and products."
                ]}
                typeSpeed={40}
                style={{ color: "#000" }}
              />
              <br />
              {timeout}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
