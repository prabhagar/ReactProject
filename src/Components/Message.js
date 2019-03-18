import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome to React'
        } 
    }

    changeMessage() {
        this.setState({
            message: 'Thanks and Happy Leaning'
        })
    }


    render() {
        return (
        <div>
        <h1>{this.state.message}</h1>  
        <button onClick={() => this.changeMessage()}>Enjoy Learning</button> 
        </div>)
    }
}

export default Message