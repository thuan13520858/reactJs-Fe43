import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Action from '../../redux/actions/GameTaiXiuAction'

class Control extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderXucXac = () => {
        return this.props.xucXac.map((item, index) => {
            return (
                <span key = {index}>
                    <i
                      className={item.classes}
                      style={{ color: "white", fontSize: 150 }}
                    />
            </span>
            )
        })
    }

    render() {
        return (
            <div className="xi-ngau__control row text-center mt-4">
                <div className="col-4">
                  <button
                    className="btn btn-lg rounded-circle"
                    style={{ overflow: "hidden" }}
                    onClick = {()=> {this.props.selectType(true)}}
                  >
                    <img src="./img/tai.PNG" alt="tai" />
                  </button>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-around">
                    {this.renderXucXac()}
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-lg rounded-circle"
                    style={{ overflow: "hidden" }}
                    onClick = {()=>{this.props.selectType(false)}}
                  >
                    <img src="./img/xiu.PNG" alt="xiu" />
                  </button>
                </div>
            </div>
              
        )
    }
}

const mapDispatchtoProps = (dispatch, ownState) => {
  return {
   selectType : (flg) => {
      dispatch(Action.selecType(flg));
   }
  }
}

const mapStatetoProps = (state) => {
    return {
        xucXac :state.stateGameTaixiu.xucXac
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Control)
