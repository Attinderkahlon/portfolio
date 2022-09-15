import React from 'react'
import Projects from '../assets/Projects'
import Skills from '../assets/Skills'
import pp from '../../images/pp.jpg'

const Body = () => {
  return (
    <div>
      <div className='flex flex-col items-center sm:flex-row py-16 justify-center  '>
        <img
          src={pp}
          alt='profile'
          className=' h-32 w-32 sm:h-64 sm:w-64 object-contain rounded-full sm:m-10'
        />
        <p className='p-12 text-2xl sm:mt-10'>
          <span className='text-3xl block mb-2 animate-bounce'>Hi ! 👋</span>
          My name is Attinder and I'm a Front End Developer from Australia This
          is my digital garden, where I write about the things I'm working on
          and share what I've learned. 😊
        </p>
      </div>
      <Skills />
      <Projects />
    </div>
  )
}

export default Body
