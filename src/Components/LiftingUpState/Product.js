import React from "react";

function Product(props) {
  let {data, handleSelected, handleBuyProduct} = props;

  let onClickHandler = () => {
    
  }
  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={data.hinhAnh} alt="asdsad" />
        <div className="card-body">
          <h4 className="card-title">{data.tenSP} Live</h4>
          <button className="btn btn-success" onClick = {()=> handleSelected(data)}>Chi tiết</button>
          <button type="button" className="btn btn-danger" onClick = {()=> handleBuyProduct(data)}>
            Mua
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
