import Login from './Components/functionalcmp/Login'
import Footer from './Components/functionalcmp/Footer'
import Example1 from './Components/classcmp/Example1'
import Example2 from './Components/classcmp/Example2'
import Empdata from './Display_data/Empdata'
import User from './Display_data/User'

let App=()=>{
    return <div>
        <h1>This is Functional component : </h1>
    {/* <Login/><Footer/> */}
    <h1>This is Class component : </h1>
    {/* <Example1/>
    <Example2/> */}
    <hr>
    </hr>  
    <Empdata/>
    <User/>

    </div>
}
export default App;