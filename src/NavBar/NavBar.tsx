import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/faq'>Faq</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}
