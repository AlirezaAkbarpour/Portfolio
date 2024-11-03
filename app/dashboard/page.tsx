"use client"
import { ReactEventHandler, Suspense, useEffect, useLayoutEffect, useState } from "react"
import PortfolioMange from "./components/portfolio"
import Loading from "@/components/loading"

export default function DashboardPage() {
  //navigation algorithm 
  const [currentPath,setCurrentPath] = useState<string>("portfolio")

  const clickHandler = (path:string)=>{
    setCurrentPath(path)
  }

  const ComponentSwitcher = ()=>{
    switch(currentPath){
      case "p_ortfolio": return <Suspense fallback={<Loading/>} ><PortfolioMange/></Suspense> ;
      case "b_logs": return null;
      case "w_orks": return null;
      case "m_essages": return <h1>Hello , Ali</h1>;
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
                <div>
                  <div className="flex justify-end text-white">
                  <div className="p-2 mx-4 font-medium cursor-pointer"
                   onClick={()=>clickHandler("p_ortfolio")} >Portfolios</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=>clickHandler("b_logs")}>Blogs</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=> clickHandler("w_orks")}>Works</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=>clickHandler("m_essages")}>Messages</div>    
                </div>
                <div className="w-full h-1 flex justify-end mx-6 px-6">
                  <div className="w-28 h-full bg-white"></div>
                </div>
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
