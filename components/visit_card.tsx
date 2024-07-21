'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollGold from './svgs/scroll-gold'

export default function VisitCard() {
  const box : React.RefObject<HTMLDivElement> = useRef(null)
  const [size,setSize] = useState('')

  const clickHandle = ()=>{
    const height : string | undefined = box.current?.style.height
    if(height){
      height <= '26rem' ? setSize('52rem'): setSize('26rem')
    }
  }

  return (
    <div className='w-3/4  my-28 flex flex-col'>
        <div style={{height:size||'26rem',transition:'all 350ms linear' }} className='visit w-full rounded-lg flex justify-between p-10 bg-white'  ref={box}>
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
        <div className='w-full bg-footer-color-black 
          h-12 rounded-b-lg flex justify-center py-2 hover:cursor-pointer transition-colors '  
          onClick={(e)=>clickHandle()}
        >
            <ScrollGold/>
        </div>
    </div>
  )
}
