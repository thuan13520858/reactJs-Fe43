// rcc
import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTProductList from './BTProductList'
import BTFooter from './BTFooter'
import './style.scss'

class BaiTapLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    // nội dung react class component chứa trong phương thức
    render() {
        return (
            <div>
                <h1 className = 'demo'>ABC</h1>
               <BTHeader />
               <BTCarousel />
               <BTProductList />
               <BTFooter />
            </div>
        )
    }
}

export default BaiTapLayout
