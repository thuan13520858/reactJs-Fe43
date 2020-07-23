import React, { Component } from 'react'
import SanPham from './SanPham';
import { connect } from 'react-redux';

class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderProList = () => {
    return this.props.dataProvider.map((item, index) => {
      return <SanPham key={index}
      sanPham={item} 
      />;
    });
  };

  render() {
    let {spChiTiet} = this.props;

    return (
      <div>
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">{this.renderProList()}</div>
        <div className="row">
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={spChiTiet.hinhAnh}/>
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{spChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{spChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{spChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{spChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{spChiTiet.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{spChiTiet.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
// Đây là hàm lấy state từ redux chuyển 
const mapStatetoProps = state => { // state là rootReducer
    return {
        spChiTiet: state.stateBaiTapGioHang.spChiTiet
    }
}

// export default DanhSachSanPham

// lấy state của redux
export default connect(mapStatetoProps)(DanhSachSanPham)
