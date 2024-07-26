import { GitHub } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

export default function Github_Ban() {
  return (
    <Link href={'https://github.com'}>
    <div className='w-p h-80 bg-white shadow-2xl rounded-2xl mt-10 flex 
      transition-all ease-in hover:bg-gray-600 hover:text-white hover:cursor-pointer'>
        <div className='w-1/2 mx-20 mt-20'>
            <div className="text-7xl font-bold text-center first-letter:font-extrabold p-2 ">Github</div>
            <div className='text-5xl font-bold text-center p-2'>Profile</div>
        </div>
        <div className='w-1/3 p-10 mr-20'>
            <GitHub sx={{fontSize:'14rem'}}/>
        </div>
    </div>
    </Link>
  )
}
