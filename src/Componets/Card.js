import React from 'react'
import Slider from "react-slick";
import '../App.css'
function Card() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <div className="custom-arrow custom-next"><i class="fa-solid fa-right-long"></i></div>,
        prevArrow: <div className="custom-arrow custom-prev"><i class="fa-solid fa-right-long"></i></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <Slider {...settings} className='row '>
                <div className='col-lg-3'>
                    <div className="card " style={{ width: "18rem" }} data-aos="zoom-in" data-aos-duration="1400">
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
                <div className='col-lg-3'>
                    <div className="card " style={{ width: "18rem" }} data-aos="zoom-in" data-aos-duration="1400">
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
                <div className='col-lg-3'>
                    <div className="card " style={{ width: "18rem" }} data-aos="zoom-in" data-aos-duration="1400">
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
                <div className='col-lg-3'>
                    <div className="card " style={{ width: "18rem" }} data-aos="zoom-in" data-aos-duration="1400">
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
                <div className='col-lg-3'>
                    <div className="card " style={{ width: "18rem" }} data-aos="zoom-in" data-aos-duration="1400">
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
            </Slider>
        </div>
    )
}

export default Card