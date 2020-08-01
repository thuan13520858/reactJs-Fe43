import React, { Component } from "react";
import './style.css'
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";
import { connect } from "react-redux";
import * as  CONST from '../../redux/Constants/GameBauCuaConst'

class GameBauCua extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="bau-cua">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="bau-cua__tien font-weight-bold">
                Tổng Tiền : {this.props.total}$
            </div>
            <h2 className="text-center text-danger">Bầu Cua</h2>
            <div>
              <button className="btn btn-info"
              onClick = {()=>{this.props.playGame()}}>Chơi Game</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-7">
                <DanhSachCuoc />
            </div>
            <div className="col-md-12 col-lg-5">
                <XucXac />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
    return {
        total: state.stateGameBauCua.total
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        playGame : () => {
            const action = {
                type: CONST.PLAY_GAME
            }
            dispatch(action);
        }
    }
}


// export default GameBauCua;
export default connect(mapStatetoProps, mapDispatchtoProps)(GameBauCua)