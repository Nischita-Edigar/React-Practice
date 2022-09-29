import React from 'react'
import { Link } from 'react-router-dom'
function Navbar1() {
        return <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">React Routing version 5</Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/Home1">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/Services1">Services</Link></li>   
            </ul>
        </div>
    </nav>
        </div>
   

}
export default Navbar1