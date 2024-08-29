import React from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Card from '../Componets/Card';
import FoodCard from '../Componets/FoodCard';
function Home() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <section className='mt-5' id='home'>
                <div className='container m-set'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='m-set1'>
                                <h1>Handmade,<br></br> With an Extra<br></br> Pinch Of Love</h1>
                                <p className='mt-3'>Lorem Ipsum has been the industry's standard dummy <br></br>text ever since the 1500s</p>
                                <button className='btn btn-danger px-4 mt-2'><i className="fa-solid fa-cart-shopping"></i> Order Now</button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div data-aos="fade-left" data-aos-duration="2000">
                                <img src='Assets/img/product_4.2.jpg' alt='pizza-img' className='pizza-img-set float-lg-end d-block mx-auto mt-lg-0 mt-5'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5' data-aos="fade-up" data-aos-duration="1200">
                <div className='container m-set'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div>
                                <img src='Assets/img/pizza.jpeg' alt='right-pizza-img' className='d-block mx-auto'></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-9 col-sm-12 col-12'>
                            <div className='m-set1'>
                                <h2>Daily fresh And <br></br>always testy</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy<br></br> text ever since the 1500s, when an unknown printer took a galley <br></br>of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 m-set'>
                    <div>
                        <h3 className='text-danger undreline'>Populer Dishs</h3>

                        <h3>Browese Menu</h3>
                    </div>
                </div>
            </section>
            {/* <section className='mt-5'>
                <div className='container position-reletive'>
                    <div className='row '>
                        <div className='col-lg-12'>
                            <div className='row '>
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12  '>
                                    <div className="card d-md-block mx-md-auto" style={{ width: "18rem" }} data-aos="zoom-in"  data-aos-duration="1400">
                                        <img src="Assets/img/pizza.jpeg" className="card-img-top w-75 d-block mx-auto pt-3" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title">Pestsove Pizza  <span className='float-end text-danger'> ₹100</span></h5>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="" className="btn btn-danger"><i className="fa-solid fa-cart-shopping me-2"></i>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 '>
                                    <div className="card" style={{ width: "18rem" }} data-aos="zoom-in"  data-aos-duration="1400">
                                        <img src="Assets/img/roll.jpeg" className="card-img-top w-75 d-block mx-auto pt-3" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title">chinese roll  <span className='float-end text-danger'> ₹100</span></h5>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="" className="btn btn-danger"><i className="fa-solid fa-cart-shopping me-2"></i>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 '>
                                    <div className="card " style={{ width: "18rem" }} data-aos="zoom-in"  data-aos-duration="1400">
                                        <img src="Assets/img/burger.jpeg" className="card-img-top w-75 d-block mx-auto pt-3" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title">Seafood Burger  <span className='float-end text-danger'> ₹100</span></h5>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="" className="btn btn-danger"><i className="fa-solid fa-cart-shopping me-2"></i>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 '>
                                    <div className="card mt-md-2 mt-lg-0" style={{ width: "18rem" }} data-aos="zoom-in"  data-aos-duration="1400">
                                        <img src="Assets/img/sandwich.jpeg" className="card-img-top w-100 px-1 d-block mx-auto pt-3" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title">Sandwich Soup <span className='float-end text-danger'> ₹100</span></h5>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <Link to="" className="btn btn-danger"><i className="fa-solid fa-cart-shopping me-2"></i>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className='mt-5' id="shop" >
                <FoodCard ></FoodCard>
            </section>
            <section>
                <div className='container mt-5 '>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div data-aos="fade-right" data-aos-duration="1400">
                                <img src='Assets/img/pizzaa.jpeg' alt='pizza-img' className='w-75 d-block mx-auto' ></img>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='mt-5 m-set1' data-aos="fade-left" data-aos-duration="1400">
                                <h3 className='text-danger undreline'>Our Story</h3>
                                <h2>The Pizza has Excellent of<br></br> Qualtiy Food</h2>
                                <p className='mt-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-set py-5 px-5 mt-5'>
                <div className='container m-set'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div>
                                <h3 className='text-danger undreline'>Our Strength</h3>
                                <h2>Why We are the best ?</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-5'>
                            <div data-aos="fade-down" data-aos-duration="1200">
                                <span><i className="fa-solid fa-bowl-food fs-1 text-danger"></i></span>
                                <h3 className='mt-2'>All Kind Of Food</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-5'>
                            <div data-aos="fade-down" data-aos-duration="1200">
                                <span><i className="fa-solid fa-fan fs-1 text-danger"></i></span>
                                <h3 className='mt-2'>Fresh Food</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-5'>
                            <div data-aos="fade-down" data-aos-duration="1200">
                                <span><i className="fa-solid fa-face-smile fs-1 text-danger"></i></span>
                                <h3 className='mt-2'>Best taste</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-5'>
                            <div data-aos="fade-down" data-aos-duration="1200">
                                <span><i className="fa-solid fa-location-dot fs-1 text-danger"></i></span>
                                <h3 className='mt-2'>On Time Delivery</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='mt-5'>
                <div className='container m-set'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div>
                                <h3 className='text-danger undreline'>Coustemer FeedBack</h3>
                                <h2>Cliant Testmonial</h2>
                            </div>
                        </div>
                        <div className='col-lg-12 mt-5'>
                            <div className='row g-3'>
                                <div className=' col-lg-3 col-md-6 col-sm-12 col-12 card-set'>
                                    <div className="card " style={{ width: "18rem" }}>
                                        <img src="Assets/img/john.jpeg" className="card-img-top w-75 d-block mx-auto pt-3 rounded-circle" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">john doe  </h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                        </div>
                                    </div>
                                </div>   <div className=' col-lg-3 col-md-6 col-sm-12 col-12'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="Assets/img/john.jpeg" className="card-img-top w-75 d-block mx-auto pt-3 rounded-circle" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">john doe  </h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                        </div>
                                    </div>
                                </div>   <div className=' col-lg-3 col-md-6 col-sm-12 col-12'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="Assets/img/john.jpeg" className="card-img-top w-75 d-block mx-auto pt-3 rounded-circle" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">john doe  </h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                        </div>
                                    </div>
                                </div>   <div className=' col-lg-3 col-md-6 col-sm-12 col-12'>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="Assets/img/john.jpeg" className="card-img-top w-75 d-block mx-auto pt-3 rounded-circle" alt="card-img" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">john doe  </h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>
                                            <span><i className="fa-solid fa-star text-danger"></i></span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className='mt-5 mb-5'>
                <Card></Card>
            </section>
            <section>
                <div className='container mt-5 m-set'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div>
                                <h3 className='text-danger undreline'>Resrvation</h3>
                                <h2>Book Your Table Now !</h2>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-6 col-sm-12 col-12'>
                            <div className='m-set1' data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                data-aos-anchor-placement="center-center">
                                <table>
                                    <tr className=''>
                                        <td>
                                            <input type='text ' placeholder='Name' className='form-control w-100 mb-4'></input>
                                        </td>
                                        <td>
                                            <input type='email ' placeholder='email' className='form-control w-100 mb-4 ms-3'></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type='tel ' placeholder='Phone' className='form-control w-100  mb-4'></input>
                                        </td>
                                        <td>
                                            <input type='text ' placeholder='Time' className='form-control w-100 mb-4 ms-3'></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type='text ' placeholder='Date' className='form-control w-100'></input>
                                        </td>
                                        <td>
                                            <input type='text ' placeholder='Guest' className='form-control w-100 ms-3'></input>
                                        </td>
                                    </tr>
                                </table>
                                <Link to="" className='btn btn-danger px-5 mt-4'>Book Now</Link>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
                            <div data-aos="zoom-out-down" data-aos-duration="3000" >
                                <img src='Assets/img/product_4.2.jpg' alt='book tabel' className='img-fluid  float-end '></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up" data-aos-duration="2000" id='Blog'>
                <div className='container'>
                    <div className='row m-set'>
                        <div className='col-lg-12'>
                            <div>
                                <h3 className='text-danger undreline'>From Our Blog</h3>
                                <h2>our Latest News</h2>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div style={{overflow:"hidden"}}>
                                <img src='Assets/img/blog.webp' alt='blog' className='w-100 rounded mt-3 scale'></img>
                                <h5 className='mt-2 undreline1'>November 22,23</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='row m-set'>
                                <div className='col-6 col-set'>
                                    <img src='Assets/img/blog.webp' alt='blog' className='w-100 rounded mt-3 scale'></img>
                                </div>
                                <div className='col-6 col-set'>
                                    <h5 className='mt-2 undreline1'>November 22,23</h5>  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500  </p>
                                    <h6 className='text-danger'>Read More <i className="fa-solid fa-right-long"></i></h6>
                                </div>
                                <div className='col-6 col-set'>
                                    <img src='Assets/img/blog.webp' alt='blog' className='w-100 rounded mt-3 scale'></img>
                                </div>
                                <div className='col-6 col-set'>
                                    <h5 className='mt-2 undreline1'>November 22,23</h5>  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500  </p>
                                    <h6 className='text-danger'>Read More <i className="fa-solid fa-right-long"></i></h6>
                                </div>
                                <div className='col-6 col-set'>
                                    <img src='Assets/img/blog.webp' alt='blog' className='w-100 rounded mt-3 scale'></img>
                                </div>
                                <div className='col-6 col-set'>
                                    <h5 className='mt-2 undreline1'>November 22,23</h5>  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500  </p>
                                    <h6 className='text-danger'>Read More <i className="fa-solid fa-right-long"></i></h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-right" data-aos-duration="2000">
                <div className='container mt-5'>
                    <div className='row m-set'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <div className='row'>
                                <div className='col-2 col-set'>
                                    <img src='Assets/img/proflle.jpeg' alt='profile' className='p-set'></img>

                                </div>
                                <div className='col-6 col-set'>
                                    <h4>plzadmin</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <h5 className='text-danger '>Read More <i className="fa-solid fa-right-long"></i></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home