'use client'
import React from 'react'
import Circle from './svgs/circle'
import Link from 'next/link'
import Feedback from './actions/feedback'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {

    return (
      <footer className='z-50'>
      <div className='footer w-full top-full h-[220px] bg-footer-color-black rounded-t-3xl flex mt-20'>
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
              <div className='w-24 text-footer-light-text2 mt-4 hover:cursor-pointer text-base font-thin hover:text-white hover:pl-2 transition hover:delay-500 ease-in-out'>
                <Link href={'/'} >
                      Home Page
                </Link>
              </div>
              <div className='w-24 text-footer-light-text2 mt-4 text-base font-thin hover:cursor-pointer hover:text-white hover:pl-2 transition hover:delay-500 ease-in-out'>
                <Link href={'/about'} >
                      About Page
                </Link>
              </div>
              <div className='w-24 text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:cursor-pointer hover:pl-2 transition hover:delay-500 ease-in-out'>
                <Link href={'/works'} >
                      Works Page
                </Link>
              </div>
          </div>
          <div className='w-1/3 '>
              <div className='w-24 text-footer-light-text mt-6 text-xl'>Follow Me</div>
              <div className='text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:pl-2 transition hover:cursor-pointer hover:delay-500 ease-in-out'>
                <Link href={'/'} >
                      Twitter
                </Link>
              </div>
              <div className='w-24 text-footer-light-text2 mt-4 text-base font-thin hover:cursor-pointer hover:text-white hover:pl-2 transition hover:delay-500 ease-in-out'>
                <Link href={'/about'} >
                      Instagram
                </Link>
              </div>
              <div className='w-24 text-footer-light-text2 mt-4 text-base font-thin hover:text-white hover:cursor-pointer hover:pl-2 transition hover:delay-500 ease-in-out'>
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
  </footer>
      )
}
