import React, { Component } from 'react'

class Form extends Component {
    
constructor(props) {
    super(props) 
    this.state = {
       userName: '',
       comments: '',
       technology: 'react'
    }
  }
  
  handleUserName = (event) => {
      this.setState({
          userName: event.target.value
      })
  }

  handleComments =(event) => {
      this.setState({
          comments: event.target.value
      })
  }

  handleTechnology = (event) => {
      this.setState({
          technology: event.target.value
      })
  }

  handleSubmit = (event) => {
     alert(`${this.state.userName}  ${this.state.comments}  ${this.state.technology}`)
     event.preventDefault()
  }
  
  
  render() {
      const {userName, comments, technology} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>User Name</label>
              <input type='text' value={userName} onChange={this.handleUserName}></input>
          </div>
          <div>
              <label>Comments</label>
              <input type='textarea' value={comments} onChange={this.handleComments}></input>
          </div>
          <div>
              <label>Technology</label>
              <select value={technology} onChange={this.handleTechnology}>
                  <option value='react'>React</option>
                  <option value='java'>Java</option>
                  <option value='vue'>Vue</option>
              </select>
          </div>
          <div>
              <button type='submit'>Submit</button>
          </div>
      </form>
    )
  }
}

export default Form
