import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShoppingBasket } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <Link className='link-logo' to="/"> <h2>FURRY</h2></Link>
            </div>

            <div className={`navbar__links ${isMobileMenuOpen ? "open" : ""}`}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>Shop</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </div>

            <div className="navbar-icons">
                <CiSearch size={24} />
                <CgProfile size={24} />
                <CiShoppingBasket size={24} />
                <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <GiHamburgerMenu size={24} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
