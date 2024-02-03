"use client";
import React, { Suspense, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function WorksPage() {

  const container_ref : React.RefObject<HTMLDivElement> = useRef(null)
  const textRef : React.RefObject<HTMLParagraphElement> = useRef(null)
  const timeLine = gsap.timeline({
  })

  useGSAP(()=>{
    timeLine.from('.textRef',{opacity:0,x:20,color:'white',stagger:{each:0.5}})
    timeLine.from('.image',{opacity:0,scale:0.5,duration:1})
  },{scope:container_ref})

  return (
    <div className='w-full h-screen bg-background-theme' ref={container_ref}>
        <div className="w-full mt-40 mx-12">
            <div className='flex justify-around'>
                <div className='mt-16'>   
                    <p className='textRef w-full text-7xl font-bold m-2 text-footer-color-black' >It{"'"}s</p>
                    <p className='textRef w-full text-7xl font-bold m-2 text-footer-color-black'>My Works!</p>
                    <p className='textRef w-full text-2xl font-light p-2 mt-2 ml-1 text-zinc-600'>Some Projects that you can look!</p>
                </div>   
                <div className='image mx-16'>
                    <Image src="/images/look-up-banner.png"  width={560} height={560} className='w-[560px] h-[360px]' alt='image'/>
                </div>
            </div> 
        </div>
    </div>
  )
}
