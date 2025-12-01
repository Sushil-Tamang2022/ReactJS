import React from 'react'
import styles from "./Button.module.css"
// Create a component and its css module and put a border on it.
const isSuccessful = false;

const Button = () => {
  return (
    <div className={isSuccessful ? styles.success : styles.failure}>
        <h1>This is button</h1>
    </div>
  )
}

export default Button