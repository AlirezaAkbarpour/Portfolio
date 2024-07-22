'use client'
import Github_Ban from '@/components/banners/github'
import LinerStar from '@/components/svgs/linerStar'
import { useGSAP } from '@gsap/react'
import { Instagram, LinkedIn, X } from '@mui/icons-material'
import gsap from 'gsap'
import {useRef } from 'react'

export default function Page() {
  const container : React.RefObject<HTMLDivElement> = useRef(null)
  const timeline = gsap.timeline()
  useGSAP(()=>{
     gsap.from('#Mystar',{y:20,yoyo:true,repeat:-1,duration:2.5})
     gsap.to('#Mystar2',{y:150,yoyo:true,repeat:-1,duration:4})
     gsap.from('#Mystar3',{y:270,yoyo:true,repeat:-1,duration:2.1})
     
     

     gsap.from('#Mystar4',{y:20,yoyo:true,repeat:-1,duration:3.5})
     gsap.to('#Mystar5',{y:150,yoyo:true,repeat:-1,duration:2.7})
     gsap.from('#Mystar6',{y:270,yoyo:true,repeat:-1,duration:3.1})
  },{scope:container})

  useGSAP(()=>{
     timeline.from('#git-pr',{opacity:0,duration:1})
     timeline.fromTo('#item',{opacity:0},{opacity:1,stagger:{each:.2}})
  })

  return (
    <div ref={container} className='w-full min-h-screen mt-10 bg-background-theme z-0' >
        <div  className='flex justify-center '>
          <div className='w-full relative z-10'>
            <div id='Mystar' className='absolute translate-x-72 translate-y-10'>
              <LinerStar index={"1"}/>
            </div>
            <div id='Mystar2' className='absolute translate-x-32 translate-y-40'>
              <LinerStar index={"2"}/>
            </div>
            <div id='Mystar3' className='absolute translate-x-60 translate-y-72'>
                <LinerStar index={"3"}/>
            </div> 
        </div>
        <div id='git-pr' className="w-full h-full flex 
        justify-center mt-4 py-4 px-auto">
            <Github_Ban/>
        </div>
        <div className='w-full relative z-10'> 
            <div id='Mystar4' className='absolute translate-x-10 translate-y-10'>
                <LinerStar index={"4"}/>
            </div>
            <div id='Mystar5' className='absolute translate-x-36 translate-y-48'>
                <LinerStar index={"5"}/>
            </div>
            <div id='Mystar6' className='absolute -translate-x-10 translate-y-80'>
                <LinerStar index={"6"}/>
            </div>
        </div>
        </div>
        <div className='w-2/3 h-36 mx-auto mt-20 flex justify-between px-2'>
              <div id='item' className='w-[136px] h-[136px] bg-white rounded-2xl shadow-2xl p-1
               transition-all ease-in-out duration-300 hover:bg-gradient-to-t from-blue-500 to-blue-300 hover:text-white'>
                <LinkedIn className='w-full h-full' sx={{fontSize:'8rem'}}/>
              </div>
              <div id='item' className='w-[136px] h-[136px] bg-white rounded-2xl shadow-2xl p-1 
               transition-all ease-in-out duration-300 hover:bg-gradient-to-t from-orange-300 from-10% via-purple-700 via-60% to-blue-400 hover:text-white'>
                <Instagram sx={{fontSize:'8rem'}}/>
              </div>
              <div id='item' className='w-[136px] h-[136px] bg-white rounded-2xl shadow-2xl p-1 
              transition-all ease-in-out duration-300 hover:bg-gradient-to-t from-zinc-900 to-black hover:text-white'>
                <X sx={{fontSize:'8rem'}}/>
              </div>
              <script src='script.js' async/>
        </div>
        <div className='w-full min-h-96 bg-white mt-32 mx-auto '>
          <div className='w-full flex justify-center'>
            <div className='w-full text-4xl font-bold py-14 pl-48 text-start'>Last Portfolio</div>
          </div>
            <div className='bg-background-theme'>
              <div>
                <div>Title</div>
              </div>
              <div>
                <div>Description</div>
              </div>
            </div>
        </div>
    </div>
  )
}
