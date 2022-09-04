import React from "react"
import Projects from "./Projects"
import Skills from "./Skills"

const Body = () => {
  return (
    <div className=' '>
      <div className='flex justify-center py-16'>
        <img
          src='images/pp.jpg'
          alt='profile'
          className='object-contain h-64 w-64 rounded-full m-10'
        />
        <p className='text-2xl mt-10 w-1/2 text-slate-50 font-Montserrat'>
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
