import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`page-header ${isSticky ? 'is-sticky' : ''}`}>
            <div className="wrapper py-3">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                    <div className="nav-content">
                        <div className="logo"><img src="Assets\img\logo1.png" alt="" className=' logo' /></div>
                        <ul className="links mt-2">
                            <li className='nav-item'><ScrollLink to="home" smooth={true} duration={50}><Link to="/" className='text-danger '>Home</Link></ScrollLink>
                            </li>
                            <li className='nav-item'><ScrollLink to="shop" smooth={true} duration={50}>
                                <Link to="">Shop</Link></ScrollLink></li>
                            <li className='nav-item'><ScrollLink to=""><Link to="">Pages</Link></ScrollLink></li>
                            <li className='nav-item'><ScrollLink to="Blog" smooth={true} duration={50}><Link to="">Blog</Link></ScrollLink></li>
                            <li className='nav-item'><ScrollLink><Link to="/contact">Contact</Link></ScrollLink></li>
                        </ul>
                    </div>
                    <label htmlFor="show-search" className="search-icon"><i className="fas fa-search"></i></label>
                    <i className="fa-solid fa-cart-shopping fs-5 ms-1 me-3"></i>
                    <form action="" className="search-box">
                        <input type="text" placeholder="Search Something..." required />
                        <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right"></i></button>
                    </form>
                </nav>
            </div>
        </div>
    );
}

export default Header;
