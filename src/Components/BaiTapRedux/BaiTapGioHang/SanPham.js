import React, { Component } from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux';

class SanPham extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    let { sanPham } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="asdsad" />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP} Live</h4>
            <button
              className="btn btn-success" onClick = {() => {
                  this.props.xemChiTiet(sanPham)
              }}
            >
              Chi tiết
            </button>
            <button type="button" className="btn btn-danger"
              onClick = {() =>this.props.muaSanPham(sanPham)}>
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  }
}


// hàm lấy giá trị callback từ store về để đưa dữ liệ lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTiet: (sanPham) => {  // định nghĩa 1 props cho component này la 1 hàm
      // Dùng hàm dispatch của reudx đưa sản phẩm lên tát cả các reducer
      // DÙng hàm dispatch từ redux trả ra để đưa dữ liệu lên reducer xử lý

      const action = {
        type: 'XEM_CHI_TIET', // giá trị bắt buộc phải có
        sanPham
      }

      dispatch(action);  // gửi lên reducer
    },

    muaSanPham: (sanPham) => {
      const action = {
        type: 'THEM_SAN_PHAM', // giá trị bắt buộc phải có
        sanPham: sanPham
      }
      dispatch(action);  // gửi lên reducer
    }
  }
}

// export default SanPham
export default connect(null, mapDispatchToProps)(SanPham)
