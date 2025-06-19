import React from 'react'
import "./BlogCard.css";

function BlogCard({ blog }) {
    return (
        <div className='blog-card'>
            <img className='blog-img' src={blog.image} alt="" />
            <p className='blog-date'>{blog.date}</p>
            <h2 className='blog-title'>{blog.title}</h2>
            <p className='blog-text'>{blog.text}</p>

        </div>
    )
}

export default BlogCard
