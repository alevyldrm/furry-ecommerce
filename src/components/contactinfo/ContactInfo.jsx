import React from 'react'
import './ContactInfo.css'

function ContactInfo() {
    return (
        <div className='contact-section'>
            <div className="contact-left-side">
                <div className='contact-card'>
                    <h5>Office</h5>
                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                    <p>+123 987 321</p>
                    <p>+123 987 321</p>
                    <p>contact@website.com</p>
                </div>
                <div className='contact-card'>
                    <h5>Management</h5>
                    <p>730 Glenstone Ave 65802, Springfield, US</p>
                    <p>+123 987 321</p>
                    <p>+123 123 654</p>
                    <p>contact@website.com</p>
                </div>
            </div>
            <div className="contact-right-side">
                <h2>Get in Touch</h2>
                <p>Use the form below to get in touch with us.</p>
                <div className='input-group'>
                    <input className='width-50' type="text" placeholder='Write Your Name' />
                    <input className='width-50' type="text" placeholder='Write Your Phone' />
                </div>
                <input type="e-mail" placeholder='Write Your E mail' />
                <input type="text" placeholder='Write Your Subject' />
                <input type="text" placeholder='Write Your Message' />
                <button className='btn-submit'>Submit</button>
            </div>

        </div>
    )
}

export default ContactInfo
