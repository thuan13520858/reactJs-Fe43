// rcc
import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTProductList from './BTProductList'
import BTFooter from './BTFooter'
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
               <BTHeader />
               <BTCarousel />
               <BTProductList />
               <BTFooter />
            </div>
        )
    }
}

export default BaiTapLayout
