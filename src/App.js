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
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      {/* <StyleSheet primary= {true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
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
