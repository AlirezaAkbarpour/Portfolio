import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function ContactBtn() {
  const containerRef : React.RefObject<HTMLDivElement> = useRef(null)
  const buttonRef : React.RefObject<HTMLButtonElement> = useRef(null)

  return (
    <div ref={containerRef} className='w-40 h-8 border-2 border-orange-700 flex justify-center  hover:bg-orange-700 delay-100'>
        <button className='text-slate-700 button
        text-lg font-light w-full h-8
         hover:text-white delay-100 text-center' ref={buttonRef} >Contact Me</button>
    </div>
  )
}
