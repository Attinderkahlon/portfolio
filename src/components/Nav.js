import React from "react"

const Nav = () => {
  return (
    <nav className='text-xl  text-slate-50 bg-gray-700 font-Montserrat flex py-4'>
      <img
        src='images/pp.png'
        alt='profile'
        className='object-contain h-12 w-12 rounded-full mx-12'
      />
      <ul className='flex gap-6 py-2'>
        <li>Home</li>
        <li>About</li>
        <li>Links</li>
      </ul>
    </nav>
  )
}

export default Nav
