import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contacts from './sections/Contacts'


const App = () => {
  return (
    <main className='mx-auto max-w-full'>
      <Navbar/>
      <div id='home'>
      <Hero/>
      </div>

      <div id='about'>
      <About/>
      </div>

      <div id='projects'>
      <Projects/>
      </div>

      <div id='contact'>
      <Contacts/>
      </div>
      
    </main>
  )
}

export default App
