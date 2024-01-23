'use client'
import React from 'react'
import Arrow from '../svgs/arrow'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Blog_banner() {
    const router = useRouter()
    const handleClick = (path:string)=>{
        router.push(path)
    }
  return (
        <div className='w-[70%] h-64 mx-4 bg-white mt-4 mb-4 flex justify-center py-2 px-4 rounded-3xl shadow-lg hover:cursor-pointer' onClick={()=> handleClick('/blogs')}>
            <div className='w-[520px] flex flex-col mt-8'>
                <div className='text-7xl w-full flex justify-start p-1 font-semibold'>Explore to</div>
                <div className='text-7xl w-full 
                p-1 font-semibold
                ml-24
                flex
                justify-end
                '>My Blog <Arrow/> </div>
            </div>
            <div className='w-1/2 flex justify-end mr-14'>
                <Image src={"/images/research-banner.png"} alt="explore" width={360} height={240}/>
            </div>
        </div>
    )
}
