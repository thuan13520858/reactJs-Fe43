import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderProList = () => {
    return this.props.proList.map((item, index) => {
      return (
        <Product
          data={item}
          key={index}
          handleSelected={this.props.handleSelected}
          handleBuyProduct = {this.props.handleBuyProduct}
        />
      );
    });
  };

  render() {
    return <div className="row">{this.renderProList()}</div>;
  }
}

export default ProductList;
