import { useState } from 'react';
import React from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value // Update the state based on the input field's id
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form data submitted:", formData);
        // Add form submission logic, e.g., sending data to an API
    };

    return(
        <section className="page-section" id="contact">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 text-black">Contact Me</h2>
                <div className="divider-custom divider-dark">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><img src={props.image} alt="Logo" className="logoPic" /></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div>
                    <p className="text-center text-black lead">Have a question or want to work together? I'd love to hear from you! Please fill out the form below to get in touch.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    id="name" 
                                    type="text" 
                                    placeholder="Enter your name..." 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                                <label htmlFor="name">Full name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    id="email" 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    className="form-control" 
                                    id="phone" 
                                    type="tel" 
                                    placeholder="(123) 456-7890" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                />
                                <label htmlFor="phone">Phone number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea 
                                    className="form-control" 
                                    id="message" 
                                    placeholder="Enter your message here..." 
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{height: "10rem"}} 
                                    required>
                                </textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
