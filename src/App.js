import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name='Bruce' heroName='Batman'>
        <p>I am Batman</p></Greet>
        <Greet name='Clark' heroName='SuperMan'>
        <button>Activate Super Power</button>
        </Greet>
        <Greet name='Diana' heroName='WonderWoman'/>
        <Welcome name='Bruce' heroName='Batman'>
        <p>Trained by Prabhagar</p>
        </Welcome>
        <Welcome name='Tobey' heroName='SpiderMan'>
        <button>Spread the web</button>
        </Welcome>
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
