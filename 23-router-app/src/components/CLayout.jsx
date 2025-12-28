import React from 'react'
import { Link, Outlet } from "react-router-dom"

const CLayout = () => {
  return (
    <div>
        <header>
            Nested Route
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/contact">Contact</Link>|
                <Link to="/experience">Experience</Link>|
                <Link to="/projects">Projects</Link>|
                <Link to="/skills">Skills</Link>|
                <Link to="/resume">Resume</Link>|
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
        <footer>
            &copy;Copyright 2025
        </footer>
    </div>
  )
}

export default CLayout
