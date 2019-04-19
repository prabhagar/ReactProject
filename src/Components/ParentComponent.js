import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import MemoComp from './MemoComp';

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parent: 'parent component'
      }
      this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parent} from ${childName}`); 
    }
    
    componentDidMount() {
      setInterval(() => {
        this.setState({
          parent: 'Prabhagar'
        })
      }, 2000)
    }


    
  render() {
    console.log("Parent Component Renderer")
    return (
      <div>
        <MemoComp name={this.state.parent} />
        {/* <ChildComponent greetHandler={this.greetParent}></ChildComponent> */}
      </div>
    )
  }
}

export default ParentComponent
