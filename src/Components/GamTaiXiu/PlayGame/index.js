import React, { Component } from 'react'
import * as Actions from '../../redux/actions/GameTaiXiuAction'
import { connect } from 'react-redux';

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
              onClick = {() => {this.props.playGame()}}
            >
              Chơi Game
            </button>
          </div>
        );
    }
}

const mapDispatchtoProps = (dispatch) =>{
  return {
    playGame: () => {
      dispatch(Actions.playGame());
    }
  }
}

// export default PlayGame
export default connect(null, mapDispatchtoProps)(PlayGame)
