import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  render() {
    return (
      <>
        <div className=" text-warning game__title text-center mt-5 display-4 font-weight-bold">
          {this.props.ketqua}
        </div>
        <div className="mt-4">
          <div className="display-4 text-success font-weight-bold">
            Số bàn thắng:
            <span className="text-warning"> {this.props.soBanThang}</span>
          </div>
          <div className="display-4 text-success font-weight-bold">
            Số bàn chơi:
            <span className="text-warning"> {this.props.tongSoBanChoi}</span>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    soBanThang: state.GameTuXiReducer.soBanThang,
    tongSoBanChoi: state.GameTuXiReducer.tongSoBanChoi,
    ketqua: state.GameTuXiReducer.ketqua,
  };
};

export default connect(mapStateToProps)(ThongTinGame);
