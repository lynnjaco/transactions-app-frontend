import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <>
            <img id='site-logo' src='/assets/sitelogo.svg' alt='Site Logo' />
            
            <div id="navbar-link-container"> 
            <Link to='/'>
                <div className='navbar-link-cont'>
                    <img className='svg-icon navbar-icon' src='/assets/home.svg' alt='Home Navigation Icon'/>
                    <h4 className='navbar-link-title'>Home</h4>
                </div>
            </Link>

            <Link to='/dashboard'>
                <div className='navbar-link-cont'>
                    <img className='svg-icon navbar-icon' src='/assets/dashboard.svg' alt='Dashboard Navigation Icon'/>
                    <h4 className='navbar-link-title'>Dashboard</h4>
                </div>
            </Link>

            <Link to='/about'>
                <div className='navbar-link-cont'>
                    <img className='svg-icon navbar-icon' src='/assets/about.svg' alt='About Navigation Icon'/>
                    <h4 className='navbar-link-title'>About</h4>
                </div>
            </Link> 
            </div>
        </>
    )
}

export default NavBar