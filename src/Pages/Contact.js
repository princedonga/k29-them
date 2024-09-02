import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            axios.post('https://www.demo603.amrithaa.com/camdell/appapi/register.php', formData)
                .then(response => {
                    console.log('Form submitted successfully:', response.data);
                    setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        password: '',
                    });
                    setErrors({});
                })
                .catch(error => {
                    console.error('Error submitting the form:', error);
                });
        }
    };

    return (
        <div>
            <section className='container pt-5'>
                <div className='row'>
                    <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='justify-content-center d-flex'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.074796895744!2d72.89645667434465!3d21.22888238087686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f29df861b4b%3A0x3881b49a9a952fc0!2sK29%20solutions!5e0!3m2!1sen!2sin!4v1725266622583!5m2!1sen!2sin" width="550" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="K29 Solutions Location"></iframe>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='px-5 mx-lg-5'>
                            <h3 className='line text-danger mb-5'>Contact Us</h3>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type='text' 
                                    className={`form-control mb-5 ${errors.name && 'is-invalid'}`} 
                                    placeholder='Enter Your Name:' 
                                    name='name' 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                
                                <input 
                                    type='email' 
                                    className={`form-control mb-5 ${errors.email && 'is-invalid'}`} 
                                    placeholder='Enter Your Email:' 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                
                                <input 
                                    type='number' 
                                    className={`form-control mb-5 ${errors.mobile && 'is-invalid'}`} 
                                    placeholder='Mobile' 
                                    name='mobile' 
                                    value={formData.mobile} 
                                    onChange={handleChange} 
                                />
                                {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                
                                <input 
                                    type='password' 
                                    className={`form-control mb-5 ${errors.password && 'is-invalid'}`} 
                                    placeholder='Password' 
                                    name='password' 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                
                                <button className='btn btn-danger px-5' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
