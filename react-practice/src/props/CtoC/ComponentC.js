import React from 'react'
import ComponentD from './ComponentD'
class ComponentC extends React.Component{
     user_id=20987;
     user={user_name:"Peter",user_email:"peter@gmail.com"}

    render(){
        return <div>
            <h2>This is ComponentC</h2>
            <ComponentD Info={"User information"} UserId={this.user_id} User={this.user}/>
           
        </div>
    }
}
export default ComponentC