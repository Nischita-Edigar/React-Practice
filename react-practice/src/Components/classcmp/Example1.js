import React  from 'react'
class Example1 extends React.Component{
    constructor(props) {
        super(props)
        console.log("this is constructor")  //constructor method executes first
        
    }
    render(){
        console.log("this is render")
        return <h2>Example 1 for class component</h2>
    }
}
export default Example1