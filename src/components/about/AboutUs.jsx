import React from 'react'
import './AboutUs.css'
import aboutUs from '../../assets/images/aboutUs.jpg';

function AboutUs() {
    return (
        <div className="aboutus-banner" >
            <div className="overlay">
                <div className="aboutus-text">
                    <p className="breadcrumb">Home / Pages / <span>About Us</span></p>
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
