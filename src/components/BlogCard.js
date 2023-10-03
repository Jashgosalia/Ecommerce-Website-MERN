import React from 'react'
import {Link} from "react-router-dom";

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/images/blog-1.jpg' alt="blog" className='img-fluid' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec 2022</p>
                <h5 className='title'>A beautiful sunday morning</h5>
                <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link className='button' to="/">Read More</Link>

            </div>
            

        </div>
    </div>
  )
}

export default BlogCard