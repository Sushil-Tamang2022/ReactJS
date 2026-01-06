import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from './pages/Products'

const CApp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/products/:id' element={<Products />} />
        </Routes>
      </Router>
    </div>
  )
}

export default CApp
