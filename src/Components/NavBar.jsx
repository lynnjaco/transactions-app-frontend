import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <div id="navbar-container">
            <img src='' alt='Site Logo' />
            
            <Link to='/'>
                <div className='navbar-link'>
                    <img src='public/assets/home.svg' alt='Home Navigation Icon'/>
                    <h2>Home</h2>
                </div>
            </Link>

            <Link to='/dashboard'>
                <div className='navbar-link'>
                    <img src='public/assets/dashboard.svg' alt='Dashboard Navigation Icon'/>
                    <h2>Dashboard</h2>
                </div>
            </Link>

            <Link to='/about'>
                <div className='navbar-link'>
                    <img src='public/assets/about.svg' alt='About Navigation Icon'/>
                    <h2>About</h2>
                </div>
            </Link> 
        </div>
    )
}

export default NavBar