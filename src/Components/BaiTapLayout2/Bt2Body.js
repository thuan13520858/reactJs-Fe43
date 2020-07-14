import React, { Component } from 'react'
import Bt2Banner from './Bt2Banner'
import BT2Item from './BT2Item'

class Bt2Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "container">
                <Bt2Banner />
                <div className = "row">
                    <div className = "col-3">
                        <BT2Item />
                    </div>
                    <div className = "col-3">
                     <BT2Item />
                    </div>
                    <div className = "col-3">
                        <BT2Item />
                    </div>
                    <div className = "col-3">
                        <BT2Item />
                    </div>
                </div>
            </div>
        )
    }
}

export default Bt2Body
