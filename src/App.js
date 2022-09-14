import Body from './components/layout/Body'
import Home from './components/layout/Home'
import Certifications from './components/subnav/Certifications'
import Contact from './components/subnav/Contact'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'

function App() {
  return (
    <div className=' bg-slate-900 text-slate-50 font-Montserrat'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='certifications' element={<Certifications />} />
        <Route path='contact' element={<Contact />} />
        <Route path='main' element={<Body />} />
      </Routes>
    </div>
  )
}

export default App
