import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Components/Canvasloader'
import { ErrorBoundary } from 'react-error-boundary';
import { DirectionalLight } from 'three'
import Drone from '../Components/Drone';



function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="text-center text-red-500">
      <p>Something went wrong loading 3D...</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}


const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
     <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='hero_tag text-white'>Hello, Im Vedant!</p>
        <p className='sm:text-3xl text-2xl font-bold text-center font-generalsans text-white-800 '>Building the Future of Tech, One Line of Code at a Time</p>
        </div> 
        <div className='w-full h-full absolute inset-0'>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Canvas className='w-full h-full' >
            <Suspense fallback={<CanvasLoader/>}>

            <PerspectiveCamera makeDefault position={[0, 10, 50]}/>
            <Drone scale={5.4} position={[0,0,10]} rotation={[0, 0,0]}/>
            <ambientLight intensity={1.5}></ambientLight>
            <directionalLight position={[10, 10, 10]} intensity={3.5}></directionalLight>
            <OrbitControls enableZoom={false} enableDamping 
  dampingFactor={0.1} 
  rotateSpeed={0.5}
  minDistance={35} 
  maxDistance={70}
  maxPolarAngle={Math.PI/2}

  />
            </Suspense>
          </Canvas>
          </ErrorBoundary>
        </div>
    </section>
  )
}

export default Hero
