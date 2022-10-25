import React from 'react'
import './Diwali.css'

function DiwaliItem({
    key,
    title,
    description,
    price,
    img
}) {
  return (
    <div className='item-container'> 
        <img src={img} />

        <div className='item-info'>

            <div className='item-title'>
                {title}
            </div>

            <div className='item-description'>
                {description}
            </div>

            <div className='item-footer'>
                <div className='item-price'>
                    ₹{price} 
                </div>

                <div className='item-old-price'>
                    ₹{price*1.2}
                </div>
            </div>

            <div className='item-footer-btn'>
                <button className='item-cart-btn btn-primary'>Add to Cart</button>
                <button className='item-cart-btn btn-secondary'>Buy Now</button>
            </div>

        </div>
    </div>
  )
}

export default DiwaliItem