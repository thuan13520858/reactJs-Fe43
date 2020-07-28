import React, { Component } from 'react'
import {connect} from 'react-redux'

class MenuComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    total =  0;

    renderRow = () => {
        let itemRow = [];
        let cnt = 0;
        this.total = 0;
        for(let item in this.props.menu) {
            this.total += this.props.menu[item] * this.props.burger[item];
            let content = <tr key = {cnt++}>
                <td scope="row">{item}</td>
                <td>
                    <button className="btn btn-success"
                        onClick = {() => this.props.changeCount(true, item)}>+</button>
                    <span className="mx-1"></span>
                    <button className="btn btn-danger"
                        onClick = {() => this.props.changeCount(false, item)}>-</button>
                </td>
                <td>
                    {this.props.menu[item] * this.props.burger[item]}
                </td>
            </tr>
            itemRow = [...itemRow, content]
        }
        return itemRow;
    }

    render() {
        return (
            <div>
                <h1>Chọn thức ăn</h1>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Giá</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderRow()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.total}</td>
                            </tr>
                        </tfoot>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * flg: true: tăng, false: giảm
         * type: salad / cheese / beef
         */
        changeCount : (flg, kind) => {
            const action = {
                type: 'CHANGE_COUNT_BURGER',
                flg: flg,
                kind: kind
            }
            dispatch(action);
        }
    }
}

const mapStatetoProps = state => {
    return {
        menu: state.stateBaiTapBurger.menu,
        burger: state.stateBaiTapBurger.burger
    }
}

// export default MenuComponent
export default connect(mapStatetoProps, mapDispatchToProps)(MenuComponent)
