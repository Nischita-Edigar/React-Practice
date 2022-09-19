import Login from './Components/functionalcmp/Login'
import Footer from './Components/functionalcmp/Footer'
import Example1 from './Components/classcmp/Example1'
import Example2 from './Components/classcmp/Example2'
import Empdata from './Display_data/Empdata'
import User from './Display_data/User'
import ComponentA from './props/FtoF/ComponentA'
import ComponentC from './props/CtoC/ComponentC'
import ComponentE from './props/CtoF/ComponentE'
import ComponentG from './props/FtoC/ComponentG'

let App=()=>{
    return <div>
        <h1>This is Functional component : </h1>
    <Login/><Footer/>
    <h1>This is Class component : </h1>
    <Example1/>
    <Example2/>
    <hr>
    </hr>  
    <Empdata/>
    <User/><hr></hr>
    <h1>Props-Function to function</h1>
    <ComponentA/><hr></hr>
    <h1>Props-Class to class</h1>
    <ComponentC/>
    <h1>Props-Class to Function</h1>
    <ComponentE/>
    <h1>Props-Function to Class</h1>
    <ComponentG/>
    


    </div>
}
export default App;