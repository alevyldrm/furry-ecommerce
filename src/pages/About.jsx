import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Discount from '../components/discount/Discount'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'
import AboutUs from '../components/about/AboutUs'
import AboutInfo from '../components/aboutInfo/AboutInfo'




function About() {
    return (
        <div>
            <Navbar />
            <AboutUs />
            <AboutInfo />
            <Discount />
            <Info />
            <Footer />
        </div>
    )
}

export default About;