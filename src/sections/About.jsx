import React from 'react'
import { skills } from '../constants'
import { div } from 'three/tsl'

const About = () => {
  return (
    <section className='max-container bg-transparent c-space my-10 border-blue-100'>
        <h1 className='head-text'>About me</h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-50'>
            <p className='pe-16 text-lg'>Hi, I'm Vedant, a B.Tech Computer Science student passionate about building powerful web applications, and I'm also exploring Artificial Intelligence and Data Science.</p>
        </div>
        <div className='py-10 flex flex-col'>
            <h3 className='subhead-text'>My Skills</h3>
              <h4 className='subhead-text text-white'>My TechStack</h4>
            <div className='mt-16 grid grid-cols-3 gap-8 px-20'>
             {skills.map((skills)=>(
                 <div className='w-20 h-20'>
                    <div>
                        <img src={skills.imageUrl} alt={skills.name} className='w-16 h-16 object-contain '/>
                    </div>
                </div>
             ))}
             </div>
           
            </div>  
    </section>
  )
}

export default About
