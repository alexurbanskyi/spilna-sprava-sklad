import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='header'>
    <nav className='header_nav'>
       <ul className='nav_list'>
         <li className='nav_link'>
           <Link to="/">ПРАЦІВНИКИ</Link>
         </li>
         <li className='nav_link'>
           <Link to="/sklad">СКЛАД</Link>
         </li>
         {/* <li className='nav_link'>
           <Link to="/phrases">Phrases</Link>
         </li>
         <li className='nav_link'>
           <Link to="/check-word">CheckWord</Link>
         </li> */}
       </ul>
     </nav>
 </div>
  )
}

export default Header
