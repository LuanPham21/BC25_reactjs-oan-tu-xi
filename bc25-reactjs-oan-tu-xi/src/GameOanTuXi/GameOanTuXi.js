import React, { Component } from "react";
import ThongTinGame from "./ThongTinGame";
import "./GameOanTuXi.css";
import Boss from "./Boss";
import { connect } from "react-redux";
import Player from "./Player";

class GameOanTuXi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-4">
          <div className="col-4">
            <Player></Player>
          </div>
          <div className="col-4">
            <ThongTinGame></ThongTinGame>
            <button
              className="btn btn-success p-2 display-4 mt-5 font-weight-bold"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Boss></Boss>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      // "Gui du lieu type PLAY_GAME len reducer"
      let count = 1;
      let randomBossItem = setInterval(() => {
        let action = {
          type: "PLAY_GAME",
        };
        dispatch(action);
        count++;
        if (count > 10) {
          clearInterval(randomBossItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    oanTuXi: state.GameTuXiReducer.oanTuXi,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuXi);
