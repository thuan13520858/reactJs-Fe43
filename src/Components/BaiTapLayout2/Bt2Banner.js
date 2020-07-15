import React, { Component } from 'react'

class Bt2Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <header className="jumbotron my-4">
                <h1 className="display-3">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
                <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
            </header>
        )
    }
}

export default Bt2Banner
