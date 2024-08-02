"use client"
import React, { RefObject, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Loading() {
  
  const dotRef : RefObject<HTMLSpanElement> = useRef(null)
  const container : RefObject<HTMLDivElement> = useRef(null)
  const timeline = gsap.timeline()

  useGSAP(()=>{
    timeline.from(".dotref",{opacity:1})
  },{scope:container})

  return (
    <div className='w-full z-50 fixed h-full bg-orange-300 flex items-center justify-center flex-wrap'>
          <div className='w-full h-16 text-center text-4xl font-bold animate-ping delay-1000 text-white'>
            Loading <span className='dotref' ref={dotRef}>...</span>
          </div>
    </div>
  )
}
