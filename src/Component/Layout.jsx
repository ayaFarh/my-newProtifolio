import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
   <div className='relative rounded-xl py-8   w-[90%] m-auto bg-white/5 min-h-screen'>
   <div className='w-[90%] m-auto ]'>
   <Navbar/>
  <div className=''>
  <div className="bg-gradient-to-br rounded-full opacity-40 from-[#00C2FF] to-[#FF29C3] absolute -top-[30%] -left-[10%] -z-10 w-[40%] max-[980px]:w-[50%] max-[460px]:w-[60%] max-[460px]:-top-[50%] h-[500px] blur-3xl"></div>
  <div className='pt-10 relative '>
  <Outlet/>
  
  <img src='/RoundCube-Orange-Glossy.svg' className='absolute -bottom-26 w-[80px] max-[722px]:w-[70px] max-[480px]:w-[50px] right-1/2'/>
 

  </div>
  <img src='/Pill-Blue-Glossy.svg' className='absolute bottom-1/3 -left-[6%]  w-[90px] max-[722px]:w-[70px] max-[480px]:w-[50px]'/>
  <img src='/Sphere-White-Matte.svg' className='absolute -top-3 right-0 w-[40px]'/>
  <img src='/SuperToroid-Yellow-Glossy.svg' className='absolute -bottom-[6%] w-[80px] -right-[5.5%] max-[800px]:-bottom-[6.6%] max-[779px]:-bottom-[7%]  max-[766px]:-bottom-[9%] max-[722px]:w-[70px] max-[480px]:w-[50px]'/>
  
  </div>
  
  </div>
  
   </div>
  )
}


