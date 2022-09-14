import React from 'react'
import ReactGa from '../images/ReactGa.png'

const CertReact = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
      <img
        src={ReactGa}
        alt='react'
        className=' sm:w-1/2 object-contain sm:m-10'
      />
      <h1 className='text-xl'>
        React Training & Bootcamp
        <span className='italic'> - General Assembly</span>
      </h1>
    </div>
  )
}

export default CertReact
