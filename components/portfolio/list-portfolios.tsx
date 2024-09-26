"use client"
import {useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PortfolioList } from "@/app/api/portfolio/list/route";
import Loading from "../loading";
const ListItem = dynamic(()=> import('./list-item'),{ssr:false})

export default function ListPortfolioComponent() {
  
  const [list,setList] = useState<PortfolioList>()
  const [isLoading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async ()=>{
      await fetch("https://portfolio-lemon-nu-98.vercel.app/api/portfolio/list",{cache:'no-store'})
      .then((res)=> res.json())
      .then((data)=>{
        setList(data.portfolios)
        setLoading(false)
      })
    }
    fetchData() 
  },[])
 
  if(isLoading) return <div className="absolute z-50 left-0 top-0"> <Loading /> </div>
  if(!list) return <div className="text-lg text-black">No List to show!!</div>

  return (
    <div className='w-full h-full bg-white py-8'>
        <h1 className='w-full h-16 py-4 px-20 text-4xl font-semibold'>List Portfolios</h1>
        <ul className='w-full px-20 mt-8'>
           {
              list && 
             list.map((item,index) =>
             <ListItem key={index} id={item.id} name={item.name} links={item.links}/>)
           }
        </ul>
    </div>
  )
}
