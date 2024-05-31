// import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Areas from './components/Areas'
import Carousel from './components/Carousel'
import Box from './components/Box'
import News from './components/News'
import Support from './components/Support'
import Footer from './components/Footer'
import About from './components/About'
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Areas/>
      <Carousel/>
      <Box/>
      <News/>
      <Support/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
