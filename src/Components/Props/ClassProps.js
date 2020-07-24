import React, { Component } from 'react'

class ClassProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const {url, name} = this.props.dataProvider;
        return (
            <div>
                 <div className="card text-left">
                    <img className="card-img-top" style ={{width: 300, height: 300}} src={this.props.dataProvider.url} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.dataProvider.name}</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassProps
