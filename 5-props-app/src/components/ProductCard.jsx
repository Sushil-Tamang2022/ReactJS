import React from 'react'

const ProductCard = ({ isInStock }) => {
    if(!isInStock) {
        return null;
    }
  return (
    <div>
        <button>Buy Now</button>
    </div>
  )
}

export default ProductCard