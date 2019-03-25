import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Prabhagar'
      }
      console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    } 

    componentDidMount () {
        console.log('LifeCycleB ComponentDidMount')
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
    
  render() {
    console.log('LifeCycleB render method')
    return (
      <div>
        LifeCycleB
      </div>
    )
  }
}

export default LifeCycleB
