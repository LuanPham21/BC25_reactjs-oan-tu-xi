import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="speech-bubble">
          <img
            src={this.props.oanTuXi.find((item) => item.datCuoc === true).anh}
          />
          ;
        </div>
        <img src="./img/player.png" className="game__img" alt="" />
        <div>
          {this.props.oanTuXi.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <button
                style={border}
                onClick={() => {
                  this.props.datCuoc(item.ma);
                }}
              >
                <img src={item.anh} className="oanXuXi" alt="" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (oanTuXi) => {
      let action = {
        type: "Oan_Tu_Xi",
        oanTuXi,
      };
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    oanTuXi: state.GameTuXiReducer.oanTuXi,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
