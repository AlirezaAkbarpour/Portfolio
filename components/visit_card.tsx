'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollGold from './svgs/scroll-gold'

export default function VisitCard() {
  const child = useRef<HTMLDivElement>(null)
  const [large,setLarge] = useState(false)
  const clickHandle = ()=>{
      setLarge(large=>!large)
    }
  useEffect(()=>{
    if(child.current && child.current.style.height < '96rem'){
      setLarge(true)
    }
    
  },[])
  return (
    <div className='w-3/4 my-28'>
        <div className='visit w-full rounded-lg transition-all duration-300 delay-75 ease-linear  p-10 bg-white' style={large?{height:'45rem'}:{height:'26rem'}} ref={child}>
           <div className='flex justify-between h-[24rem]'>
              <div className='w-1/2 p-4'>
                  <h1 className='text-4xl p-4 text-footer-color-black font-bold'>Alireza Akbarpour</h1>
                  <h2 className='text-2xl px-4 py-2 text-gray-600'>Front-End Developer</h2>
                  <h2 className='text-2xl px-4 py-2 text-gray-600'>UI & UX Designer</h2>
                  <h2 className='text-2xl px-4 py-2 text-gray-600'>CE Student</h2>
            </div>
            <div className='w-1/2'>
                  <div className='w-full h-80 bg-slate-600 rounded-2xl m-4'></div>
            </div>
           </div>
           {large&&<div className="w-full mx-auto">
                <h1 className='text-xl text-gray-600 px-4'>Hi I study computer engineering in Tabriz university</h1>
           </div>}
        </div>
        <div className='w-full bg-footer-color-black 
          h-12 rounded-b-lg flex justify-center py-2 hover:cursor-pointer transition-colors '  
          onClick={()=>clickHandle()}
        >
            <ScrollGold/>
        </div>
    </div>
  )
}
