import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayOut/BaiTapLayout';
import BT2Layout from './Components/BaiTapLayout2/BT2Layout';
import DataBinding from './Components/DataBinding/DataBinding';
import EventBinding from './Components/EventBinding/EventBinding';
import RenderWithState from './Components/RenderWithState/RenderWithState';
import BaiTapStateCar from './Components/BaiTapStateCar/BaiTapStateCar';
import RenderWithMap from './Components/RenderWithState/RenderWithMap/RenderWithMap';
import ExampleGlasses from './Components/ExampleGlasses/ExampleGlasses';
import DemoProps from './Components/Props/DemoProps';
import ExampleCard from './Components/LiftingUpState/ExampleCard';
import BaiTapGioHang from './Components/BaiTapRedux/BaiTapGioHang/BaiTapGioHang';
import BaiTapBurgerMain from './Components/BaiTapRedux/BaiTapBurger/BaiTapBurgerMain';

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
      {/* <BaiTapLayout /> */}
      {/* <Header /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <RenderWithState /> */}
      {/* <BaiTapStateCar /> */}
      {/* <RenderWithMap /> */}
      {/* <ExampleGlasses /> */}
      {/* <DemoProps /> */}
      {/* <ExampleCard /> */}
      {/* <BaiTapGioHang /> */}
      <BaiTapBurgerMain />
    </div>
  );
}

export default App;
