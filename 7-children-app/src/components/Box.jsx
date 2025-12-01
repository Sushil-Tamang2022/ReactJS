import React from 'react'
import styles from "./Box.module.css"

const Box = () => {
  return (
    <div style={{
         color: "white", 
         backgroundColor: "black",
          height: "300px", 
          width: "400px", 
          padding: "10px", 
          borderRadius: "4px"}}>
        <h2>This is a paragraph inside the box.</h2>
    </div>
  )
}

export default Box