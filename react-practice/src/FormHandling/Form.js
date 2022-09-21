import React from "react";
class Form extends React.Component{
    state={email:'',password:''}
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
        //invoke the backend API to login
    }
    render(){
        return<div>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <form onSubmit={this.submitHandler}> 
                    <div className=" form-group">
                         <input onChange={this.emailHandler}   type="email" className="form-control" placeholder="Enter Email Id"></input>
                     </div>
                     <div className=" form-group">
                       <input onChange={this.passwordHandler}  type="password" className="form-control" placeholder="Enter Password"></input>
                     </div>
                     <div className=" form-group">
                        <input type="submit" value="login" className="btn btn-primary"></input>
                     </div>    
                    </form>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Form