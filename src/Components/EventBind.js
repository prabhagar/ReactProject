import React, { Component } from 'react'


class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    //   this.eventHandling = this.eventHandling.bind(this);
    }

    // eventHandling() {
    //     this.setState({
    //         message : 'GoodBye'
    //     })
    // }

    eventHandling = () => {
        this.setState({
            message : 'GoodBye'
        })
    }
    
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        {/* <button onClick={this.eventHandling.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.eventHandling()}>Click</button> */}
        <button onClick={this.eventHandling}>Click</button>
      </div>
    )
  }
}

export default EventBind
