"use client"
import { ReactEventHandler, useEffect, useLayoutEffect, useState } from "react"
import PortfolioMange from "./components/portfolio"

export default function DashboardPage() {
  //navigation algorithm 
  const [currentPath,setCurrentPath] = useState<string>("portfolio")

  const clickHandler = (path:string)=>{
    setCurrentPath(path)
  }

  const ComponentSwitcher = ()=>{
    switch(currentPath){
      case "portfolio": return <PortfolioMange/>;
      case "blogs": return null;
      case "works": return null;
      case "messages": return <h1>Hello , Ali</h1>;
      default: return <PortfolioMange/>
    }
  }

  useLayoutEffect(()=>{
    if(currentPath==="") setCurrentPath("portfolio")
  },[currentPath])

  return (
    <div className="w-full h-screen bg-dashboard-orange flex items-center">
            <div className="w-full h-full mt-4">
              <div className="text-xl pl-4 flex justify-between mx-12">
                <div className="">
                  <div className="p-2 font-semibold text-white opacity-70">Dashboard</div>
                </div>
                <div className="flex justify-end text-white">
                  <div className="p-2 mx-4 font-medium border-b-4 border-white cursor-pointer"
                   onClick={()=>clickHandler("portfolio")} >Portfolios</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=>clickHandler("blogs")}>Blogs</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=> clickHandler("works")}>Works</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=>clickHandler("messages")}>Messages</div>
                </div>
              </div>
              <hr className="mx-10"/>
              <div className="mx-8 mt-6">
                  <ComponentSwitcher/>
              </div>
            </div>
    </div>
  )
}
