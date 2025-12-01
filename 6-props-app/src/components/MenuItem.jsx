import React from 'react'

const MenuItem = ({ menuItem: {name, price, isVegetarian} }) => {
  return (
    <div>
        <h1>Menu:-</h1>
        <h1>{name} - {price}</h1>
        <h1>{isVegetarian ? "Veg" : "Non-Veg"}</h1>
    </div>
  )
}

export default MenuItem