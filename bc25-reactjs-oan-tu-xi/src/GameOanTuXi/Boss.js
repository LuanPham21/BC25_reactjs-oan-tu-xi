import React, { Component } from "react";
import { connect } from "react-redux";

class Boss extends Component {
  render() {
    let keyframe = `@keyframes random${Date.now()}{
      0% {top: -30px;}
      25% {top: 30px;}
      50% {top: -30px;}
      75% {top: 30px;}
      100% {top: 0;}
    }`;
    return (
      <>
        <style>{keyframe}</style>
        <div className="speech-bubble boss">
          <img
            style={{
              animation: `random${Date.now()} 0.5s`,
            }}
            src={this.props.oanTuXiBoss.anh}
            alt="boss"
          />
        </div>
        <img src="./img/playerComputer.png" className="game__img" alt="" />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    oanTuXiBoss: state.GameTuXiReducer.oanTuXiBoss,
  };
};

export default connect(mapStateToProps)(Boss);
