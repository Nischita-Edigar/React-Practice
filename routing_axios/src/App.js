import React, { Component } from 'react'
// import Navbar from './RoutingVersion5/Example1/Navbar'
//import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'--for version5
// import Home from './RoutingVersion5/Example1/Home'
// import About from './RoutingVersion5/Example1/About'
// import Services from './RoutingVersion5/Example1/Services'
// import Navbar1 from './RoutingVersion6/Navbar1'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home1 from './RoutingVersion6/Home1'
// import Services1 from './RoutingVersion6/Services1'
import Example1 from './Axios/Example1'

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
        <Navbar/>
        <Switch>
          <Route path="/Home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services"><Services/></Route>
        </Switch>
        </Router>
        <hr></hr> -------For version 5*/}


           {/* version 6 --use Routes instead of switch , use element instead of component */}
        {/* <Router>
        <Navbar1/>
        <Routes>   
          <Route path='/Home1' element={<Home1></Home1>}></Route>     
          <Route path='/Services1' element={<Services1></Services1>}></Route>

        </Routes>
        </Router>
         */}
        
        <Example1></Example1>
        
      </div>
    )
  }
}

export default App

