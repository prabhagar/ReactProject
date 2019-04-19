import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import Hero from './Components/Hero';
import ErrorBoundaries from './Components/ErrorBoundaries';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
