import React, { Component } from 'react';
import BaiTapBurgerComponent from './BaiTapBurgerComponent';
import MenuComppnent from './MenuComponent';

class BaiTapBurgerMain extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "container">
                <div className="row">
                   <div className="col-7">
                        <BaiTapBurgerComponent />
                   </div>
                   <div className="col-5">
                        <MenuComppnent />
                   </div>
                </div>
            </div>
        )
    }
}

export default BaiTapBurgerMain
