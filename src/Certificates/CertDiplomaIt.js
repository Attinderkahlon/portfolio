import React from 'react'
import DiplomaIt from '../images/DiplomaIt.jpeg'

const CertDiplomaIt = () => {
  return (
    <div className='flex flex-col items-center h-full'>
      <img
        src={DiplomaIt}
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

export default CertDiplomaIt
