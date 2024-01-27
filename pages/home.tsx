'use client'
import Image from 'next/image'
import Link from 'next/link'
import Banner_cube from '../components/svgs/banner-cube'
import Works_banner from '../components/works-banner'
import Blog_banner from '../components/blog-banner'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'


export default function Home() {

    const timeLine = gsap.timeline()
    const container: React.RefObject<HTMLDivElement> = useRef(null)
    const timeLine2 = gsap.timeline()
    const scrollTl = gsap.timeline({
      scrollTrigger:{
        trigger:'.item-box',
        start: 'top center',
        end:'bottom bottom',
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
        scrollTl.from('.cube',{opacity:0,})
        scrollTl.from('.item-box',{opacity:0,stagger:{each:0.5}})
    },{scope:container})
    return (
        <div className='w-full h-auto min-h-[720px] bg-background-theme' ref={container}>
          <div className="w-full h-[640px] mt-12 flex flex-col md:flex-row justify-between">
            <div className="title flex mt-20 flex-col py-4 px-24 w-1/2">
              <div className="titleOne w-full text-6xl text-icon-blue font-bold mx-4 p-2">Hy ! I Am</div>
              <div className="titleTwo w-full text-6xl text-icon-blue font-bold mx-4 p-2">Alireza Akbarpour</div>
              <div className="desc w-full text-xl text-icon-blue/80 font-light mx-4 py-4 px-2">Web Developer & FrontEnd Developer by React.js</div>
              <div className="actions flex px-8 mt-5 w-full">
                  <div className='actionOne'>
                     <Link href='portfolio' className=' w-28 h-10 bg-orange-700 text-white 
                     text-center p-2 text-xl m-2 font-semibold '>Hire Me</Link>
                  </div>
                  <div className='actionTwo'>
                    <Link href='about' className=' w-32 h-10 border-2 border-orange-700 text-icon-blue 
                    text-center p-2 text-base my-2 mx-6 font-light hover:bg-orange-700 hover:text-white delay-100 ease-linear hover:font-normal'>
                    Know more
                    </Link>
                  </div>
                  
              </div>
              <div className="detail flex w-full justify-start mt-16 mx-2">
                  <Image className='react-spinner' src={'/images/fa-brands_react.png'} alt='spinner' width={120} height={120}/>
                  <div className="desc2 w-72 h-20 text-base font-light text-icon-blue/80 py-8 px-2">
                    Product Designer and Developer specialized in UI/UX
                  </div>
                  <Image src={'/images/icons8-curly-arrow-80.png'} alt='spinner' width={120} height={120} className='arrow relative bottom-10 left-8 scale-125 -rotate-12 '/>
              </div>
            </div>
            <div className="banner bg-slate-600 w-[640px] h-[420px] mt-24 py-4 px-24 mr-24">
  
            </div>
          </div>
          <div className='w-full h-48 flex justify-between bg-white p-2'>
            <div className='cube w-1/4'> 
                  <div>
                    <Banner_cube/>
                  </div>
            </div>
            <div className='item-box w-1/4'>
                  <div className=' py-2'>
                    <Image src={'/images/source-code.png'} className='w-16 h-14 m-1' alt='code' width={64} height={68}/>
                  </div>
                  <div className='font-light text-base text-zinc-600 my-1'>Front End Developer</div>
                  <div className='w-56 font-light text-sm'>We provide structured graphical user interface</div>
            </div>
            <div className='item-box w-1/4'>
                  <div className=" py-2">
                    <Image src={'/images/light-icon.png'} className='m-1 w-16 h-14' alt='light' width={64} height={64}/>
                  </div>
                  <div className='font-light text-zinc-600 my-1 text-base'>UI/UX Designer</div>
                  <div className='w-56 font-light text-sm'>The user interface is the graphical layout</div>
            </div>
            <div className='item-box w-1/4'>
            <div className=" py-2">
                    <Image src={'/images/webcam-icon.png'} className='w-16 h-14 m-1' alt='light' width={64} height={68}/>
                  </div>
                  <div className='font-light text-zinc-600 my-1 text-base'>UI/UX Designer</div>
                  <div className='w-56 font-light text-sm'>The user interface is the graphical layout</div>
            </div>
          </div>
          <div className="w-full flex justify-center">
                  <Works_banner/> 
          </div>
          <div className='w-full flex justify-center'>
                  <Blog_banner/>
          </div>
        </div>
    )
  }