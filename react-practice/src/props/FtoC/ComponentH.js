import React, { Component } from 'react'

export class ComponentH extends Component {
  render() {
    return (
      <div><h2>This is ComponentH</h2>
      <pre>{JSON.stringify(this.props)}</pre>
      <h4>{this.props.Message}</h4>
      <h4>Upto : {this.props.Number}</h4>
      <h4>List of EvenNumbers : {this.props.Even_Numbers}</h4>
        
      </div>
    )
  }
}

export default ComponentH
