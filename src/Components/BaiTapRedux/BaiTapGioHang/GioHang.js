import React, { Component } from 'react';
import {connect} from 'react-redux'

class GioHang extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    total = 0;
    renderCard = () => {
        return this.props.gioHang.map((item, index) => {
          this.total += item.giaBan * item.cnt;
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={item.hinhAnh} alt="" style={{ width: 100 }} />
              </td>
              <td>{item.tenSP}</td>
              <td>{item.giaBan}$</td>
              <td>
                <button className="btn btn-info" onClick = {() => this.props.changeCount(item.maSP, false)}>-</button>
                <span className="mx-5"></span>
                <button className="btn btn-info" onClick = {() => this.props.changeCount(item.maSP, true)}>+</button>
              </td>
              <td>{(item.giaBan * item.cnt).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick ={() => this.props.xoaSanPham(item.maSP)}
                >
                  xóa
                </button>
              </td>
            </tr>
          );
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Card</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Hình Ảnh</th>
                                <th>Tên sảm phẩm</th>
                                <th>Giá bán</th>
                                <th>số lượng</th>
                                <th>thành giá</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderCard()}</tbody>
                        <tfoot>
                            <tr>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td>{(this.total).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        gioHang: state.stateBaiTapGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaSanPham : (idSanPham) => {
            const action = {
                type: 'XOA', // giá trị bắt buộc phải có
                id : idSanPham
            }
            dispatch(action);
        },
        /**
         * idSanPham: mã sản phẩm
         * flg: true: tăng, false: giảm
         */
        changeCount : (idSanPham, flg) => {
            const action = {
                type: 'CHANGE_COUNT', // giá trị bắt buộc phải có
                id : idSanPham,
                flg
            }
            dispatch(action)
        }
    }
        
}

// export default GioHang
export default connect(mapStatetoProps, mapDispatchToProps)(GioHang)