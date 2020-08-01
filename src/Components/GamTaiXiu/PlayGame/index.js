import React, { Component } from 'react'

class PlayGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <div className="xi-ngau__play text-center">
            <button
              className="btn btn-success btn-lg"
              style={{
                fontSize: 30,
                backgroundColor: "white",
                color: "#d83226",
                fontWeight: "bold",
              }}
            >
              Chơi Game
            </button>
          </div>
        );
    }
}

export default PlayGame
