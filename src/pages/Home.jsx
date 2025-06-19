import React from 'react'

import Navbar from '../components/navbar/Navbar'
import HeroBanner from '../components/herobanner/HeroBanner'
import ProductList from '../components/productlist/ProductList'
import CustomerReviews from '../components/customerreviews/CustomerReviews'
import BlogList from '../components/blogs/BlogList'
import Discount from '../components/discount/Discount'
import Info from '../components/info/Info'
import Footer from '../components/footer/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <ProductList />
            <CustomerReviews />
            <BlogList />
            <Discount />
            <Info />
            <Footer />
        </div>
    )
}

export default Home
