import React from "react"
import Dropdown from "../assets/Dropdown"

const Nav = () => {
  return (
    <nav className='text-xl  text-slate-50 bg-gray-700 font-Montserrat flex py-4'>
      {/* <img
        src='images/pp.png'
        alt='profile'
        className='object-contain h-12 w-12 rounded-full mx-12'
      /> */}
      <ul className='flex gap-6 px-2 py-2  mx-12'>
        <li>
          <img
            src='images/pp.png'
            alt='profile'
            className='object-contain h-12 w-12 rounded-full'
          />
        </li>
        {/* <li>Home</li> */}
        <li className='px-2 py-2'>About</li>
        <li>
          <Dropdown />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
