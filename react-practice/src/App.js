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
import Change from './states/Change'
import Counter from './states/Counter'
import Cart from './states/Cart'
import Binding from './EventBinding/Binding'
import Employee from './ListRendering/Employee'
import Form from './FormHandling/Form'
import Registration from './FormHandling/Registration'

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
    <ComponentC/><hr></hr>
    <h1>Props-Class to Function</h1>
    <ComponentE/><hr></hr>
    <h1>Props-Function to Class</h1>
    <ComponentG/><hr></hr>
    <h1>React -- State Example1</h1>
    <Change/><hr></hr>
    <h1>React -- State Example2</h1>
    <Counter/><hr></hr>
    <h1>Cart -- Quantity Example</h1>
    <Cart/><hr></hr>
    <h1>Event Binding</h1>
    <Binding/><hr></hr>
    <h1>List Rendering</h1>
    <Employee/><hr></hr>
    <h1>Form Handling</h1>
    <Form/><hr></hr>
    <h1>Registration Form</h1>
    <Registration/>

    


    </div>
}
export default App;