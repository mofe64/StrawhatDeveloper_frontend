import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import {Link } from 'react-router-dom';

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    }
    return (
        <div className='header'>
            <div className='header-left'>
                <Link to='/' className='navlink'>
                    <h1>Strawhat-Developer</h1>
                </Link>    
            </div>
            <div className='header-right'>
                <div className='header-links'>
                    <p>About</p>
                    <Link to='/blog' className='navlink'>
                        <p>Blog</p>
                    </Link>
                </div>
                <button className='contact-btn'>
                    Get in touch
                </button>
            </div>
            <div className='header-responsive' onClick={toggleDrawer}>
                <FontAwesomeIcon icon={(showDrawer===false)? faBars : faTimes} className='res-icon'/>
                <p className='res-text'>Menu</p>
            </div>
            <div className='nav-drawer' style={
                (showDrawer)? {display: 'block'} : {display: 'none'}
            }>
                <div className='nav-box'>
                    <div className='box'>
                        <p>About</p>
                        <Link to='/blog' className='navlink'>
                            <p>Blog</p>
                        </Link>
                        <button className='contact-btn'>
                        Get in touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;