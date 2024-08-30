import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css';

function Header() {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

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
            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6'>
                            <div>
                                <img src='Assets/img/logo1.png' alt='logo1' className='logo mt-sm-3 mt-lg-0'></img>
                            </div>
                        </div>
                        <div className='col-lg-6 d-lg-block d-none'>
                            <ul className='menu float-end'>
                                <li><ScrollLink className='text-danger' to="home" smooth={true} duration={50}>Home</ScrollLink></li>
                                <li><ScrollLink to="shop" smooth={true} duration={50}>Shop</ScrollLink></li>
                                <li><ScrollLink to="">Pages</ScrollLink></li>
                                <li><ScrollLink to="Blog" smooth={true} duration={50}>Blog</ScrollLink></li>
                                <li><ScrollLink to="">Contact</ScrollLink></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-6 col-6'>
                            <div className='mt-5 float-end d-flex align-items-center'>
                                <i
                                    className="fa-solid fa-magnifying-glass fs-5"
                                    onClick={toggleSearchBar} style={{ cursor: "pointer" }}
                                ></i>
                                <i className="fa-solid fa-cart-shopping ms-3 fs-5 me-4" style={{ cursor: "pointer" }}></i>
                                <i
                                    className="fa-solid fa-bars ms-0 me-4 fs-5 d-lg-none cursor-pointer"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasExample"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
                {showSearchBar && (
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className="input-group mb-3 w-25 m-input float-end me-5">
                                    <input type="text" className="form-control" placeholder="Search Here" />
                                    <span className="input-group-text" id="basic-addon2"> <i
                                        className="fa-solid fa-magnifying-glass fs-5 cursor-pointer"
                                    ></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Off-canvas menu for mobile view */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <img src='Assets/img/logo1.png' alt='logo1' className='w-50 mt-sm-2 mt-lg-0'></img>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ul className='offcanvas-menu'>
                            <li><ScrollLink className='text-danger' to="home" smooth={true} duration={50}>Home</ScrollLink></li>
                            <li><ScrollLink to="shop" smooth={true} duration={50}>Shop</ScrollLink></li>
                            <li><ScrollLink to="">Pages</ScrollLink></li>
                            <li><ScrollLink to="Blog" smooth={true} duration={50}>Blog</ScrollLink></li>
                            <li><ScrollLink to="">Contact</ScrollLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
