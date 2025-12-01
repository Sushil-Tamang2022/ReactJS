import React from 'react'

const ProductDetails = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Product: {props.productName}</h1>
      <p>Price: {props.price}</p>
      {props.inStock ? <button>Buy</button> : <h2>Out of stock</h2>}
    </div>
  )
}

export default ProductDetails