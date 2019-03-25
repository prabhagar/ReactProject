import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Prabhagar'
      }
      console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    } 

    componentDidMount () {
        console.log('LifeCycleA ComponentDidMount')
    }

    shouldComponentUpdate () {
      console.log('LifeCycleA shouldComponent update')
      return true
    }

    componentDidUpdate() {
      console.log('LifeCycleA componentDidUpdate')
    }

    getSnapshotBeforeUpdate () {
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null
    }

    changeState = () => {
      this.setState({
        name:'Prabhagar Tamizhselvan'
      })
    }
    
  render() {
    console.log('LifeCycleA render method')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
