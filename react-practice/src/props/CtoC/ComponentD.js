import React from 'react'

class ComponentD extends React.Component{
    
    render(){
        return <div>
            <h2>This is ComponentD</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>User Name : {this.props.User.user_name}</h4>
            <h4>User mail : {this.props.User.user_email}</h4>
           
        </div>
    }
}
export default ComponentD