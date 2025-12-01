import React from 'react'

const Modal = ({ children }) => {
  return (
    <div style={{
        border: "3px solid brown",
        borderRadius: "4px",
        margin: "10px",
        padding: "10px" }}>
        {children}
    </div>
  )
}

export default Modal