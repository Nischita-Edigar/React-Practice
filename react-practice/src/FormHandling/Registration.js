import React, { Component } from 'react'

export class Registration extends Component {
    state={Name:"",number:"",email:"",password:"",state:"",gender: ""}
    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <div className="container">
                <div className="row">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="col-md-4">
                      <form onSubmit={this.submitHandler}> 
                      <h3 className='text-center'>Registration Form</h3>
                    <div className=" form-group">
                       <input onChange={this.updateHandler}  type="text" className="form-control" placeholder="Enter Your Name" name='Name'></input>
                     </div>
                     <div className=" form-group">
                       <input onChange={this.updateHandler}  type="number"  minLength='10' maxLength='10' className="form-control" placeholder="Enter your Mobile Number" name='number'></input>
                     </div>
                    <div className=" form-group">
                         <input onChange={this.updateHandler}   type="email" className="form-control" placeholder="Enter Email Id" name='email'></input>
                     </div>
                     <div className='form-group'>
                      <label>Gender : </label>&nbsp;&nbsp;
                    
                       <input onChange={this.updateHandler}  type="radio"   name='gender' value='Female' />Female  &nbsp;&nbsp;
                        <input onChange={this.updateHandler}  type="radio"  name='gender' value='Male' />Male  &nbsp;&nbsp;
                        <input onChange={this.updateHandler}  type="radio"  name='gender' value='Others' />Others  &nbsp;&nbsp;
                        </div>
                     <div className=" form-group">
                       <input   type="password" className="form-control" placeholder="Enter Password"/>
                     </div>
                     <div className=" form-group">
                       <input onChange={this.updateHandler}  type="password" className="form-control" placeholder="Confirm Password" name='password'></input>
                     </div>
                     <div className=" form-group">
                       <select onChange={this.updateHandler} type="dropdown" className="form-control" name="state">
                       <option>Select State</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        </select>
                     </div>
                     <div className=" form-group">
                        <input type="submit"  value="login" className="btn btn-primary"></input>
                     </div>    
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                
            
            
        
     
    )
  }
}

export default Registration
