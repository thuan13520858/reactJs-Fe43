import React, { Component } from 'react'
import {connect} from 'react-redux'

class DanhSachCuoc extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderDanhSachCuoc = () => {
      return  this.props.danhSachCuoc.map((item, index) => {
        return (
          <div className="card col-4" key = {index}>
            <img
              className="card-img-top"
              src={item.url}
              alt="Card cap"
              style={{ height: 200 }}
            />
            <div className="card-body">
              <h5 className="card-title" />
              <div className="d-flex justify-content-around align-items-center">
                <button className="btn btn-info"
                onClick = {() => {this.props.datCuoc(item.id, false)}}>-</button>
                <span>{item.price}$</span>
                <button className="btn btn-info"
                 onClick = {() => {this.props.datCuoc(item.id, true)}}>+</button>
              </div>
            </div>
          </div>
        );
      })
    }

    render() {
        return (
            <div className="bau-cua__chon">
                <div className="bau-cua__bang row">
                  {this.renderDanhSachCuoc()}
                </div>
              </div>
        )
    }
}

const mapStatetoProps = (state) => {
  return {
    danhSachCuoc: state.stateGameBauCua.danhSachCuoc,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    datCuoc : (id, flg) => {
      const action = {
        type: 'DAT_CUOC',
        id: id,
        flg: flg
      }
      dispatch(action);
    }
  }
}

// export default DanhSachCuoc
export default connect(mapStatetoProps, mapDispatchtoProps)(DanhSachCuoc)