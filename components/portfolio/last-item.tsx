import { Portfolios } from '@/interfaces/portfolios'
import { InferGetServerSidePropsType ,GetServerSideProps } from 'next'
import React from 'react'



export default async function LastPortfolio() {
  const res = await fetch("api/portfolio",{cache:'default'})
  const data = res.json().then(l=>{return l})
  if(!data){
    return <>Not Loading</>
  }
  return (
    <div className='w-full h-64 bg-white mt-20'>
            <h1 className='w-full text-3xl indent-24 px-8 py-8 font-bold font-archivo'>Last Portfolio</h1>
            <div className=''>
                <div className=''>
                    <h1>{}</h1>
                </div>
            </div>
    </div>
)}
