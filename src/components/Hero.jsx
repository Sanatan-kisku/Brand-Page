import React from 'react'

export default function Hero() {
  return (
    <div className='product container'>
      <div className='product-content'>
        <h1>Your feet deserve the best</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='buttons'>
          <button className='redBtn'>Shop Now</button>
          <button className='greyBtn'>Category</button>
        </div>
        <div className='shopping'>
          <p>Also Available On</p>
          <div className='apps'>
            <img src="/images/flipkart.png" alt="Flipkart-logo" />
            <img src="/images/amazon.png" alt="Amazon-logo" />
          </div>
        </div>
      </div>
      <div className='product-image'>
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </div>
  )
}
