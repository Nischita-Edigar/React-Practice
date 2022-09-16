import React from 'react'
class Empdata extends React.Component{
    emp_id=10098;
    emp_name="Steve";
    emp_salary=55934;
    emp_image="data:image/jpeg;base64,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"

    render(){
        return( <div>
            <h2>Employee details : </h2>
            <h3>Employee id : {this.emp_id}</h3>
            <h3>Employee Name : {this.emp_name}</h3>
            <h3>Employee Salary : {this.emp_salary} </h3>
            <img src={this.emp_image}></img>
        </div>
        )
    }
}

export default Empdata

