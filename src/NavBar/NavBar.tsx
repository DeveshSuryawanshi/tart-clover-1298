import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <Link to='/'>Home page</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}
