import React from 'react'
import "./BlogList.css";
import blogs from '../../data/blogs'
import BlogCard from './BlogCard';

function BlogList() {
    return (
        <div className='bloglist-section'>
            <div className='container'>
                <h2 className='section-title'>Our Blogs</h2>
                <div className='blog-grid'>
                    {
                        blogs && blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default BlogList
