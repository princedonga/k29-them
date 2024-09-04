import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Card from '../Componets/Card';
import FoodCard from '../Componets/FoodCard';

function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        time: '',
        date: '',
        guest: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        Aos.init();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.name) validationErrors.name = 'Name is required';
        if (!formData.email) validationErrors.email = 'Email is required';
        if (!formData.phone) validationErrors.phone = 'Phone is required';
        if (!formData.time) validationErrors.time = 'Time is required';
        if (!formData.date) validationErrors.date = 'Date is required';
        if (!formData.guest) validationErrors.guest = 'Guest count is required';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
        }
    };

    return (
        <div className='overflow'>

            <section className='mt-0 pt-5' id='home'>
                <div className='container m-set'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='m-set1'>
                                <h1>Handmade,<br /> With an Extra<br /> Pinch Of Love</h1>
                                <p className='mt-3'>
                                    Lorem Ipsum has been the industry's standard dummy<br />
                                    text ever since the 1500s
                                </p>
                                <button className='btn btn-danger px-4 mt-2'>
                                    <i className="fa-solid fa-cart-shopping"></i> Order Now
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div data-aos="fade-left" data-aos-duration="3000" className='mt-3'>
                                <img src='Assets/img/product_4.2.jpg' alt='pizza-img' className='pizza-img-set float-lg-end d-block mx-auto mt-lg-0 mt-5'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5' data-aos="fade-up" data-aos-duration="1200">
                <div className='container m-set'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
                            <div >
                                <img src='Assets/img/pizza.jpeg' alt='right-pizza-img' className=' d-block mx-auto' ></img>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-4 col-sm-12 col-12'>
                            <div className='m-set1'>
                                <h2>Daily fresh And <br />always tasty</h2>
                                <p>
                                    Lorem Ipsum has been the industry's standard dummy<br />
                                    text ever since the 1500s, when an unknown printer took a galley<br />
                                    of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfajagZzkr-SlOTWRvYslgrxQiAjDCWvVR_w&s' className='d-block mx-auto' alt='garlic'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5 m-set' id="shop">
                    <div>
                        <h3 className='text-danger line'>Popular Dishes</h3>
                        <h3>Browse Menu</h3>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <FoodCard />
            </section>

            <section>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div data-aos="fade-right" data-aos-duration="1400">
                                <img src='Assets/img/pizzaa.jpeg' alt='pizza-img' className='w-75 d-block mx-auto'></img>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div className='mt-5 m-set1' data-aos="fade-left" data-aos-duration="1400">
                                <h3 className='text-danger line'>Our Story</h3>
                                <h2>The Pizza has Excellent<br /> Quality Food</h2>
                                <p className='mt-2'>
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software.
                                </p>
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
                                <h3 className='text-danger line'>Our Strength</h3>
                                <h2>Why We are the Best?</h2>
                            </div>
                        </div>
                        <div className='col-lg-3 mt-5'>
                            <div data-aos="fade-down" data-aos-duration="1200">
                                <span><i className="fa-solid fa-bowl-food fs-1 text-danger"></i></span>
                                <h3 className='mt-2'>All Kinds Of Food</h3>
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
                                <h3 className='mt-2'>Best Taste</h3>
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

            <section className='mt-5 mb-5'>
                <Card />
            </section>

            <section>
                <div className='container mt-5 m-set'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div>
                                <h3 className='text-danger line'>Reservation</h3>
                                <h2>Book Your Table Now!</h2>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-6 col-sm-12 col-12'>
                            <form onSubmit={handleSubmit}>
                                <div className='m-set1' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-anchor-placement="center-center">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type='text'
                                                        placeholder='Name'
                                                        className='form-control w-100 mb-4'
                                                        name='name'
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                                </td>
                                                <td>
                                                    <input
                                                        type='email'
                                                        placeholder='Email'
                                                        className='form-control w-100 mb-4'
                                                        name='email'
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type='number'
                                                        placeholder='Phone'
                                                        className='form-control w-100 mb-4'
                                                        name='phone'
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                                </td>
                                                <td>
                                                    <input
                                                        type='time'
                                                        className='form-control w-100 mb-4'
                                                        name='time'
                                                        value={formData.time}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.time && <div className="text-danger">{errors.time}</div>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input
                                                        type='date'
                                                        className='form-control w-100 mb-4'
                                                        name='date'
                                                        value={formData.date}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.date && <div className="text-danger">{errors.date}</div>}
                                                </td>
                                                <td>
                                                    <input
                                                        type='number'
                                                        placeholder='Guests'
                                                        className='form-control w-100 mb-4'
                                                        name='guest'
                                                        value={formData.guest}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.guest && <div className="text-danger">{errors.guest}</div>}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button type='submit' className='btn btn-danger mt-3'>Book Now</button>
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-12 col-12'>
                            <div data-aos="fade-left" data-aos-duration="1400">
                                <img src='Assets/img/product_4.2.jpg' alt='reservation-img' className='w-100' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='' id='Blog'></section>

            <section data-aos="fade-up" data-aos-duration="2000" >
                <div className='container mt-5'>
                    <div className='row m-set'>
                        <div className='col-lg-12'>
                            <div>
                                <h3 className='text-danger undreline'>From Our Blog</h3>
                                <h2>our Latest News</h2>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                            <div style={{ overflow: "hidden" }}>
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
    );
}

export default Home;
