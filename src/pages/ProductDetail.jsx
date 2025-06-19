import React from 'react'
import { useParams } from 'react-router-dom'
import products from "../data/products";
import SingleProduct from '../components/singleproduct/SingleProduct';
import Navbar from '../components/navbar/Navbar';
import Discount from '../components/discount/Discount'
import Footer from '../components/footer/Footer'

function ProductDetail() {
    const { id } = useParams();

    return (
        <div>
            <Navbar />
            <div className="product">
                {
                    products && products.map((product) => {
                        if (product.id == id) {
                            return <SingleProduct key={product.id} product={product} />
                        }
                    })
                }
            </div>
            <Discount />
            <Footer />
        </div>
    )
}

export default ProductDetail
