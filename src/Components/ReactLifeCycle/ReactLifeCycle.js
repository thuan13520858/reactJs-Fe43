import React, { Component } from 'react'

export default class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number: 1
        }
    }
    
    static getDerivedStateFromProps(props, state) { // props mới và state hiện tại
        console.log('getDerivedStateFromProps');
        return null;
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.number}
                <button onClick={() => {
                    this.setState({number:this.state.number +1})
                }}>
                    +
                </button>
            </div>
        )
    }

    //chạy sau khi render và chỉ một lần duy nhất
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        // prevProps : là props mới , preState: state mới
        // Chạy sau render và chạy khi state hoặc props thay đổi
        // lưu ý: không setState trong life cycle này sẽ đi vào vòng lặp vô tận
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}
