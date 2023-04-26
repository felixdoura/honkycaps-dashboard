import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div className='col-3'>
            <Link className='product-card position-relative mb-5'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='/images/wish.svg' alt='wishlist' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='/images/ADI1.jpg' alt='product img' className='img-fluid'/>
                    <img src='/images/ADI2.jpg' alt='product img' className='img-fluid'/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Deportivas</h6>
                    <h5 className='product-title'>Gorra Adidas 1</h5>
                    <ReactStars count={5} size={24} value="3" edit={false} activeColor='#ffd700' />
                    <p className='price'>$100</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link><img src='/images/prodcompare.svg' alt='compare' /></Link>
                        <Link><img src='/images/view.svg' alt='view' /></Link>
                        <Link><img src='/images/add-cart.svg' alt='add cart' /></Link>
                    </div>
                </div>
            </Link>
        </div>
    
    
    
    
    </>
  )
}

export default Products