import React from 'react'

const ProductCard = (props) => {
    console.log(props);
    const {id, title, price} = props.product;
  return (
    <div>
        <p>{id}</p>
        <h1>Product Info</h1>
        <h2>{title} - {price}</h2>
    </div>
  )
}

export default ProductCard