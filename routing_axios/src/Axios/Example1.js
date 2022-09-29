import React, { Component } from 'react'
import Axios from 'axios'

export class Example1 extends Component {
  state={
    users: []
  }
  getUserData=()=>{
   // document.getElementById('change').style.backgroundColor = "aqua"  to change button color

    
    Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response)=>{
          this.setState({users:response.data})
         }) 
         .catch((err)=>{
          console.log(err)
         })
        


  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <button id='change'  className="btn btn-warning"onClick={this.getUserData}>Get User Data</button>
         {this.state.users.length>0 ? <>
         <table className='table table-hover' border='2'>
          <thead>
            <th>Name
            </th>
            <th>id</th>
            <th>email</th>
          </thead>
          <tbody>
            {this.state.users.map((user)=>{
              return(
                <tr>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
          </tbody>
         </table>
         
         </> : null}
      </div>
    )
  }
}

export default Example1
