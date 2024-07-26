'use client';
import Blog_banner from "@/components/banners/blog-banner"
import Works_banner from "@/components/banners/works-banner"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import { RefObject, useRef } from "react"
import { gsap } from "gsap";

export default function NotFound() {
  const container : RefObject<HTMLDivElement> = useRef(null)
  useGSAP(()=>{
      gsap.from('.text',{opacity:0,y:10,delay:0.3,duration:0.5,ease:'elastic.inOut'})
      gsap.from('.image',{opacity:0,rotate:'360deg',ease:'expo.inOut',duration:.5})
  },{scope:container})

  return (
  <div className="w-full h-full" ref={container} >
    <div className='w-full h-[660px] bg-background-theme flex justify-center'>
        <div className="w-full mt-28 tracking-[0.75rem] font-black h-full mx-auto">
            <div className='text text-4xl w-full text-center text-footer-color-black relative top-16'>Page not Found!</div>
            <div className="image w-full h-full flex justify-center relative bottom-10">
            <Image src="/images/not-found.png" width={640} height={430} alt="404 not found"/>
            </div>
        </div>
    </div>
    <div className="w-full flex justify-center">
        <Blog_banner/>
    </div>
    <div className="w-full flex justify-center">
        <Works_banner/>
    </div>
    </div>
  )
}
