'use client';
import React, { useRef, useState } from 'react'
import ContactPortal from '../contactPortal'

export default function ContactBtn() {
  const containerRef : React.RefObject<HTMLDivElement> = useRef(null)
  const buttonRef : React.RefObject<HTMLButtonElement> = useRef(null)
  const [isOpen,setOpen] = useState<boolean>(false)

  const OnButtonHandler = ()=>{
    setOpen(isOpen=>!isOpen)
    console.log(isOpen)
  }

  return (
    <div ref={containerRef} className='w-40 h-8 border-2 border-orange-700 flex justify-center  hover:bg-orange-700 delay-100'>
        <button className='text-slate-700 button
        text-lg font-light w-full h-8
         hover:text-white delay-100 text-center' ref={buttonRef} onClick={(OnButtonHandler)}>Contact Me</button>
         {isOpen && <ContactPortal isOpen={isOpen} OnClose={setOpen}/>}
    </div>
  )
}
