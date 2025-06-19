import React from 'react';
import './CategoryFilters.css';

function CategoryFilters({ selectedCategory, onCategoryChange }) {
    return (
        <div className='category-btns'>
            <button
                className={`foods-btn ${selectedCategory === 'Foods' ? 'active' : ''}`}
                onClick={() => onCategoryChange('Foods')}>Pet Foods</button>

            <button
                className={`clothing-btn ${selectedCategory === 'Clothing' ? 'active' : ''}`}
                onClick={() => onCategoryChange('Clothing')}>Pet Clothing</button>

            <button
                className={`medication-btn ${selectedCategory === 'Medication' ? 'active' : ''}`}
                onClick={() => onCategoryChange('Medication')}>Medication</button>

            <button
                className={`all-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => onCategoryChange('All')}>All</button>
        </div>

    );
}

export default CategoryFilters;
