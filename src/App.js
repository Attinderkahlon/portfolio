import Home from './components/layout/Home'
import Certifications from './components/subnav/Certifications'
import Contact from './components/subnav/Contact'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import CertReact from './Certificates/CertReact'
import CertDiplomaIt from './Certificates/CertDiplomaIt'
import CertDiplomaNetworking from './Certificates/CertDiplomaNetworking'

function App() {
  return (
    <div className=' bg-slate-900 text-slate-50 font-Montserrat'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='certifications' element={<Certifications />} />
        <Route path='react' element={<CertReact />} />
        <Route path='/diplomaIt' element={<CertDiplomaIt />} />
        <Route path='/diplomaNetworking' element={<CertDiplomaNetworking />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
