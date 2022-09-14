import { useEffect, useRef, useState } from 'react'

function Dropdown() {
  const ref = useRef()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [isMenuOpen])

  return (
    <div className='relative inline-block text-left' ref={ref}>
      <button
        type='button'
        className='inline-flex w-full rounded-md   text-l font-medium shadow-sm hover: focus:outline-none hover:border'
        id='menu-button'
        aria-expanded='true'
        aria-haspopup='true'
        onClick={() => setIsMenuOpen((oldState) => !oldState)}
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

      {isMenuOpen && (
        <div
          className='absolute left-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex='-1'
        >
          <div className='py-1' role='none'>
            <a
              href='https://github.com/Attinderkahlon'
              target='_blank'
              rel='noopener noreferrer'
              className=' block px-4 py-2 text-sm'
              role='menuitem'
              tabIndex='-1'
              id='menu-item-0'
            >
              Github
            </a>
            <a
              href='https://www.linkedin.com/in/attinder18/'
              target='_blank'
              rel='noopener noreferrer'
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
      )}
    </div>
  )
}

export default Dropdown
