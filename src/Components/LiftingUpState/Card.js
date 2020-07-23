import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  renderCard = () => {
    return this.props.cardList.map((item, index) => {
      this.state.total += item.giaBan * item.cnt;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <img src={item.hinhAnh} alt="asda" style={{ width: 100 }} />
          </td>
          <td>{item.tenSP}</td>
          <td>{item.giaBan}$</td>
          <td>
            <button className="btn btn-info" onClick = {() => this.props.changCountProduct(item.maSP, false)}>-</button>
            <span className="mx-2">{item.cnt}</span>
            <button className="btn btn-info" onClick = {() => this.props.changCountProduct(item.maSP, true)}>+</button>
          </td>
          <td>{(item.giaBan * item.cnt).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteProduct(item.maSP)}
            >
              xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
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
              <td>{this.state.total.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Card;
