import React, { useState } from 'react';
import products from '../../data/products.js';
import ProductCard from '../productcard/ProductCard.jsx';
import CategoryFilters from '../categoryfilters/CategoryFilters.jsx';
import './ProductList.css';

function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter(product => product.categoryType === selectedCategory);

    return (
        <section className="product-list">
            <h2>Best Selling Products</h2>
            <CategoryFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <div className="product-list__grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;

