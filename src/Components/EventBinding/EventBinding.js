import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    clickHandlerDefault = ()=> {
        alert('hello fe43');
    }

    clickHandler = (msg)=> {
        alert(msg);
    }

    render() {
        return (
            <div>
                <h3>Cach 1: Truyền callback function  xử lý sự kiện</h3>
                <button type="button" class="btn btn-primary" onClick = {this.clickHandlerDefault}>Click Me!</button>
                <br/>
                <h4>Cách 2: dùng arrow fucntion</h4>
                <button type="button" class="btn btn-dark" onClick = {() => this.clickHandler('hello')}>Click Me!</button>
            </div>

        )
    }
}

export default EventBinding
