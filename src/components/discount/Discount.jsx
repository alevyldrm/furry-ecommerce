import React from 'react'
import image from '../../assets/images/dog-cat.png'
import './Discount.css'

function Discount() {
    return (
        <div className='discount-section'>
            <div className="discount-container">
                <div className='discount-left-side'>
                    <h1 className='discount-title'>Get  <span style={{ color: "var(--accent-blue)" }} >25% Discount</span>  on your first purchase</h1>
                    <p className='discount-text'>Just Sign Up & Register it now to become member.</p>
                    <input className='email-input' type="email" placeholder='Email' />
                    <button className='btn'>Subscribe</button>
                </div>
                <div className='discount-right-side'>
                    <img className='img-dog-cat' src={image} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Discount
