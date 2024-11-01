import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Add_Icon from "./svgs/add_Icon"
import { Image as ImageIcon }  from "@mui/icons-material"
import CheckBox from "./UI-kit/checkbox"
import './styles/projectform.css'
import NewLink from "./UI-kit/NewLink"

export default function ProjectForm({setShow}:any) {
  const [isClient,setClient] = useState(false)
  const [children,setChildren] = useState<React.ReactNode[]>([])
  


  const clickHandler = ()=>{
    setShow(false)
  }

  const addLinkHandler = ()=>{
      const newChild = <NewLink label={"start"} key={children.length}/>
      setChildren((prevChild)=> [...prevChild,newChild]);
  }

  useEffect(()=>{
      setClient(true)
  },[])

  if(!isClient) return null;

  return isClient ? createPortal(
    <main className="w-full h-full flex justify-center z-50 top-0 left-0 fixed">
            <div className="w-full h-[40rem] bg-white mx-40 mt-10 rounded-3xl px-4 py-4 shadow-md">
              <div className="w-full h-6 flex justify-end">
                <div className="w-4 h-4 rounded-full bg-red-500 mx-0.5" ></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500 mx-0.5"></div>
                <div className="w-4 h-4 rounded-full bg-blue-500 mx-0.5"></div>
              </div>
                <h1 className="text-2xl h-10 font-medium text-zinc-600 mx-8">Setting Project</h1>
              
              <div className="scroll-layout w-full h-3/4 overflow-y-scroll flex justify-between">
                <div className="w-1/2 mx-8 pr-24 ">
                  <h2 className="text-xl font-normal text-zinc-600 mt-6 mx-2 flex items-center">id:
                    {/* project id */} 
                    <p className="text-zinc-400 px-2 text-xl">22a5255</p>
                  </h2>
                  <h2 className="text-xl font-medium text-zinc-600 mt-6 mx-2">Name Project:</h2>
                  {/* name ref */}
                    <input type="text" placeholder="name" className="w-full h-10 ml-6 my-4 px-2 text-lg font-light ring-1 ring-zinc-400 rounded-md"/>
                  <h2 className="text-xl font-medium text-zinc-600 mt-4 mx-2">Description Project:</h2>
                  {/* description ref */} 
                    <textarea placeholder="information about project" className="w-full overflow-y-scroll min-h-44 max-h-80 
                  ml-6 my-4 py-2 px-2 text-lg font-light ring-1 ring-zinc-400 rounded-md"/>
                  <div className="w-full">
                    <h2 className="text-xl font-medium mx-2 mt-4 text-zinc-600">Feedback Options</h2>
                    <div className="w-full flex justify-start pl-8 mt-2">
                      <div className="w-32">
                        <CheckBox label="Likes" value={'true'}/>
                      </div>
                      <div className="w-32">
                        <CheckBox label="Links" value={"false"}/>
                      </div>
                      <div className="w-40">
                        <CheckBox label="Comments" value={"false"}/>
                      </div>
                    </div>
                  </div>
                <div>
              </div>
                </div>
                <div className="w-1/2 mx-8" id="links">
                  <h1 className="text-2xl text-gray-800 font-medium mt-6">Add Links</h1>
                  <div className="flex mt-6 ml-4">
                    <label htmlFor="site" className="w-28 text-lg font-normal text-zinc-600">Demo Site:</label>
                    {/* link 0 */}
                    <input id="site" name="site" type="text" placeholder="https://simple.com" className="w-80 h-8 mx-4 font-normal rounded-md ring-1 p-1 ring-zinc-400 text-zinc-600"/>
                  </div>
                  <div className="flex mt-6 ml-4">
                    <label htmlFor="github" className="w-28 text-start text-lg font-normal text-zinc-600">Github Page:</label>
                    {/* link 1*/}
                    <input name="github" id="github" type="text" placeholder="https://simple.com" className="w-80 font-normal h-8 mx-4 rounded-md ring-1 p-1 ring-zinc-400 text-zinc-600"/>
                  </div>
                  {children}
                  <div className="w-full flex justify-center mr-2">
                    <button onClick={addLinkHandler} className="w-full text-lg ml-2 mr-4 px-4 rounded-md  my-8 hover:bg-orange-400 bg-dashboard-orange flex justify-center">
                      <h1 className="text-white flex justify-center items-center">Add Link Addition <Add_Icon/> </h1>
                    </button>
                  </div>
                  
                  <div className="w-full flex justify-center">
                      <h1 className="text-xl font-medium text-gray-800 ">Upload Project Image:</h1>
                  </div>
                  <div className="pickFile w-full h-48 ring-1 ring-gray-400 rounded-lg mt-6 flex flex-col justify-center items-center ">
                    <label htmlFor="file-input" className="w-full cursor-pointer h-full flex flex-col justify-center items-center ">
                      <ImageIcon fontSize="large" style={{color:'#999 ',scale:3}} component={'svg'}/>
                      <p className="py-1 px-2 mt-12 text-lg font-normal rounded-lg bg-neutral-300 text-neutral-600">Choose Image</p>
                    </label>
                    <input type="file" id="file-input" name="file-input"/>
                  </div>
                  
                </div>
                  
              </div>
                  <div className="w-full h-14 flex justify-end items-center mx-2 px-6">
                    <button className="w-24 h-10 p-1 text-xl rounded-lg mx-4 text-center text-zinc-400 ring-1 ring-zinc-400 font-medium " onClick={clickHandler}>Cancel</button>
                    <button className="w-20 h-10 p-1 text-xl rounded-lg mx-4 text-center text-white font-medium bg-dashboard-orange">Save</button>
                  </div>
            </div>
    </main>
  ,document.getElementById("not") as HTMLElement) : null
}
