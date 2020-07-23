import React, { Component } from "react";
import GioHang from "./GioHang";
import DanhSachSanPham from "./DanhSachSanPham";
import data from "../../../data/data.json";

class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proSelected: data[0],
    };
  }

  render() {
    let { proSelected } = this.state;
    return (
      <div className="container">
        <GioHang />
        <DanhSachSanPham dataProvider={data} />
      </div>
    );
  }
}

export default BaiTapGioHang;
