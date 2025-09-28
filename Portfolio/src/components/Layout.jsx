import { Link } from 'react-router-dom';
import image_logo from "../assets/logo.svg"

function Layout() {
    return (
        <>
            <div className='header'>
              <img src={image_logo} alt="Logo" className='logo'/>
              <h1 className='heading'>My Portfolio</h1>
             </div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <br />
            <hr />
        </>
    );
}

export default Layout;