import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Link as ScrollLink } from 'react-scroll';
function Footer() {
    return (
        <>
            <footer className='bg-set mt-5 text-set'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <div>
                                <ul className='footer-menu'>
                                    <li><Link to="" className='text-dark fw-bold'>INFORMATION</Link></li>
                                    <li><Link to="">Home</Link></li>
                                    <li><Link to="">Blog</Link></li>
                                    <li><Link to="">About Us</Link></li>
                                    <li><Link to="">Menu</Link></li>
                                    <li><Link to="">Contect Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <div>
                                <ul className='footer-menu'>
                                    <li><Link to="" className='text-dark fw-bold'>TOP-ITEM</Link></li>
                                    <li><Link to="">pepporins</Link></li>
                                    <li><Link to="">Swiss Mashroom</Link></li>
                                    <li><Link to="">Chicken</Link></li>
                                    <li><Link to="">Vegtarian</Link></li>
                                    <li><Link to="">Hem & Cheese</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <div>
                                <ul className='footer-menu'>
                                    <li><Link to="" className='text-dark fw-bold'>OTHERS</Link></li>
                                    <li><Link to="">Chcekout</Link></li>
                                    <li><Link to="">Cart</Link></li>
                                    <li><Link to="">Product</Link></li>
                                    <li><Link to="">Location</Link></li>
                                    <li><Link to="">My Account</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                            <h5>SOCIAL MEDIA</h5>
                            <div className='mt-3'>
                                <img src='Assets/img/facebook.png' alt='facebook' className='me-2'></img>
                                <img src='Assets/img/instagram.png' alt='facebook' className='me-2'></img>
                                <img src='Assets/img/social.png' alt='facebook' className='me-2'></img>
                                <img src='Assets/img/twitter.png' alt='facebook'></img>
                            </div>
                            <h6 className='mt-3'>Singup and Get Offers and Cuopan codes</h6>
                            <button className='btn btn-danger px-4 mt-3 py-1'>Sing Up</button>
                            {/* <div className='mt-4'>
                                <img src='Assets/img/google1.png' alt='ggole' className=' me-2' style={{width:"40%"}}></img>
                                <img src='Assets/img/apple.png' alt='ggole' className=' ' style={{width:"39%"}}></img>

                            </div> */}
                        </div>
                        <div className='col-lg-9'>
                            <div>
                                <ul className='f-menu  '>
                                    <li><Link className='' to="">privacy Policy </Link></li>
                                    <li><Link to="">Refund Policy</Link></li>
                                    <li><Link to="">Cooki Policy</Link></li>
                                    <li><Link to="">Term & Condition</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='mt-4 ms-2'>
                                <img src='Assets/img/google-play.png' alt='ggole' className=' me-2 f-img' style={{ width: "13%" }}></img>
                                <img src='Assets/img/app-store.png' alt='ggole' className=' f-img ' style={{ width: "13%" }}></img>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='float-end me-4 position-set '>
                    <div>
                        <ScrollLink to="home" smooth={true} duration={50} className='ic-set'><i className="fa-solid fa-arrow-up"></i></ScrollLink>
                    </div>
                </div>
            </footer>
            
            <section>
                <h6 className='text-center py-3'>2024 Pizzon All Right Resrved By <span className='text-danger'>Templatetscoder</span></h6>
            </section>
        </>
    )
}

export default Footer