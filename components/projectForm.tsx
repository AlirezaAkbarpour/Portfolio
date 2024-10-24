"use client"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

export default function ProjectForm() {
  const [isClient,setClient] = useState(false)

  const clickHandler = ()=>{
    setClient(false)
  }

  useEffect(()=>{
      setClient(true)
  },[])

  if(!isClient) return null;

  return isClient ? createPortal(
    <main className="w-full h-full flex justify-center absolute z-50 top-0 left-0">
            <div className="w-full max-h-[36rem] bg-white mx-40 mt-24 rounded-3xl px-4 py-4 shadow-md">
              <div className="w-full h-6 flex justify-end">
                <div className="w-4 h-4 rounded-full bg-red-500 mx-1" onClick={clickHandler}></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 mx-1"></div>
                <div className="w-4 h-4 rounded-full bg-blue-500 mx-1"></div>
              </div>
                <h1 className="text-2xl h-10 font-medium text-zinc-600 mx-8">Setting Project</h1>
              <div className="w-full h-5/6 overflow-y-scroll">
                <div className="w-1/2 mx-8 pr-24 ">
                  <h2 className="text-xl font-normal text-zinc-600 mt-6 mx-2 flex items-center">id: <p className="text-zinc-400 px-2 text-xl">22a5255</p></h2>
                  <h2 className="text-xl font-medium text-zinc-600 mt-6 mx-2">Name Project:</h2>
                  <input type="text" placeholder="name" className="w-full h-10 ml-6 my-4 px-2 text-lg font-light ring-1 ring-zinc-400 rounded-md"/>
                  <h2 className="text-xl font-medium text-zinc-600 mt-4 mx-2">Description Project:</h2>
                  <textarea  placeholder="name" className="w-full min-h-40 max-h-80 overflow-y-hidden  ml-6 my-4 px-2 text-lg font-light ring-1 ring-zinc-400 rounded-md"/>
                  <h2 className="text-xl font-medium mx-2 mt-4 text-zinc-600">Feedback Options</h2>
                <div>
              </div>
                </div>
              </div>
            </div>
    </main>
  ,document.getElementById("not") as HTMLElement) : null
}
