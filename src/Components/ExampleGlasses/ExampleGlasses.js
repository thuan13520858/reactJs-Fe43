import React, { Component } from 'react'
import Style from './ExampleGlasses.module.css';

class ExampleGlasses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url : '',
            name: '',
            price: '',
            des: ''
        }
    }

    arrProduct = [

        {  id: 1, price: 30, name: 'GUCCI G8850U', url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
    ];
    changeStyle = (id) => {
        let item = this.arrProduct.find(element => element.id == id);
        let newState = {
            url : item.url,
            name: item.name,
            price: item.price,
            des: item.desc
        }
        this.setState(newState)
    }

    renderColumn() {
        let arrDiv = this.arrProduct.map((item, index) => {
            return <div className={`col-4 py-2 ${Style.boxItem}`} key = {index}>
                <a href="#" onClick = {() => this.changeStyle(item.id)}>
                    <img className={`w-100 ${Style.imgStyle}`} src={item.url} alt=""/>
                </a>
            </div>
        })
        return arrDiv;
    }

    render() {
        return (
            (
                <div className = {`container ${Style.area-Style}`}>
                    <div className="row">
                        <div className={`col-5 ${Style.leftBox}`}>
                            <h1>Virual Glasses</h1>
                            <div className = "row">
                            {this.renderColumn()}
                            </div>
                        </div>
                        <div className = "col-2"></div>
                        <div className ={`col-5 p-0 h-100 ${Style.rightBox}`}>
                            <img className= "w-100" src="./img/model.jpg" alt=""/>
                            <div className={Style.glass}>
                            <img className= "w-100" src={this.state.url} alt=""/>
                            </div>
                            {this.state.url ? (
                                <div className={`${Style.content} text-left text-white`}>
                                <h3 className = {Style.title}>{this.state.name}</h3>
                                <span className = {Style.priceStyle}>${this.state.price}</span>
                                <span className = {Style.priceType}>Stocking</span>
                                <p>{this.state.des}</p>
                            </div>
                            ) : ''}
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default ExampleGlasses
