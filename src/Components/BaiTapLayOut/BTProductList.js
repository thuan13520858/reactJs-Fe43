import React, { Component } from 'react'
import BTProduct from './BTProduct'

class BTProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "container">
                <div className="row">
                    <BTProduct />
                    <BTProduct />
                    <BTProduct />
                    <BTProduct />
                    <BTProduct />
                    <BTProduct />
                    <BTProduct />
                    <BTProduct />
                </div>
            </div>
        )
    }
}

export default BTProductList
