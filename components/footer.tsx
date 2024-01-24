'use client'
import React ,{useRef} from 'react'
import Circle from './svgs/circle'
import Link from 'next/link'
import Feedback from './actions/feedback'
import { useGSAP } from '@gsap/react'
import {gsap,ScrollTrigger} from 'gsap/all'

export default function Footer() {

  const container = useRef<HTMLInputElement>(null)
  gsap.registerPlugin(ScrollTrigger)
  let scrollTl = gsap.timeline({
        scrollTrigger:{
          trigger: ".footer",
          start:"20% 90%",
          end:"bottom 70%",
          toggleActions:"play pause resume reverse"
        },
      })
  useGSAP(()=>{
    scrollTl.from('.footer',{opacity:0,duration:1.5,y:20,ease:'power3.inOut'})
  },)

  return (
    <div ref={container}>
    <div className='footer w-full h-[220px] bg-footer-color-black mt-8 rounded-t-3xl flex'>
        <div className='w-1/2 flex justify-start'>
            <div className='w-1/3'>
                <div id="icon" className="w-64 h-16 p-2 mt-2 flex align-middle text-white 
                    font-black text-4xl
                    font-archivo
                    mr-2
                    hover:animate-pulse
                    m-4
                    "> 
                   A.K.A 
                <Circle/> 
                </div>
            </div>
            <div className='w-1/3 '>
                <div className='text-footer-light-text mt-6 text-xl'>Pages</div>
                <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:ml-2 transition delay-200 ease-in-out'>
                  <Link href={'/'} >
                        Home Page
                  </Link>
                </div>
                <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:ml-2 transition delay-200 ease-in-out'>
                  <Link href={'/about'} >
                        About Page
                  </Link>
                </div>
                <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:ml-2 transition delay-200 ease-in-out'>
                  <Link href={'/works'} >
                        Works Page
                  </Link>
                </div>
            </div>
            <div className='w-1/3 '>
                <div className='text-footer-light-text mt-6 text-xl'>Other Sites</div>
                <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:ml-2 transition delay-200 ease-in-out'>
                  <Link href={'/'} >
                        Twitter
                  </Link>
                </div>
                <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:ml-2 transition delay-200 ease-in-out'>
                  <Link href={'/about'} >
                        Instagram
                  </Link>
                </div>
                <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:ml-2 transition delay-200 ease-in-out'>
                  <Link href={'/works'} >
                        LinkedIn
                  </Link>
                </div>
            </div>
        </div>
        
        <div className='w-1/2'>
            <div className='text-footer-light-text font-semibold mt-6 text-xl'>How You Can Contact me!</div>
            <div className='text-gray-50 mt-4 text-base font-thin'>Contact me just by send notification</div>
            <Feedback/>
        </div>
    </div>
    </div>
  )
}
