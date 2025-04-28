import React from 'react'
import { contacticon } from '../constants'

const Contacts = () => {
  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
             <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen'/>
             <div className='contact-container'>
             <h3 className='head-text'>Contact Me</h3>
             <p className='text-lg text-white-600'>
             Got an idea or just want to create something fun together? Let's connect, build, and learn along the way
             </p>
             <div className='mt-16 flex flex-wrap gap-12'>
             {contacticon.map((contacticon)=>(
                              <div className='w-24 h-24'>
                                 <div>
                                    <a href={contacticon.link} target="_blank" rel="noopener noreferrer">
                                     <img src={contacticon.imageUrl} alt={contacticon.name} className='w-24 h-24 object-contain '/>
                                    </a>
                                 </div>
                             </div>))}

             </div>
             </div>

        </div>
      
    </section>
  )
}

export default Contacts
