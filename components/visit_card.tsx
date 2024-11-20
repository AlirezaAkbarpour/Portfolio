'use client'
import React, { useEffect, useRef, useState } from 'react'
import ScrollGold from './svgs/scroll-gold'
import gsap from 'gsap'
import { useGSAP, } from '@gsap/react'

export default function VisitCard() {
  const toggle = useRef<HTMLDivElement>(null)
  const [large,setLarge] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLParagraphElement>(null)
  
  useGSAP(()=>{
    gsap.from(container.current,{marginTop:20,opacity:0,delay:.2})
  })


  const clickHandle = ()=>{
      setLarge(large=>!large)
      if(large) gsap.to(toggle.current,{height:'26rem',duration:0.4,ease:'power2.in'})
      if(!large) gsap.to(toggle.current,{height:'45rem',duration:0.4,ease:'power2.out'})
      }
  const classRotate = large?'rotate-180':''

  return (
    <div className='w-3/4 my-28' ref={container}>
        <div className='visit w-full rounded-lg p-10 bg-white' ref={toggle}>
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
           {large&&<div className=" w-full mx-auto">
                <h1 ref={text} className='text text-xl text-gray-600 px-4'>Hi I study computer engineering in Tabriz university</h1>
           </div>}
        </div>
        <div className='w-full bg-footer-color-black 
          h-12 rounded-b-lg flex justify-center py-2 hover:cursor-pointer transition-all delay-75'  
          onClick={()=>clickHandle()}
        >
          <div className={classRotate}>
            <ScrollGold/>
          </div>
        </div>
    </div>
  )
}
