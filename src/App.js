import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayOut/BaiTapLayout';
import BT2Layout from './Components/BaiTapLayout2/BT2Layout';
import DataBinding from './DataBinding/DataBinding';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header /> */}
      <DataBinding />
    </div>
  );
}

export default App;
