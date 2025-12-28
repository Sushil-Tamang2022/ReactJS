import React from 'react'
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <header>
            <h1>Nested Route</h1>
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/contact">Contact</Link>|
                <Link to="/about">About</Link>|
            </nav>
        </header>
        <main>
            <Outlet />
        </main>

        <footer>
            Copyright 2025
        </footer>

    </div>
  )
}

export default Layout
