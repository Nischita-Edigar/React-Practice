import React from 'react';

// function Greet() {
//     return <h1>Hello There...!!</h1>
// }
//const Greet=()=> <h1>Hello There...!</h1>  -- to display without names
const Greet=(props)=>{
    console.log(props);
    return(
        // <h1>Hello {props.name}...!  {props.ask}</h1>  //with names
        //  {props.children}  --- jsx element can contain only one wrapper html element
        <div>
            <h2>a.function components</h2>
            <h1>Hello {props.name}...!  {props.ask}</h1>  
          {props.children}
        </div>           //so it can be wrapped by div tag

    ) 

}
 
export default Greet