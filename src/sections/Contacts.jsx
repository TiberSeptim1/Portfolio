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
             <div className='mt-16 grid grid-cols-3 gap-12 sm:grid-cols-3 '>
             {contacticon.map((contacticon)=>(
                              <div className=' sm:w-24 sm:h-24 w-16 h-16'>
                                 <div className='transition-transform duration-200 transform hover:scale-125 place-items-center'>
                                    <a href={contacticon.link} target="_blank" rel="noopener noreferrer">
                                     <img src={contacticon.imageUrl} alt={contacticon.name} className='sm:w-24 sm:h-24 w-16 h-16 object-contain'/>
                                     <div className='text-white-700 text-xl font-semibold text-center py-2'>{contacticon.name}</div>
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
