import React from "react"

const Skills = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className=' border-l-8 border-cyan-400  w-4/5 bg-slate-700 p-6 rounded font-Montserrat'>
        <h1 className='text-3xl text-cyan-400 mb-2 underline '>Skills</h1>

        <div className='flex justify-between mr-6 '>
          <ul>
            <h1 className='text-2xl text-cyan-400 mb-2 '>Languages :</h1>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <h1 className='text-2xl text-cyan-400 mb-2 '>Library :</h1>
            <li>React</li>
          </ul>
          <ul>
            <h1 className='text-2xl text-cyan-400 mb-2 '>Testing :</h1>
            <li>Jest</li>
          </ul>
          <ul>
            <h1 className='text-2xl text-cyan-400 mb-2 '>CI/CD :</h1>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
