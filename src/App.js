import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParentComponent />
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
        {/* <Message /> */}
        {/* {<Greet name='Bruce' heroName='Batman'> */}
        {/* <p>I am Batman</p></Greet> */}
        {/* <Greet name='Clark' heroName='SuperMan'> */}
        {/* <button>Activate Super Power</button> */}
        {/* </Greet> */}
        {/* <Greet name='Diana' heroName='WonderWoman'> */}
        {/* <Welcome name='Bruce' heroName='Batman'> */}
        {/* <p>Trained by Prabhagar</p> */}
        {/* </Welcome> */}
        {/* <Welcome name='Tobey' heroName='SpiderMan'> */}
        {/* <button>Spread the web</button> */}
        {/* </Welcome>} */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
