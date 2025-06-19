import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiAmazonFill } from "react-icons/ri";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className='footer-card-list'>
                    <div className="footer-card">
                        <h2 className='footer-logo'>FURRY</h2>
                        <div className="icons">
                            <FaFacebookF className='f-icon' />
                            <CiTwitter className='f-icon' />
                            <FaYoutube className='f-icon' />
                            <FaInstagram className='f-icon' />
                            <RiAmazonFill className='f-icon' />
                        </div>
                    </div>
                    <div className="footer-card">
                        <h5>Shop</h5>
                        <p>About us</p>
                        <p>Conditions</p>
                        <p>Our Journals</p>
                        <p>Careers</p>
                        <p>Affiliate Programme</p>
                        <p>Ultras Press</p>
                    </div>
                    <div className="footer-card">
                        <h5>Quick Links</h5>
                        <p>Offers</p>
                        <p>Discount Coupons</p>
                        <p>Stores</p>
                        <p>Track Order</p>
                        <p>Shop</p>
                        <p>Info</p>
                    </div>
                    <div className="footer-card">
                        <h5>Customer Service</h5>
                        <p>FAQ</p>
                        <p>Contact</p>
                        <p>Privacy Policy</p>
                        <p>Returns & Refunds</p>
                        <p>Cookie Guidelines</p>
                        <p>Delivery Information</p>
                    </div>
                </div>
                <div className='footer-text'>
                    <p>© 2025 Furry. All rights reserved.</p>
                    <p>HTML Template by TemplatesJungle</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
