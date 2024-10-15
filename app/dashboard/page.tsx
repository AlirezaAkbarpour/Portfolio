"use client"
import { ReactEventHandler, useState } from "react"
import PortfolioMange from "./portfolio"

export default function DashboardPage() {
  //navigation algorithm 
  const [currentPath,setCurrentPath] = useState<string>("")

  const clickHandler = (e:ReactEventHandler)=>{
    console.log(e)
  }

  return (
    <div className="w-full h-screen bg-dashboard-orange flex items-center">
            <div className="w-full h-full mt-4">
              <div className="text-xl pl-4 flex justify-between mx-12">
                <div className="">
                  <div className="p-2 font-semibold text-white opacity-70">Dashboard</div>
                </div>
                <div className="flex justify-end text-white">
                  <div className="p-2 mx-4 font-medium border-b-4 border-white cursor-pointer"
                   onClick={e=>clickHandler} >Portfolios</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer">Blogs</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer">Works</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer">Messages</div>
                </div>
              </div>
              <hr className="mx-10"/>
              <div className="mx-8 mt-8">
                  <PortfolioMange/>
              </div>
            </div>
    </div>
  )
}
