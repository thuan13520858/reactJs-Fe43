import React, { Component } from "react";
import Form_Validation from "./Form_Validation";
import { connect } from "react-redux";

class QLSV extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  renderSV = () => {
    return this.props.mangSV.map((item, index) => {
        return (
            <tr key = {index}>
                <td scope="row">{item.taiKhoan}</td>
                <td>{item.hoTen}</td>
                <td>{item.soDienThoai}</td>
                <td>{item.email}</td>
                <td>{item.maNhom}</td>
                <td>
                  <button type="button" className="btn btn-primary"
                  onClick = {
                    () => this.props.dispatch({
                      type: 'EDIT',
                      item
                    })
                  }>Edit</button>
                </td>
                <td>
                  <button type="button" className="btn btn-primary"
                  onClick = {
                    () => this.props.dispatch({
                      type: 'DELETE',
                      user: item
                    })
                  }>Xóa</button>
                </td>
            </tr>
        )
    })
       
  }

  render() {
    return (
      <div className="container">
        <Form_Validation />

        <table className="table mt-5">
          <thead>
            <tr>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Mã nhóm</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
            {this.renderSV()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
    return {
        mangSV: state.stateQLSV.mangSV
    }
}

// function mapStatetoProps (state) {
//     return {
//                 mangNguoiDung: state.stateQLSV
//             }
// }

// export default QLSV;
export default connect(mapStatetoProps)(QLSV)
