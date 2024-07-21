'use client'
import Github_Ban from '@/components/banners/github'
import LinerStar from '@/components/svgs/linerStar'
import { useGSAP } from '@gsap/react'
import { Instagram, LinkedIn, X } from '@mui/icons-material'
import gsap from 'gsap'
import {useRef } from 'react'

export default function Page() {
  const container : React.RefObject<HTMLDivElement> = useRef(null)

  useGSAP(()=>{
     gsap.from('#Mystar',{y:20,yoyo:true,repeat:-1,duration:2.5})
     gsap.to('#Mystar2',{y:150,yoyo:true,repeat:-1,duration:4})
     gsap.from('#Mystar3',{y:270,yoyo:true,repeat:-1,duration:2.1})
     
     gsap.from('#git-pr',{opacity:0})

     gsap.from('#Mystar4',{y:20,yoyo:true,repeat:-1,duration:3.5})
     gsap.to('#Mystar5',{y:150,yoyo:true,repeat:-1,duration:2.7})
     gsap.from('#Mystar6',{y:270,yoyo:true,repeat:-1,duration:3.1})
  },{scope:container})

  return (
    <div className='w-full min-h-screen mt-10 bg-background-theme z-0' >
        <div ref={container} className='flex justify-center '>
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
              <div className='w-[136px] h-[136px] bg-white rounded-2xl shadow-2xl p-1'>
                <LinkedIn className='w-full h-full' sx={{fontSize:'8rem'}}/>
              </div>
              <div className='w-[136px] h-[136px] bg-white rounded-2xl shadow-2xl p-1'>
                <Instagram sx={{fontSize:'8rem'}}/>
              </div>
              <div className='w-[136px] h-[136px] bg-white rounded-2xl shadow-2xl p-1 '>
                <X sx={{fontSize:'8rem'}}/>
              </div>
        </div>
        
    </div>
  )
}
