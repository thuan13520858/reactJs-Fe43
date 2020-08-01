import React, { Component } from 'react'
import { connect } from 'react-redux';

class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <div
            className="xi-ngau__ket-qua text-center mt-4"
            style={{ color: "white", fontWeight: "bold", fontSize: 30 }}
          >
            <p>
              Bạn Chọn :{" "}
            <span style={{ color: "#f5cc74", fontSize: 35 }}>{this.props.taiXiu ? 'Tài': 'Xỉu'}</span>
            </p>
            <p>
              Số Bàn Thắng :{" "}
                <span style={{ color: "#f5cc74", fontSize: 35 }}>{this.props.soBanThang}</span>
            </p>
            <p>
              Tổng Số Bàn Chơi :
              <span style={{ color: "#f5cc74", fontSize: 35 }}>{this.props.soBanChoi}</span>
            </p>
          </div>
        );
    }
}

const mapStatetoProps = (state) => {
    const {taiXiu, soBanThang, soBanChoi} = state.stateGameTaixiu;
    return {
        taiXiu,
        soBanThang,
        soBanChoi
    }
}

// export default Result
export default connect(mapStatetoProps)(Result)
