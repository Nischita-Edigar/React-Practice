import React, { Component } from 'react'

export class Change extends Component {
    state={message:"Gm"};   //keep property as a state object
     updateMessage=()=>{    //always keep method as a fat arrow function to set state
      this.setState({message: "Good Morning"})   //setState method should contains object

    }
  render() {
    return (
      <div>
        <h2>changing the state of the Message</h2>
        <h4>Message : {this.state.message}</h4>
        <button onClick={this.updateMessage}>Click to Change</button>
      </div>
    )
  }
}

export default Change
