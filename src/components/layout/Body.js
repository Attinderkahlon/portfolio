import React from "react"
import Projects from "../assets/Projects"
import Skills from "../assets/Skills"

const Body = () => {
  return (
    <div className=' '>
      <div className='flex flex-col items-center md:flex-row  py-16 justify-center  '>
        <img
          src='images/pp.jpg'
          alt='profile'
          className='object-contain h-64 w-64 rounded-full m-10'
        />
        <p className='p-12 text-2xl md:mt-10'>
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
