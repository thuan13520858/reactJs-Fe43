import React, { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash';

class Form_Validation extends Component {
  constructor(props) {
    super(props);

    // this.state = {};
  }

  /**
   * Nguyen nhân dùng state cho value thay vì dùng props
   * => mỗi lần nhập liệu gọi hàm setState
   * -> rendderr chạy lại => render lấy value từ props
   * => nó lấy dữ liệu từ redux nên nó lại bindung lại dữ liệu cũ từ redux ma 
   * không phải state tư người dùng nhập vào
   * 
   * Khắc phục: 
   * Đưa dữ liệu người dùng bám nút chinh sửa vào state
   * => Dữ liệu hiện tại đang nằm trong props mói
   * => ta phải lấy các giá trị trong props mới gán lại cho state trước khi render được gọi
   * + Hiện có:
   * newprops: userEdit =  {
        taiKhoan: 'thuan-nvt',
        matKhau: '123',
        soDienThoai: '12346',
        hoTen: 'Thuận',
        email: 'thuan1819@gmail.com',
        maNhom: 'GP16'
    }
    state hiện tại: state = {
      values: {...}
      errors: {...}
    }
   */

  state = {
    values : {
        taiKhoan: '',
        matKhau: '',
        soDienThoai: '',
        hoTen: '',
        email: '',
        maNhom: ''
    },

    errors: {
        taiKhoan: '',
        matKhau: '',
        soDienThoai: '',
        hoTen: '',
        email: '',
        maNhom: ''
    }
  }

  onChangeHandler = (event) => {
    //debugger;
    let {value, name} = event.target;

    // Tách giá trị values và erors của state ra xử lý riêng
    let newValues = {...this.state.values, [name]: value};

    let errorMsg = '';
    let label = event.target.getAttribute('label');
    let type = event.target.getAttribute('type');
    // Check error

    if(value.trim() === '') {
        errorMsg += label + ' Không được bỏ trống '
    } else if (type === 'phone') {
        let regexNumber = /^[0-9]+$/;
        if(!regexNumber.test(value)) {
            errorMsg += label + ' Chỉ được phép nhập số';
        }
    } else if (type == 'email') {
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regexEmail.test(value)) {
            errorMsg += label + ' không hợp lệ';
        }
    }
    let newErrors = {...this.state.errors, [name]: errorMsg};
    this.setState({
        // [name]: value
        values: newValues,
        errors: newErrors
    },() => {
        console.log('state', this.state);
    })
  }

  handleSubmit = (event) => {
      event.preventDefault();

      let {values, errors} = this.state;
      //
      for(let key in  values) {
          if (key === 'edit') {
            continue;
          }
          if (values[key].trim() === '') {
            alert('Dữ liệu không hợp lệ');
            return;
          }
      }

      for(let key in  errors) {
        if (errors[key].trim() !== '') {
          alert('Còn dữ liệu chưa hợp lệ');
          return;
        }
      }
    const action  = {
        type: 'REGISTER',
        values
    }
    this.props.dispatch(action);
  }
  // Chạy sau khi nhận props mới và trước khi render => trả về state mới

  // static getDerivedStateFromProps(newprops, curstate) { // props mới và state hiện tại
  //     console.log('getDerivedStateFromProps');
  //     // lấy props mới và trả về state mới
  //    if (newprops.userEdit.taiKhoan === curstate.values.taiKhoan || !newprops.userEdit.edit) {
  //      return null;
  //    }
  //    // newprops mới lấy từ reducer về
  //    let newState = {...curstate, values: newprops.userEdit}
  //    return {...newState};  // trả về state mới
  // }

  componentWillReceiveProps(newProps) {
    // chạy sau khi nhận prosp mới và trước khi render
    this.setState({
      values: newProps.userEdit
    })
  }

  render() {
    console.log('render');
    let {values} = this.state;
    return (
      <form className="container-fluid">
        <div className="card text-white bg-dark text-light">
          <div className="card-header">
              <h1>Form đăng ký</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Tài khoản</p>
                  <input label = "Tài khoản" type="text" className="form-control" name="taiKhoan" 
                  onChange = {this.onChangeHandler}
                  defaultValue = {values.taiKhoan}
                  value = {values.taiKhoan}/>
                  <p className="text text-danger">{this.state.errors.taiKhoan}</p>
                </div>
                <div className="form-group">
                  <p>Mậu khẩu</p>
                  <input
                    label = "Mật khẩu"
                    type="password"
                    className="form-control"
                    name="matKhau"
                    onChange = {this.onChangeHandler}
                    defaultValue = {values.matKhau}
                    value = {values.matKhau}
                  />
                   <p className = "text text-danger">{this.state.errors.matKhau}</p>
                </div>
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    label = "Số điện thoại"
                    type="phone"
                    className="form-control"
                    name="soDienThoai"
                    onChange = {this.onChangeHandler}
                    defaultValue = {values.soDienThoai}
                    value = {values.soDienThoai}
                  />
                   <p className = "text text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ Tên</p>
                  <input type="tel" className="form-control" name="hoTen"  label = "Họ tên"
                   onChange = {this.onChangeHandler} defaultValue = {values.hoTen}
                    value = {values.hoTen}/>
                   <p className = "text text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input type="email" className="form-control" name="email" label = "Email"
                   onChange = {this.onChangeHandler} 
                   defaultValue = {values.email}
                   value = {values.email}/>
                   <p className = "text text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group">
                  <p>Mã nhóm</p>
                  <input type="text" className="form-control" name="maNhom" label = "Mã nhóm"
                   onChange = {this.onChangeHandler}
                   defaultValue = {values.maNhom}
                    value = {values.maNhom}/>
                  <p className = "text text-danger">{this.state.errors.maNhom}</p>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-success"
                  onClick = {this.handleSubmit}>
                    Đăng ký
                  </button>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-success"
                  onClick = { () => {
                    this.props.dispatch({
                      type: 'UPDATE',
                      user: this.state.values
                    })
                  }
                  }>
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

// const mapDispatchtoProps = (dispatch) => {
//    return {
//        register : (values) => {
//            const action  = {
//                type: 'REGISTER',
//                values
//            }
//            dispatch(action);
//        }
//    }
// }
const mapStatetoProps = (state) => {
  return {
      userEdit: state.stateQLSV.userEdit
  }
}

// export default connect(mapDispatchtoProps)(Form_Validation)
// khi set null thì redux sẽ sinh cho 1 props là dispatch để kết nối đến reducer
export default connect(mapStatetoProps)(Form_Validation)

