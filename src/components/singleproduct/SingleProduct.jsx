import React, { useState } from 'react'
import './SingleProduct.css'


function SingleProduct({ product }) {

    const [count, setCount] = useState(1)

    return (
        <div className='singleProduct-section'>
            <div className="singleProduct-container">
                <div className='single-left-side'>
                    <img className='singleProduct-img' src={product.image} alt="" />
                </div>
                <div className='single-right-side'>
                    <div>
                        <h2>{product.title}</h2>
                        <h3>{product.price}</h3>
                        <p>{product.text}</p>
                    </div>
                    <div className='add-to-basket'>
                        <div className="quantity-control">
                            <button onClick={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                }
                            }
                            } className="qty-btn">-</button>
                            <span className="qty-display">{count}</span>
                            <button onClick={() => setCount(count + 1)} className="qty-btn">+</button>
                        </div>
                        <button className='btn-add-to-basket'>Add to Basket</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default SingleProduct
