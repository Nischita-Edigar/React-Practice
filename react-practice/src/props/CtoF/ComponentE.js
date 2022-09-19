import  React  from "react";
import ComponentF from './ComponentF';
class ComponentE extends React.Component{
    brand="ADIDAS"
    price=1999
    size=[32,34,36,38,40,42]
    render(){
        return<div>
            <h2>This is ComponentE</h2>
            <h4>Brand : {this.brand}</h4>
            <ComponentF Message = {"Available for sale"} Brand={this.brand} Size={this.size}/>
            
        </div>
    }
}
export default ComponentE