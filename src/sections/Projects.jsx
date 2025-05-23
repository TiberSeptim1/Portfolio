import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Components/Canvasloader';
import Computer from '../Components/Computer';

const Projects = () => {
    const projectno = myProjects.length;

    const [selectedProjectIndex, setselectedProjectIndex]=useState(0)
    const currentProject = myProjects[selectedProjectIndex];

    const handleNav = (direction)=>{
        setselectedProjectIndex((prevIndex)=>{
            if(direction==='previous'){
                return prevIndex===0? projectno-1 : prevIndex-1;
            } else {
                return prevIndex === projectno -1?0:prevIndex+1
            }
        })

    }
  return (
    <section className='c-space my-20'>
        <p className='head-text'>My Projects</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
            <div className='absolute top-0 right-0'>
              <img src={myProjects[0].spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-2xl' />

            </div>
           <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>
                {currentProject.title}
            </p> 
            <p className='animatedText'>
                {currentProject.desc}
            </p>
            <p className='animatedText'>
                {currentProject.subdesc}
            </p>
           </div>
             
             <div className='flex items-center justify-between flex-wrap gap-5'>
                <a className='flex items-center gap-2 cursor-pointer text-white-600' href={currentProject.href} target='_blank' rel='noreferrer'>
                    <p>Check Live Site</p>
                    <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3' />
                </a>
             </div>
             <div className='flex justify-between items-center mt-7'>
                <button className='arrow-btn' onClick={()=> handleNav('previous')}>
                    <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4'/>
                </button>

                <button className='arrow-btn' onClick={()=> handleNav('Next')}>
                    <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4'/>
                </button>
             </div>
        </div>
        <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
        <Canvas> 
            <ambientLight intensity={Math.PI/2}/>
            <directionalLight position={[10,5,10]}/>
            <Center>
                <Suspense fallback={<CanvasLoader/> }>
                  <group scale={2} position={[0,-3,0]} rotation={[0,0,0]}>
                    <Computer texture={currentProject.texture}/>
                     
                  </group>
                  <OrbitControls enableDamping enableZoom={false} rotateSpeed={0.25} maxPolarAngle={Math.PI/2}/>
                </Suspense>
            </Center>

        </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects
