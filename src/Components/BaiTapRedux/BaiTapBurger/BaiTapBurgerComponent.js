import React, { Component } from 'react'
import style from './BaiTapBurger.module.css';
import { connect } from 'react-redux';

class BaiTapBurgerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        
        }
    }

    renderFood = () => {
        let divItem = [];
        let cnt = 0;
        for(let item in this.props.burger) {
            for (let i = 0; i < this.props.burger[item]; i++) {
                let htmlValue = <div className = {style[item]} key = {cnt++}></div>
                divItem = [...divItem, htmlValue];
            }
        }
        return divItem;
    }

    render() {
        return (
            <div>
                <div className={style.breadTop}></div>
                {this.renderFood()}
                <div className={style.breadBottom}></div>
            </div>
        )
    }

}

const mapStatetoProps = state => {
    return {
        burger: state.stateBaiTapBurger.burger
    }
}

// export default BaiTapBurgerComponent
export default connect(mapStatetoProps)(BaiTapBurgerComponent)
