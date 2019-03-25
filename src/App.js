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
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';

class App extends Component {
  render() {
    return (
    //  <Form/>
    <LifeCycleA/>
    );
  }
}

export default App;
