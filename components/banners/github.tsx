'use client'
import { GitHub } from '@mui/icons-material'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'


export default function Github_Ban() {
  gsap.registerPlugin()
  const cart_ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
      const width = window.innerWidth
      cart_ref.current?.addEventListener("mousemove",(e)=>{
        console.log(e.clientX/100,e.clientY)
          if(e.clientX>width/2) {
          gsap.to('.cart',{
              rotateZ:e.clientX/100,
              rotateX:e.clientY/20,
              immediateRender:false,
            })
          }else{
            gsap.to('.cart',{
              rotateZ:-e.clientX/100,
              rotationX:-e.clientY/20,
              immediateRender:false,
            })
          }
      })
      cart_ref.current?.addEventListener("mouseleave",()=>{
        gsap.to('.cart',{
          rotateY:0,
          rotateZ:0,
          ease:'power3.out',
          duration:0.5
        })
      })
  })
  return (
    <Link href={'https://github.com'} className='w-full h-full'>
    <div className='cart w-p h-80 bg-white shadow-2xl rounded-2xl mt-10 flex 
      transition-all ease-in hover:bg-gray-600 hover:text-white hover:cursor-pointer'
      ref={cart_ref}
      >
        <div className='w-1/2 mx-20 mt-20'>
            <div className="text-7xl font-bold text-center first-letter:font-extrabold p-2 " >Github</div>
            <div className='text-5xl font-bold text-center p-2'>Profile</div>
        </div>
        <div className='w-1/3 p-10 mr-20'>
            <GitHub sx={{fontSize:'14rem'}}/>
        </div>
    </div>
    </Link>
  )
}
