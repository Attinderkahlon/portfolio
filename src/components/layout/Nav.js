import React from 'react'
import Dropdown from '../assets/Dropdown'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='text-xl  text-slate-50 bg-gray-700 font-Montserrat flex py-4'>
      <div className='flex gap-6 px-2 py-2  mx-12'>
        {/* <li className='px-2 py-2'>About</li> */}
        <Link to='/'>
          <img
            src='images/pp.png'
            alt='profile'
            className='object-contain h-12 w-12 rounded-full cursor-pointer'
          />
        </Link>
        | <Link to='certifications'>Certifications</Link> |
        <Dropdown />
      </div>
    </nav>
  )
}

export default Nav
