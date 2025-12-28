import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import About from "./pages/Restaurant/About"
import ContactUs from "./pages/Restaurant/ContactUs"
import Gallery from "./pages/Restaurant/Gallery"
import Home from "./pages/Restaurant/Home"
import Menu from "./pages/Restaurant/Menu"
import OrderOnline from "./pages/Restaurant/OrderOnline"
import Reviews from "./pages/Restaurant/Reviews"

const App = () => {
  return (
    <div>
      <h1>Restaurant Website</h1>
      <Router>
        <nav>
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/">Home</NavLink>|
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/about">About</NavLink>|
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/contact_us">Contact Us</NavLink>|
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/gallery">Gallery</NavLink>|
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/menu">Menu</NavLink>|
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/order_online">Order Online</NavLink>|
          <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "" })} to="/reviews">Reviews</NavLink>|
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact_us' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order_online' element={<OrderOnline />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
