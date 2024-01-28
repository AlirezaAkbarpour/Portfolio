import React from 'react'
import Image from 'next/image'

export default function WorksPage() {
  return (
    <div className='w-full h-screen bg-background-theme'>
        <div className="w-full mt-40 mx-12">
            <div className='flex justify-around'>
                <div className='mt-10'>   
                    <p className='w-full text-7xl font-bold m-2 text-footer-color-black'>It{"'"}s</p>
                    <p className='w-full text-7xl font-bold m-2 text-footer-color-black'>My Works!</p>
                    <p className='w-full text-2xl font-light p-2 mt-2 text-zinc-600'>Some Projects that you can look!</p>
                </div>   
                <div className='mx-16'>
                    <Image src="/images/look-up-banner.png" width={560} height={560} alt='image'/>
                </div>
            </div> 
        </div>
    </div>
  )
}
