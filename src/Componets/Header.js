import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

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
        <div className={`page-header    ${isSticky ? 'is-sticky' : ''}`}>
            <div class="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
                    <div class="nav-content">
                        <div class="logo"><img src="Assets\img\logo1.png" alt="" className='w-75 mt-2 logo' /></div>
                        <ul class="links mt-2">
                            <li className='nav-item'><ScrollLink className='text-danger' to="home" smooth={true} duration={50}>Home</ScrollLink></li>
                            <li className='nav-item'><ScrollLink to="shop" smooth={true} duration={50}>Shop</ScrollLink></li>
                            <li className='nav-item'><ScrollLink to="">Pages</ScrollLink></li>
                            <li className='nav-item'><ScrollLink to="Blog" smooth={true} duration={50}>Blog</ScrollLink></li>
                            <li className='nav-item'><ScrollLink to="">Contact</ScrollLink></li>
                        </ul>
                    </div>
                    <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
                    <i class="fa-solid fa-cart-shopping fs-5 ms-1"></i>
                    <form action="#" class="search-box">
                        <input type="text" placeholder="Search Something..." required />
                        <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
                    </form>
                </nav>
            </div>
        </div>
    );
}

export default Header;
