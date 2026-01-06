import React from 'react'
import { useParams } from 'react-router-dom'

const products = [
    {id: 1, name: "Laptop", price: 80000},
    {id: 2, name: "Mobile", price: 20000},
    {id: 3, name: "Earphone", price: 2000},
    {id: 4, name: "Watch", price: 5000},
    {id: 5, name: "Shoes", price: 4000},
]
const Products = () => {
  const {id}  = useParams()
  const filteredProducts = products.find((product) => product.id === Number(id))
  return (
    <div>
      <h1>Product Page</h1>
      <h1>{filteredProducts.name} - {filteredProducts.price}</h1>
    </div>
  )
}

export default Products
