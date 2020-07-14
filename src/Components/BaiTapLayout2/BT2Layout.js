import React, { Component } from 'react'
import BT2Header from './BT2Header'
import Bt2Body from './Bt2Body'
import BT2Footer from './BT2Footer'

class BT2Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <BT2Header />
                <Bt2Body />
                <BT2Footer />
            </div>
        )
    }
}

export default BT2Layout
