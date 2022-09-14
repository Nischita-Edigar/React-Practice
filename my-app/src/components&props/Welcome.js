import React,{Component} from "react";
class Welcome extends Component {
    render(){
        return(
            <div>
                <h2>b.class components</h2>
                <h1>Welcome {this.props.name} {this.props.ask}</h1> {this.props.children}
            </div>
        ) 
    }

}
export default Welcome
