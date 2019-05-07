import React from 'react'

const withCounter = (WrappedComponent, incrementCounter) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          incrementCount = () => {
              this.setState( prevState => {
                  return {count: prevState.count + incrementCounter}
              })
          }
          
        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} { ...this.props}/>
        }
    }
    return NewComponent
}

export default withCounter