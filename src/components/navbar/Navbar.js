import { use } from 'react';
import './Navbar.css';
import {useLocation} from 'react-router-dom'

function NavBar(){
    const location = useLocation()
    return(
        <div className="navBar">
            <div className='navButton'>
                <a className={location.pathname==="/"?"active":""}href='/'>Slideshow</a>
            </div>
            <div className='navButton'>
                <a href='/excerpts'>Excerpts</a>
            </div>
            <div className='navButton'>
                <a href='/order'>Order</a>
            </div>
            <div className='navButton'>
                <a href='/about'>About</a>
            </div>
        </div>
    )
}
export default NavBar