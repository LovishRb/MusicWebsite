import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Services from './components/services'
import MusicDistribution from './components/music-distribution'
import Plans from './components/plans'
import Subscribe from './components/subscribe'
import Footer from './components/footer'
import Contact from './components/contact'
import About from './components/about'
// import Exapmle from './components/exapmle'
import './styles/App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className='app-bg'>
      <Navbar/>
    </div>
      
      <Routes>
        <Route index element={
          <>
          <Home/>
          <Services/>
          <MusicDistribution/>
          <Plans/>
          <Subscribe/>
          </>
        }/>
        <Route path='contact' element={<Contact/>}/> 
        <Route path='about' element={<About/>}/> 
      </Routes>
      {/* <Exapmle/> */}
      <Footer/>
    </BrowserRouter>
  )
}

export default App
