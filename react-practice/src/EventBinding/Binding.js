import React, { Component } from 'react'

export class Binding extends Component {
    state={message:"Hello...!",info:"Time for"}
    updateMessage=(value,info)=>{
        this.setState({message:value,info:info})
    }

  render() {
    return <div>

        <h4>Message :{this.state.message}</h4>
        <h4>Info : {this.state.info}</h4>
      <button className='btn btn-primary' onClick={this.updateMessage.bind(this,"Good Morning...!","Time for Breakfast")}>8:30 AM</button>&nbsp;&nbsp;
      <button className='btn btn-primary' onClick={this.updateMessage.bind(this,"Good Afternoon...!","Time for Lunch")}>1:00 PM</button>&nbsp;&nbsp;
      <button className='btn btn-primary' onClick={this.updateMessage.bind(this,"Good Evening...!","Time for Dinner")}>8:30 PM</button>&nbsp;&nbsp;

    </div>
    
  }
}

export default Binding

