import React, { Component } from 'react'
import Control from './Control';
import Result from './Result';
import PlayGame from './PlayGame';

class GameTaiXiu extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
          <div>
            <section
              className="xi-ngau"
              style={{
                background: "url(./img/bg.jpg)",
                height: "100vh",
                overflowX: "hidden",
              }}
            >
              <h1
                className="text-center"
                style={{ color: "white", fontWeight: "bold", fontSize: 50 }}
              >
                Game Tài Xỉu
              </h1>
              <Control />
              <Result />
              <PlayGame />
            </section>
          </div>
        );
    }
}

export default GameTaiXiu
