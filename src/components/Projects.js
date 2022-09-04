import React from "react"

const Projects = () => {
  return (
    <div className='font-Montserrat tracking-wide '>
      <h1 className='flex flex-col items-center underline text-3xl text-slate-50 mt-16 mb-8 '>
        Projects
      </h1>
      <div className='flex flex-col items-center '>
        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50  hover:-translate-y-2 transition-transform ease-in-out cursor-pointer '>
          <h1 className='text-xl'>Film Project</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            perspiciatis atque repellendus consequatur.
          </p>
        </div>
        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <h1 className='text-xl'>Crypto tracker</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            perspiciatis atque repellendus consequatur.
          </p>
        </div>
        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <h1 className='text-xl'>Film Project</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            perspiciatis atque repellendus consequatur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
