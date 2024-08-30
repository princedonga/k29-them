import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import '../App.css'
function Header() {
    return (
        <div className=' position-sticky top-0 z-3 bg-white' >
            <section className='box-shdow p-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6 col-6'>
                            <div>
                                <img src='Assets/img/logo1.png' alt='logo1' className='logo mt-sm-3 mt-lg-0'></img>
                            </div>
                        </div>
                        <div className='col-lg-6 d-lg-block d-none'>
                            <ul className='menu float-end '>
                                <li><ScrollLink className='text-danger' to="home" smooth={true} duration={50}>Home</ScrollLink></li>
                                <li><ScrollLink to="shop" smooth={true} duration={50}>Shop</ScrollLink></li>
                                <li><ScrollLink to="">Pages</ScrollLink></li>
                                <li><ScrollLink to="Blog" smooth={true} duration={50}>Blog</ScrollLink></li>
                                <li><ScrollLink to="">contect</ScrollLink></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-6 col-6'>
                            <div className='mt-5 float-end'>
                                <i className="fa-solid fa-magnifying-glass fs-5 "></i>
                                <i className="fa-solid fa-cart-shopping ms-3 fs-5 me-4"></i>
                                <i className="fa-solid fa-bars ms-0 me-4 fs-5 d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"></i>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header">
                                        <img src='Assets/img/logo1.png' alt='logo1' className='w-50 mt-sm-2 mt-lg-0'></img>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div>
                                            <ul className='offcavas-menu  '>
                                                <li><ScrollLink className='text-danger' to="home" smooth={true} duration={50}>Home</ScrollLink></li>
                                                <li><ScrollLink to="shop" smooth={true} duration={50}>Shop</ScrollLink></li>
                                                <li><ScrollLink to="">Pages</ScrollLink></li>
                                                <li><ScrollLink to="Blog" smooth={true} duration={50}>Blog</ScrollLink></li>
                                                <li><ScrollLink to="">contect</ScrollLink></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header