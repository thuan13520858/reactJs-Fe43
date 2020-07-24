import React, { Component } from 'react'
import BTProduct from './BTProduct'

class BTProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    productList = [
        {
          image: "./img/sp_iphoneX.png",
          name: "iPhone X",
        },
        {
          image: "./img/sp_note7.png",
          name: "Note 7",
        },
        {
          image: "./img/sp_blackberry.png",
          name: "Blackberry",
        },
        {
          image: "./img/sp_vivo850.png",
          name: "Vivo850",
        },
        {
            image: "./img/sp_blackberry.png",
            name: "Blackberry",
          },
          {
            image: "./img/sp_iphoneX.png",
            name: "iPhone X",
          },
          {
            image: "./img/sp_note7.png",
            name: "Note 7",
          },
          {
            image: "./img/sp_blackberry.png",
            name: "Blackberry",
          },
      ];

    renderContent = () =>{
        // key: mỗi thẻ là 1 đối tượng từ mảng của react do đó cần có 1 key để xác định phần từ trong mang đối tượng
        const mang = this.productList.map((item, index) => {
            return  <BTProduct dataProvider = {item} key = {index}/>
        })
        return mang;
    }
    

    render() {
        return (
            <div className = "container">
                <div className="row">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default BTProductList
