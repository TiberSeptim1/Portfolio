import React from 'react'
import { skills } from '../constants'
import { div } from 'three/tsl'

const About = () => {
  return (
    <section className='max-container bg-transparent c-space my-10 border-blue-100'>
        <h1 className='text-white head-text'>About me</h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-50'>
            <p>Hi, I'm Vedant, a B.Tech Computer Science student passionate about building powerful web applications, and I'm also exploring Artificial Intelligence and Data Science.</p>
        </div>
        <div className='py-10 flex flex-col'>
            <h3 className='subhead-text'>My Skills</h3>
              <h4 className='subhead-text text-white'>My TechStack</h4>
            <div className='mt-16 flex flex-wrap gap-12'>
             {skills.map((skills)=>(
                 <div className='w-20 h-20'>
                    <div>
                        <img src={skills.imageUrl} alt={skills.name} className='w-24 h-24 object-contain '/>
                    </div>
                </div>
             ))}
             </div>
           
            </div>  
    </section>
  )
}

export default About
