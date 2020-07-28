import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderXucXac = () => {
        return this.props.xucXac.map((item, index) => {
            return (
                <div className = {`bau-cua__xoay bau-cua__xoay--${index + 1}`} key = {index}>
                <img src={item.url} alt="hinhanh" />
                </div>
            )
        })
    }

    render() {
        return (
          <div className="bau-cua__do w-100 h-100">
            <img src="./img/dia.png" alt="hinh" className="w-100 h-100" />
            {this.renderXucXac()}
          </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        xucXac: state.stateGameBauCua.xucXac,
    }
}

export default connect(mapStatetoProps)(XucXac)
