import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Icons/logo.svg';
import search_icon from '../assets/Icons/search_icon.svg';
import cart_icon from '../assets/Icons/cart_icon.svg';
import fire_icon from '../assets/Icons/Fire_icon.svg';
import user from '../assets/Icons/user_icon.svg';
import menu from '../assets/Icons/menu.svg';
import menu_x from '../assets/Icons/menu_x.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close menu when a link is clicked
    };

    return (
        <div>
            <header className="header">
                <div className="user">
                    <img
                        src={isMenuOpen ? menu_x : menu}
                        alt="menu icon"
                        onClick={toggleMenu}
                    />
                </div>
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <NavLink to='/men' onClick={handleLinkClick}><p>Men</p></NavLink>
                        <NavLink to='/women' onClick={handleLinkClick}><p>Women</p></NavLink>
                        <NavLink to='/kids' onClick={handleLinkClick}><p>Kids</p></NavLink>
                        <NavLink to='/shoes' onClick={handleLinkClick}><p>Shoes</p></NavLink>
                        <NavLink to='/curry' onClick={handleLinkClick}><p>Curry</p></NavLink>
                        <NavLink to='/collection' onClick={handleLinkClick}><p>Collection</p></NavLink>
                        <NavLink to='/login'><img src={user} alt="user" /></NavLink>
                    </ul>
                    <div className='search-container'>
                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <img src={search_icon} alt="search icon" />
                        </div>
                    </div>
                </nav>
                <div className="cart">
                    <Link to='/cart' className='Cart-link'>
                        <img src={cart_icon} alt="cart icon" />
                        <p>1</p>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
