"use client"
import {useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Portfolio, PortfolioList } from "@/types/portfolios";
const ListItem = dynamic(()=> import('./list-item'),{ssr:false})


export default function ListPortfolioComponent() {
  
  const [list,setList] = useState<PortfolioList>()
  const [isLoading,setLoading] = useState(true)

  useLayoutEffect(()=>{
    const fetchData = async ()=>{
      await fetch("/api/portfolio",{cache:'no-cache'})
      .then((res)=> res.json())
      .then(async (data)=>{
          await setList(data.data)
          setLoading(false)
      }).catch((error)=> new Error(error))
    }
    fetchData() 
  },[])

  return (
    <div className='w-full h-full bg-white py-8'>
        <h1 className='w-full h-16 py-4 px-20 text-4xl font-semibold'>List Portfolios</h1>
           {
              !isLoading? list &&
             <ListItem list={list}/>
             : <><div className="text-xl text-black w-full text-center font-bold bg-yellow-400 py-4">No List to show!!</div></>
           }
    </div>
  )
}
