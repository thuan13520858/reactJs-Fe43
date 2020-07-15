import React, { Component } from 'react'

class BaiTapStateCar extends Component {
    constructor(props) {
        super(props)

        this.state = {

            // thư mục gốc là public
            url : './img/products/red-car.jpg'
        }
    }

    changeContent = (color) => {
        let url;
        switch (color) {
            case 'red':
                url = './img/products/red-car.jpg';
                break;
            case 'silver':
                url = './img/products/silver-car.jpg';
                break;
            case 'black':
                url = './img/products/black-car.jpg';
                break;

        }
        this.setState({
            url :url
        })
    }

    render() {
        return (
            <div className = "container">
                <div className="row">
                    <div className="col-6">
                        <img className = "w-100" src={this.state.url} alt=""/>
                    </div>
                    <div className="col-6">
                        <h1>Change color</h1>
                        <button type="button" className="btn btn-danger mx-2" onClick = {() => this.changeContent('red')}>Red Color</button>
                        <button type="button" className="btn btn-secondary mx-2" onClick = {() => this.changeContent('silver')}>Silver Color</button>
                        <button type="button" className="btn btn-dark mx-2" onClick = {() => this.changeContent('black')}>Black Color</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaiTapStateCar
