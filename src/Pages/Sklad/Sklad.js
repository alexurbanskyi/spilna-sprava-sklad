import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './sklad.css'

function Sklad() {
  return (
    <div className='sklad'>
      <Link to='desktop' >Cистемний блок</Link>
      NAVBAR MENU
      <Outlet/>
    </div>
  )
}

export default Sklad
