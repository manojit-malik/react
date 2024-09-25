import React from 'react';
import {Link} from 'react-router-dom';
import './MyStyle.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        
        

            <Link to='/'>Home Page </Link>
            <Link to='/Addbook'>Addbook</Link>
            <Link to='/Bookdetails'>Bookdetails</Link>
            <Link to='/Managebooks'>Managebooks</Link>

        


    </div>
  )
}