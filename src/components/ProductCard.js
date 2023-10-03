import React from 'react'
import ReactStars from 'react-rating-stars-component';

const ProductCard = () => {

    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    // };
    
  return (
    <div className='product-card col-3'>
        <div className='product-image'>
            <img src='images/images/watch.jpg' alt='product image'/>
        </div>
        <div className='product-content'>
            <h7 className='brand'>Havels</h7>
            <h6 className='product-title'>
                Kids headphones bulk 10 pack multi colored for students
            </h6>
            <ReactStars
                count={5}
                //onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
            />
            <p className='price'> $100.00</p>
        </div>
    </div>
  )
}

export default ProductCard