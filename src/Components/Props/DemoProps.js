import React, { Component } from 'react';
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProp'

class DemoProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const dog = {
            url: 'https://picsum.photos/300/300',
            name: 'husky',
            age: 3
        }

        const cat = {
            url: 'https://picsum.photos/300/300',
            name: 'cat',
            age: 5
        }
        return (
            <div>
                <div className="card text-left">
                    <ClassProps dataProvider = {dog} />
                    <FunctionProps dataProvider = {cat}/>
                </div>
            </div>
        )
    }
}

export default DemoProps
