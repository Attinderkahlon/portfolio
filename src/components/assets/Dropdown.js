import React from "react"
import { useState } from "react"

const Dropdown = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className='relative inline-block text-left'>
        <div>
          <button
            type='button'
            className='inline-flex w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium shadow-sm hover: focus:outline-none '
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
            onClick={() => setOpen(!open)}
          >
            Links
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        {open ? (
          <div
            className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
            tabIndex='-1'
          >
            <div className='py-1' role='none'>
              <a
                href='https://github.com/Attinderkahlon'
                className=' block px-4 py-2 text-sm'
                role='menuitem'
                tabIndex='-1'
                id='menu-item-0'
              >
                Github
              </a>
              <a
                href='https://www.linkedin.com/in/attinder18/'
                className=' block px-4 py-2 text-sm'
                role='menuitem'
                tabIndex='-1'
                id='menu-item-1'
              >
                Linkedin
              </a>

              <form method='POST' action='#' role='none'></form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Dropdown
