"use client"
import {Divider } from "@mui/material"
import {Star } from "@mui/icons-material"
import Link from "next/link"
import { useLayoutEffect, useState } from "react"
import type { Portfolio } from "@/types/portfolios"

export default function LastPortfolio() {
  const [portfolio,setPortfolio] = useState<Portfolio>()
  const [isLoading, setLoading] = useState(true)

  useLayoutEffect(()=>{
    const fetchData = async ()=>{
      await fetch("/api/portfolio",{cache:"no-cache"})
      .then((res)=> res.json())
      .then(async (data)=>{ 
        await setPortfolio(data.data[0])
        setLoading(false)
      }
    )
    }
    fetchData()
  },[])

  return ( <>
    {!isLoading ? portfolio &&
    <div className='w-full h-full bg-white py-2'>
            <h1 className='w-full h-16 text-3xl px-20 py-4 font-normal'>Last Portfolio</h1>
            <div className="flex justify-center h-full ">
              <div className='w-full mx-20 min-h-[30rem] shadow-lg bg-background-theme my-5 rounded-2xl 
                hover:bg-orange-300 hover:text-white
                transition-colors
                '
              >
                <Link href={"/portfolios/"+portfolio.id}>
                <div className='w-full h-16 m-1 flex justify-between items-center'>
                    <h1 className="w-1/2 h-16 p-4 text-4xl ">{portfolio.name}</h1>
                    <div className="w-1/2 h-16 flex justify-end px-10">
                      <div className="w-28 h-12 bg-white rounded-lg mt-2 shadow-md py-1 flex justify-center items-center">
                            <div className="w-1/2 h-full flex items-center">
                              <p className="w-full text-xl text-center text-orange-600 font-medium">{portfolio.likes}</p>
                            </div>
                            <Divider orientation="vertical"/>
                            <div className="w-1/2 h-full flex items-center justify-center">
                              <Star sx={{width:'36px',height:'36px'}} color="warning"/>
                            </div>
                      </div>
                    </div>
                </div>
                <Divider/>
                <div className="w-full p-4 flex justify-around">
                      <div className="w-1/2 text-2xl font-normal first-letter:uppercase p-2 text-slate-600">
                        {portfolio.description}
                      </div>
                      <div className="w-1/2 p-4 flex justify-end items-start">
                        <div className="w-[400px] h-[300px] bg-slate-600 rounded-xl"></div>
                      </div>
                </div>
            </Link>
            </div>
            </div>   
    </div>
    : <>
      <div className="text-xl text-black w-full text-center py-4 bg-yellow-200 font-bold">Nothing to show!</div>
    </>}
    </>
)}


