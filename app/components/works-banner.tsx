import React from 'react'
import Arrow from '../svgs/arrow'

export default function Works_banner() {
  return (
        <div className='w-full h-64 bg-white mt-5 flex justify-around'>
            <div className='w-1/3 flex flex-col'>
                <div className='text-6xl w-full flex justify-start'>Explore</div>
                <div className='text-6xl w-full flex justify-end'>Works <Arrow/> </div>
            </div>
            <div>

            </div>
        </div>
    )
}
