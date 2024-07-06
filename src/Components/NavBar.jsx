import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <>
            <img src='' alt='Site Logo' />
            
            <div id="navbar-link-container"> 
            <Link to='/'>
                <div className='navbar-link-cont'>
                    <img className='navbar-icon' src='public/assets/home.svg' alt='Home Navigation Icon'/>
                    <h4 className='navbar-link-title'>Home</h4>
                </div>
            </Link>

            <Link to='/dashboard'>
                <div className='navbar-link-cont'>
                    <img className='navbar-icon' src='public/assets/dashboard.svg' alt='Dashboard Navigation Icon'/>
                    <h4 className='navbar-link-title'>Dashboard</h4>
                </div>
            </Link>

            <Link to='/about'>
                <div className='navbar-link-cont'>
                    <img className='navbar-icon' src='public/assets/about.svg' alt='About Navigation Icon'/>
                    <h4 className='navbar-link-title'>About</h4>
                </div>
            </Link> 
            </div>
        </>
    )
}

export default NavBar