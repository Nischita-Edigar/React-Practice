
import { Link } from 'react-router-dom'
function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">React Routing version 5</Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/Home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/About">About</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/services">Services</Link></li>   
            </ul>
        </div>
    </nav>
    </div>

    
    )
}
export default Navbar