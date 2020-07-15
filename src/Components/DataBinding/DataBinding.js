import React, { Component } from 'react'
import styeDatabinding from './DataBinding.module.css'

class DataBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    sanPham = {
        ma: 1,
        tenSP: 'Iphone X',
        gia: 1000,
        hinhAnh : `https://picsum.photos/200/200`
    }

    renderInfo = () => {
        return  <div className = "container">
            <div className = "w-25">
                <div className="card">
                    <img className="card-img-top" src={this.sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.sanPham.tenSP}</h4>
                        <p className="card-text">{this.sanPham.gia}</p>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        let title = "CYBERSOFT";
        let srcImg = `https://picsum.photos/200/200`
        let hocvien = {
            ma:1,
            ten: "nguyen van a"
        }
        const renderImg = () => {
            return (
                <img src = "https://picsum.photos/200/200"/>
            )
        }
        return (
            <div>
                <header className= {styeDatabinding.header}> This is header</header>
                <h1 id="title" className = "titleDemo">{title}</h1>
                <img src= {srcImg} />
                <div>
                    <img src= {srcImg} />
                    <div className="card-body">
                        <h4 className={`${styeDatabinding.bgTest} card-title`}>{hocvien.ma}</h4>
                        <p className="card-text">{hocvien.ten}</p>
                    </div>
                </div>
                <div className = "container">
                    {renderImg()}
                </div>
                {this.renderInfo()}
            </div>
        )
    }
}

export default DataBinding
