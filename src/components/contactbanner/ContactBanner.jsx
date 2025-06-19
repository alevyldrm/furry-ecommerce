import React from 'react';
import './ContactBanner.css';
import contactBg from '../../assets/images/contact-banner.jpg';

function ContactBanner() {
    return (
        <div className="contact-banner" >
            <div className="overlay">
                <div className="contact-text">
                    <p className="breadcrumb">Home / Pages / <span>Contact</span></p>
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
    );
}

export default ContactBanner;