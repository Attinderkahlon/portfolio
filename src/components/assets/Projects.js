import React from "react"

const Projects = () => {
  return (
    <div className='font-Montserrat tracking-wide '>
      <h1 className='flex flex-col items-center underline text-3xl text-slate-50 mt-16 mb-8 '>
        Projects
      </h1>
      <div className='flex flex-col items-center '>
        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <a href='http://ga-crypto.s3-website-ap-southeast-2.amazonaws.com'>
            <h1 className='text-xl'>Crypto tracker</h1>

            <p>
              This is a crypto tracker website build with typescipt. We can
              search crypto coins and when we click on a coin it will take us to
              another page and show the price graph for that coin. • I used
              tailwind to style the website. It is a fully responsive website.
            </p>
          </a>
        </div>
        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50  hover:-translate-y-2 transition-transform ease-in-out cursor-pointer '>
          <a href='https://feedbackform2.netlify.app'>
            <h1 className='text-xl'>
              Feedback form Web App for restaurant customers
            </h1>
            <p>
              This is a feedback form app calculating the score based on
              feedback. This app is created with class components in React Js.
            </p>
          </a>
        </div>

        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <a href='https://unitconverter2.netlify.app'>
            <h1 className='text-xl'>Metric/Imperial Unit Conversion</h1>
            <p>
              It is a unit converter. I created this website using Vanilla.
              javascript.
            </p>
          </a>
        </div>
        <div className='border border-slate-600 rounded-xl p-4 m-4 w-4/5 bg-slate-800 text-slate-50 hover:-translate-y-2 transition-transform ease-in-out cursor-pointer'>
          <a href='https://scoreboardb.netlify.app'>
            <h1 className='text-xl'>Basketball scoreboard </h1>
            <p>
              This is basketball based scoreboard build using vanilla Javascript
              and plain CSS.
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
