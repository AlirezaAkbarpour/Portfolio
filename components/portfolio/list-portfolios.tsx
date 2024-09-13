'use client'
import { Key, use } from "react";
import type { ListPortfolios } from "@/interfaces/portfolioList";
import dynamic from "next/dynamic";
const ListItem = dynamic(()=> import('./list-item'),{ssr:false})

async function GetList (){
  try{
    const res = await fetch('http://localhost:3000/api/portfolio/list',{cache:'no-cache',})
    if(!res.ok){
      throw new Error("Failed Fetch")
    }
    const data = res.json()
    return data
  } catch(error){
    new Error("Get List is not Working!")
  }
}

const PromiseStake : Promise<any> = GetList()

export default function ListPortfolioComponent() {
  const list = use(PromiseStake)
    if(!list){
      throw new Error("list fetch Failed")
    }
  return (
    <div className='w-full h-full bg-white py-8'>
        <h1 className='w-full h-16 py-4 px-20 text-4xl font-semibold'>List Portfolios</h1>
        <ul className='w-full px-20 mt-8'>
           {
              list && 
             list.portfolios.map((item: { id: Key ; name: string; links: { github: string; main_page: string; }; }) => <li key={item.id}>
             <ListItem key={item.id} id={item.id} name={item.name} links={item.links}/></li>)
           }
        </ul>
    </div>
  )
}
