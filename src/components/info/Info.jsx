import React from 'react'
import { PiTruckTrailerLight } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { MdLoop } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";

import './Info.css'

export default function Info() {
    return (
        <div className='info-section'>
            <div className='info-card'>
                <div className='info-icon'>
                    <PiTruckTrailerLight className='icon' />
                </div>
                <h5 className='info-title'>Free Delivery</h5>
                <p className='info-text'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='info-card'>
                <div className='info-icon'>
                    <MdPayment className='icon' />
                </div>
                <h5 className='info-title'>100% Secure Payment</h5>
                <p className='info-text'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='info-card'>
                <div className='info-icon'>
                    <MdLoop className='icon' />
                </div>
                <h5 className='info-title'>Quality Guarantee</h5>
                <p className='info-text'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='info-card'>
                <div className='info-icon'>
                    <MdOutlineLocalOffer className='icon' />
                </div>
                <h5 className='info-title'>Daily Offers</h5>
                <p className='info-text'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

        </div>
    )
}
