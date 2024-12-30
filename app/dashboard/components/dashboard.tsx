"use client"
import { Suspense, useLayoutEffect, useState } from "react"
import PortfolioManage from "./portfolio"
import Loading from "@/components/loading"
import { signOut, useSession } from "next-auth/react"
import Login from "@/app/dashboard/components/login"

enum Navigation {
  portfolio = 'portfolio',
  blogs = 'blogs',
  works = 'works',
  messages = 'messages'
}

export default function DashboardPage() {
  //navigation algorithm 
  const [currentPath,setCurrentPath] = useState<string>(Navigation.portfolio)
  const {status} = useSession()
  const clickHandler = (path:string)=>{
    setCurrentPath(path)
  }

  const navbarAnimate = ()=>{
    switch(currentPath){
      case Navigation.portfolio: return 'w-1/4';
      case Navigation.blogs: return 'w-2/4';
      case Navigation.works: return 'w-3/4';
      case Navigation.messages: return 'w-full'
    }
  }

  const ComponentSwitcher = ()=>{
    switch(currentPath){
      case Navigation.portfolio: return <Suspense fallback={<Loading/>} ><PortfolioManage/></Suspense> ;
      case Navigation.blogs: return null;
      case Navigation.works: return null;
      case Navigation.messages: return <h1>Hello , Ali</h1>;
      default: return <PortfolioManage/>
    }
  }

  useLayoutEffect(()=>{
    if(currentPath==="") setCurrentPath("portfolio")
  },[currentPath])

  if(status === 'authenticated')
    {
      return (
    <div className="w-full min-h-[50rem] bg-dashboard-orange flex items-center">
            <div className="w-full h-full mt-2">
              <div className="text-xl pl-4 flex justify-between mx-12">
                <div className="">
                  <div className="p-2 font-semibold text-white opacity-70">Dashboard</div>
                </div>
                <div>
                  <div className="flex justify-end text-white">
                  <div className="p-2 mx-4 font-medium cursor-pointer"
                   onClick={()=>clickHandler(Navigation.portfolio)} >Portfolios</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=>clickHandler(Navigation.blogs)}>Blogs</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=> clickHandler(Navigation.works)}>Works</div>
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=>clickHandler(Navigation.messages)}>Messages</div>  
                  <div className="p-2 mx-4 font-medium cursor-pointer" onClick={()=> signOut()}>Sign Out</div>  
                </div>
                <div className={ navbarAnimate() + " h-1 flex justify-end px-3 mx-2 transition-all delay-75 ease-in"}>
                  <div className="w-24 h-full bg-white"></div>
                </div>
                </div>
                
            
              </div>
              <hr className="mx-10"/>
              <div className="mx-8 mt-6">
                  <ComponentSwitcher/>
              </div>
            </div>
    </div>
  )}

  return(
    <Login/>
  )
}
