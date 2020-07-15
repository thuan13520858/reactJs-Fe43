import React, { Component } from 'react'

class RenderWithState extends Component {
    constructor(props) {
        super(props)

        // this.state: thuộc tính chứa những giá tri thay đổi khi người dùng theo tác trên giao diện
        this.state = {
            isLogin: false
        }
    }
    userName = 'thuan';

    renderContent = () => {
        if(this.state.isLogin) {
            return <div><h1>hello {this.userName}</h1>
            <button onClick = {()=>this.logout()}>Logout</button></div>
        }
        return <button onClick = {()=>this.login()}>Login</button>
    }

    login = () => {
        // this.isLogin = true;
        // console.log(this.isLogin);
        // this.render();
        // phương thức setState có 2 nhiệm vụ, 1 là set lại giá trị mới cho state, 2 là render lại giao diện
        // phương thức this.setState là 1 phương thức bất đồng bộ
        let newState = {
            isLogin : true
        }
        this.setState(newState, ()=> {
            console.log("state then: ", this.state);
        });
        console.log("state", this.state);

    }

    logout = () => {
        let newState = {
            isLogin : false
        }

        this.setState(newState);
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default RenderWithState
