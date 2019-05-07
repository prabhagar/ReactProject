import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

  render() {
      const { count, incrementCount } = this.props
    return (
      <div>
        <button onMouseOver={incrementCount}><h1> {this.props.name} Hovered {count} times</h1></button>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 10)
