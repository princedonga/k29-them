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
        <div className={`page-header ${isSticky ? 'is-sticky' : ''}`}>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-4'>
                            <div>
                                <img src='Assets/img/logo1.png' alt='logo1' className='logo mt-sm-3 mt-lg-0'></img>
                            </div>
                        </div>
                        <div className='col-lg-6 d-lg-block d-none'>
                            <ul className='menu text-center'>
                                <li><ScrollLink className='text-danger' to="home" smooth={true} duration={50}>Home</ScrollLink></li>
                                <li><ScrollLink to="shop" smooth={true} duration={50}>Shop</ScrollLink></li>
                                <li><ScrollLink to="">Pages</ScrollLink></li>
                                <li><ScrollLink to="Blog" smooth={true} duration={50}>Blog</ScrollLink></li>
                                <li><ScrollLink to="">Contact</ScrollLink></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-8'>
                            <div className='  float-end d-flex align-items-center ' style={{ marginTop: "37px" }}>
                                <div class="input-group ">
                                    <input type="text" class="form-control" placeholder="Search"  />
                                    <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
                                    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog  modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Search Item</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <input type='search' className='form-control' placeholder='Search Heare'></input>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <i className="fa-solid fa-cart-shopping ms-3 fs-5 me-2" style={{ cursor: "pointer" }}></i>
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
