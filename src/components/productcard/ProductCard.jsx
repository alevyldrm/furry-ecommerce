import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();
    const handleCategoryClick = () => {
        navigate(`/category/${product.category.toLowerCase()}`)
    }


    return (
        <div className="product-card">
            <img onClick={() => navigate("/product-details/" + product.id)} src={product.image} alt={product.title} className="product-card__image" />
            <h3 className="product-card__title">{product.title}</h3>
            <p className="product-card__price">{product.price}</p>
            <button className='product-card__add'>Add to Card</button>
            <button className='product-card__category' onClick={handleCategoryClick}>View more in {product.category}</button>
        </div>
    );
}

export default ProductCard;
