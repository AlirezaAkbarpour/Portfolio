'use client'
import { useState } from 'react'
import AddSVG from '../add_shape.svg'
import ProjectForm from '@/components/projectForm'
import ProjectItem from './projectItem'
import { Grid3x3Outlined, Grid4x4Rounded, Grid4x4TwoTone, ListAltOutlined } from '@mui/icons-material'


export default function PortfolioManage() {  
    const title = '</> Manage Project'
    const [show,setShow] = useState(false)
    // Lets go edit item
    const getEditedItem = (id:string)=>{
      setShow(true)
    }
    return (
    <section className="w-full px-10">
            <h1 className="text-3xl font-semibold text-white my-2 py-2">{title}</h1>
            <div className='w-full bg-white h-14 my-6 flex justify-between items-center rounded-md'>
              <input className="w-full h-full rounded-md px-12
              text-xl font-extralight focus:ring-white focus:ring-1" placeholder="Edit And Add New Projects" disabled/>
              <div className='w-8 h-8 flex justify-center items-center m-2 
                hover:cursor-pointer absolute rounded-full hover:bg-orange-300 transition-all hover:first:bg-white' onClick={()=>setShow(true)}>
                <AddSVG />
              </div>
            </div>
           { show?<ProjectForm setShow={setShow}/>:null}
           <div className='w-full h-14 mt-10 bg-fuchsia-300'>
    
           </div>
           <div className='w-full min-h-80
            grid grid-cols-4 gap-24 py-4 justify-items-start mt-6'>
                <ProjectItem getEditedItem={getEditedItem}/>
                <ProjectItem getEditedItem={getEditedItem}/>
                <ProjectItem getEditedItem={getEditedItem}/>
                <ProjectItem getEditedItem={getEditedItem}/>
                <ProjectItem getEditedItem={getEditedItem}/>
           </div>
    </section>
  )
}
