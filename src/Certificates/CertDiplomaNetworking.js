import React from 'react'
import DiplomaNetworking from '../images/DiplomaNetworking.jpeg'

const CertDiplomaNetworking = () => {
  return (
    <div className='flex flex-col items-center h-full'>
      <img
        src={DiplomaNetworking}
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

export default CertDiplomaNetworking
