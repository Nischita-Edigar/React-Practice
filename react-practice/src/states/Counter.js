import React, { Component } from 'react'

export class Counter extends Component {
    state={counter:1};
    incrementhandler=()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrementhandler=()=>{
        this.setState({counter:this.state.counter-1})
    }
  render() {
    return (
      <><h2>counter : {this.state.counter}</h2>
      <button onClick={this.incrementhandler}>Increement Counter</button>
      <button onClick={this.decrementhandler}>Decreement Counter</button>
        
      </>
    )
  }
}

export default Counter
