import React, { Component } from 'react'

class RenderWithMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    mangSP = [
        {MaSP: 1, TenSP: 'Sony XPeria Z3', Gia: 15500000, HangSX: 'Sony'},
        {MaSP: 2, TenSP: 'Sony XPeria Z2', Gia: 16500000, HangSX: 'Sony'},
        {MaSP: 3, TenSP: 'Sony XPeria Z1', Gia: 17500000, HangSX: 'Sony'},
        {MaSP: 4, TenSP: 'Iphone X 64G', Gia: 20000000, HangSX: 'Apple'},
        {MaSP: 5, TenSP: 'Iphone XS Max 64G', Gia: 25500000, HangSX: 'Apple'},
        {MaSP: 6, TenSP: 'Iphone 11 Pro Max 64G', Gia: 27500000, HangSX: 'Apple'},
        {MaSP: 7, TenSP: 'Samsung Galaxy Note 8', Gia: 10000000, HangSX: 'SamSung'},
        {MaSP: 8, TenSP: 'Samsung Galaxy Note 9', Gia: 12000000, HangSX: 'SamSung'},
        {MaSP: 9, TenSP: 'Samsung Galaxy Note 10', Gia: 17000000, HangSX: 'SamSung'}
    ];

    renderProduct = ()=> {
        // td, tr: là đối tượng  của jsx
        let mangTr = this.mangSP.map((item, idx) => {
            return <tr key = {idx}>
                <td>{item.MaSP}</td>
                <td>{item.TenSP}</td>
                <td>{item.Gia}</td>
            </tr>
        })
        return mangTr;
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RenderWithMap
