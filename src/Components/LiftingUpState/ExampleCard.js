import React, { Component } from "react";
import data from "../../data/data.json";
import Product from "./Product";
import ProductList from "./ProductList";
import Card from "./Card";

class ExampleCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      proList: data,
      proSelected: null,
      dataInCard: { ...data[0], cnt: 0 },
      cardList: [],
    };
  }

  handleSelected = (pro) => {
    this.setState({
      proSelected: pro,
    });
  };

  handleBuyProduct = (card) => {
    let newCard;
    let index = this.state.cardList.findIndex((item) => item.maSP == card.maSP);
    if (index < 0) {
      card = { ...card, cnt: 1 };
      newCard = [...this.state.cardList, card];
    } else {
      this.state.cardList[index].cnt += 1;
      newCard = this.state.cardList;
    }
    this.setState({
      cardList: newCard,
    });
  };

  deleteProduct = (id) => {
    let index = this.state.cardList.findIndex((item) => item.maSP == id);
    let newCard = [...this.state.cardList];
    newCard.splice(index, 1);
    this.setState({
        cardList: newCard,
    });
  }

  render() {
    let { proSelected } = this.state;
    return (
      <div className="container">
        <Card cardList={this.state.cardList} 
              deleteProduct = {this.deleteProduct}/>
        <ProductList
          proList={this.state.proList}
          handleSelected={this.handleSelected}
          handleBuyProduct={this.handleBuyProduct}
        />
        {proSelected ? (
          <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={proSelected.hinhAnh} />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{proSelected.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{proSelected.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{proSelected.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{proSelected.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{proSelected.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{proSelected.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ExampleCard;
