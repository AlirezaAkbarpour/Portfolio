import React from 'react'

export default function Loading() {
  return (
    <div className='w-full z-50 fixed h-full bg-orange-300 flex items-center justify-center flex-wrap'>
          <div className='w-full h-16 text-center text-4xl font-bold animate-ping delay-1000 text-white'>
            Loading...
          </div>
    </div>
  )
}
