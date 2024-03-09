import React from 'react'
import ScrollGold from './svgs/scroll-gold'

export default function VisitCard() {
  return (
    <div className='w-3/4 bg-white rounded-lg h-[68vh] my-28'>
        <div className='w-full flex justify-between p-10 h-[64vh]'>
           <div className='w-1/2 p-4'>
                <h1 className='text-4xl p-4 text-footer-color-black font-bold'>Alireza Akbarpour</h1>
                <h2 className='text-2xl px-4 py-2 text-gray-600'>Front-End Developer</h2>
                <h2 className='text-2xl px-4 py-2 text-gray-600'>UI & UX Designer</h2>
                <h2 className='text-2xl px-4 py-2 text-gray-600'>CE Student</h2>
           </div>
           <div className='w-1/2'>
                <div className='w-full h-full bg-slate-600 rounded-2xl'></div>
           </div>
        </div>
        <div className='w-full bg-footer-color-black h-12 rounded-b-lg flex justify-center py-2 hover:cursor-pointer'>
            <ScrollGold/>
        </div>
    </div>
  )
}
