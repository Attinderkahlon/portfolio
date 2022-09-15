import React from 'react'
import { Link } from 'react-router-dom'

const Certifications = () => {
  return (
    <>
      <h1 className='flex flex-col items-center underline text-3xl text-slate-50 m-12 '>
        Certifications
      </h1>
      <div className='flex flex-col items-center h-screen '>
        <div className='border border-slate-600 rounded-xl p-4 m-4 bg-slate-800 text-slate-50  hover:-translate-y-2 transition-transform ease-in-out cursor-pointer '>
          <Link to='/react'>
            <h1 className='text-xl'>
              React Training & Bootcamp
              <span className='italic'>- General Assembly</span>
            </h1>
          </Link>
        </div>
        <div className='border border-slate-600 rounded-xl p-4 m-4  bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <a
            href='https://www.udemy.com/certificate/UC-5abef72f-24ab-45eb-a522-b4747b2724a2/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h1 className='text-xl'>
              Modern JavaScript
              <span className='italic'>- Udemy</span>
            </h1>
          </a>
        </div>

        <div className='border border-slate-600 rounded-xl p-4 m-4  bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <Link to='/#/diplomaIt'>
            <h1 className='text-xl'>
              Diploma in IT : Computer Software
              <span className='italic'>- Upskilled</span>
            </h1>
          </Link>
        </div>
        <div className='border border-slate-600 rounded-xl p-4 m-4 bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <Link to='/#/diplomaNetworking'>
            <h1 className='text-xl'>
              Diploma in IT : Networking
              <span className='italic'>- Upskilled</span>
            </h1>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Certifications
