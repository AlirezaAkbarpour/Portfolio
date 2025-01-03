'use client'
import Image from 'next/image'
import Link from 'next/link'
import Banner_cube from '../components/svgs/banner-cube'
import Works_banner from '../components/banners/works-banner'
import Blog_banner from '../components/banners/blog-banner'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import React, { Fragment, useRef } from 'react'

export default function Home() {
    //refs
    const itemBoxRef : React.RefObject<HTMLDivElement> = useRef(null)
    const container: React.RefObject<HTMLDivElement> = useRef(null)
    //gsap config
    gsap.registerPlugin(ScrollTrigger)
    const timeLine = gsap.timeline()
    const timeLine2 = gsap.timeline()
    const scrollTl = gsap.timeline({
      scrollTrigger:{
        trigger: '.item-box',
        start: 'top 80%',
        end:'bottom bottom',
        toggleActions:"play none none reverse",
      }
    })

    useGSAP(()=>{
        timeLine.from('.titleOne',{opacity:0, x:30 , duration:'0.4'})
        timeLine.from('.titleTwo',{opacity:0, x:30 , duration:'0.4'})
        timeLine.from('.desc',{opacity:0,duration:'0.4'})
        timeLine.from('.actionOne',{opacity:0,x:-20,duration:'0.4'})
        timeLine.from('.actionTwo',{opacity:0,duration:'0.4'})

    },{scope:container})
  
    useGSAP(()=>{
        timeLine2.from('.react-spinner',{opacity:0,rotate:'360deg',duration:1,delay:0.2})
        timeLine2.from('.desc2',{opacity:0,x:20,duration:1})
        timeLine2.from('.arrow',{opacity:0,duration:1,ease:'sine'})
    },{scope:container})

    useGSAP(()=>{
        scrollTl.from('.counter-box',{opacity:0,stagger:{each:0.5}})
        scrollTl.from('.item-box',{opacity:0,stagger:{each:0.5}})
    },{scope:container})

    useGSAP(()=>{
      timeLine.from('#banner',{opacity:0,marginLeft:20,stagger:{each:1}})
    },{scope:container})


    return (
      <Fragment>
        <div className='w-full h-full bg-background-theme mx-auto container max-md:w-[768px]' ref={container}>
          <div className="w-full h-[42rem] mt-16 flex max-md:flex-col-reverse justify-between">
            <div className="title flex mt-20 flex-col py-4 px-24 w-1/2">
              <div className="titleOne w-full font-archivo text-6xl text-icon-blue font-bold mx-4 p-2 max-lg:text-2xl">Hy ! I Am</div>
              <div className="titleTwo w-full font-archivo text-6xl text-icon-blue font-bold mx-4 p-2 max-lg:text-2xl">Alireza Akbarpour</div>
              <div className="desc w-full font-archivo text-xl text-icon-blue/80 font-light mx-4 py-4 px-2 max-lg:text-lg">Web Developer & FrontEnd Developer</div>
              <div className="actions flex px-8 mt-5 w-full">
                  <div className='actionOne'>
                     <Link href='about' className='w-32 h-14'>
                      <p className='w-28 h-10 bg-orange-700 text-white 
                      text-center p-2 text-xl m-2 font-semibold btn_shadow  align-middle'>Hire Me</p>
                     </Link>
                  </div>
                  <div className='actionTwo'>
                    <Link href='about'>
                        <p className=' w-28 h-10 border-2 border-orange-700 text-icon-blue 
                           text-center p-2 text-base mt-2 mx-6 font-light hover:bg-orange-700
                            hover:text-white delay-100 ease-linear hover:font-medium'>Know more</p>
                    </Link>
                  </div>
                  
              </div>
              <div className="detail flex w-full justify-start mt-16 mx-2">
                  <Image className='react-spinner' src={'/images/fa-brands_react.png'} alt='spinner' width={120} height={120}/>
                  <div className="desc2 w-72 h-20 text-base font-light text-icon-blue py-9 px-2">
                    Product Designer and Developer specialized in UI/UX
                  </div>
                  <Image src={'/images/icons8-curly-arrow-80.png'} alt='spinner' width={120} height={120} className='arrow relative bottom-10 left-8 scale-125 -rotate-12 '/>
              </div>
            </div>
            <div className="banner  bg-slate-600 lg:w-[640px] lg:h-[420px] mt-24 py-4 px-24 mr-24
            md:w-64
            md:h-64
            ">
  
            </div>
          </div>
          <div className='w-full h-48 flex justify-between 
          max-sm:h-[50rem] max-sm:items-center max-sm:w-[764px] max-sm:flex-col bg-white p-2' ref={itemBoxRef}>
            <div className='counter-box w-1/4 mt-2'> 
                  <div>
                    <Banner_cube/>
                  </div>
            </div>
            <div className='item-box w-1/4 mt-2'>
                  <div className='py-2'>
                    <Image src={'/images/source-code.png'} className='w-16 h-14 mb-1 mr-2' alt='code' width={64} height={68}/>
                  </div>
                  <div className='font-light text-base text-zinc-600 my-1'>Front End Developer</div>
                  <div className='w-56 font-light text-sm'>We provide structured graphical user interface</div>
            </div>
            <div className='item-box w-1/4 mt-2'>
                  <div className=" py-2">
                    <Image src={'/images/light-icon.png'} className='mb-1 w-16 h-14 mr-1 ' alt='light' width={64} height={64}/>
                  </div>
                  <div className='font-light text-zinc-600 my-1 text-base'>Creation Ideas</div>
                  <div className='w-56 font-light text-sm'>We Creative impossible ideas in any way</div>
            </div>
            <div className='item-box w-1/4 mt-2'>
            <div className="py-2">
                    <Image src={'/images/webcam-icon.png'} className='w-16 h-14 mb-1 mr-1' alt='light' width={64} height={68}/>
                  </div>
                  <div className='font-light text-zinc-600 my-1 text-base'>Complex Plans</div>
                  <div className='w-56 font-light text-sm'>We implementation of complex plans on Web2/Web3</div>
            </div>
          </div>
          <div className='banners w-full my-12'>
            <div id='banner' className="w-full flex justify-center">
                    <Works_banner/> 
            </div>
            <div id='banner' className='w-full flex justify-center'>
                    <Blog_banner/>
            </div>
          </div>
        </div>
        </Fragment>
    )
  }
