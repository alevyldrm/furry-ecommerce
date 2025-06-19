import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ContactBanner from '../components/contactbanner/contactbanner'
import ContactInfo from '../components/contactinfo/ContactInfo'
import Discount from '../components/discount/Discount'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import Map from '../components/map/Map'


function Contact() {
    return (
        <div>
            <Navbar />
            <ContactBanner />
            <ContactInfo />
            <Map />
            <Discount />
            <Info />
            <Footer />

        </div>
    )
}

export default Contact
