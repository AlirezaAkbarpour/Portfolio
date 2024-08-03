'use client'
import { use } from "react"
import { Button, Divider } from "@mui/material"
import { Language, Star } from "@mui/icons-material"
const host = 'localhost'
const port = '3000'

async function getData(){
  try{
    const res = await fetch(`http://${host}:${port}/api/portfolio`,{cache:'no-cache',method:'GET'})
      if(!res.ok){
       throw new Error('Failed Fetch')
      }
      const data = res.json()
     return data;
  }catch(error){
    new Error("error fetch function")
  }
  
}

const PromiseStake: Promise<any> = getData()

export default function LastPortfolio() {
  const data = use(PromiseStake)
  if(!data) {
    throw new Error("data catch error")
  }
  return (
    <div className='w-full h-full bg-white py-2'>
            <h1 className='w-full h-16 text-3xl px-20 py-4 font-normal'>Last Portfolio</h1>
            <div className="flex justify-center h-full ">
              <div className='w-full mx-20 min-h-[30rem] shadow-lg bg-background-theme my-5 rounded-2xl'>
                <div className='w-full h-20 flex justify-between items-center'>
                    <h1 className="w-1/2 h-16 p-4 text-4xl text-footer-color-black">{data.portfolio.name}</h1>
                    <div className="w-1/2 h-16 flex justify-end px-10">
                      <div className="w-36 h-16 bg-white rounded-full shadow-md py-1 flex justify-center items-center">
                            <div className="w-1/2 h-full flex items-center">
                              <p className="w-full text-2xl text-center text-orange-600 font-medium">{data.portfolio.likes}</p>
                            </div>
                            <Divider orientation="vertical"/>
                            <div className="w-1/2 h-full flex items-center justify-center">
                              <Star color="warning" sx={{width:'48px',height:'48px'}}/>
                            </div>
                      </div>
                    </div>
                </div>
                <Divider/>
                <div className="w-full p-4 flex justify-around">
                      <div className="w-1/2 text-2xl font-normal first-letter:uppercase p-2 text-slate-600">
                        {data.portfolio.description}
                      </div>
                      <div className="w-1/2 p-4 flex justify-end items-start">
                        <div className="w-[400px] h-[300px] bg-slate-600"></div>
                      </div>
                </div>
                <div className="w-full p-4 flex justify-end">
                      <div className="w-96 h-20 bg-white p-1 shadow-md flex mx-4 items-center justify-center rounded-2xl">
                              <Button href={`${data.portfolio.links.github}`} variant="contained" 
                                sx={{marginX:2,backgroundColor:'GrayText',":hover":{backgroundColor:'darkslategrey',color:'black'}}}
                              >
                                <Language sx={{width:'48px',height:'48px',color:'white'}}/>
                              </Button>
                              <Divider orientation="vertical" variant="fullWidth" className="mx-4"/>
                              <Button href={`${data.portfolio.links.main_page}`}
                              variant="contained" sx={{color:'white',width:'210px',height:'4rem',
                              backgroundColor:'orangered',fontSize:'1rem',':hover':{backgroundColor:'darkslategrey',}}}>More</Button>
                      </div>
                </div>
            </div>
            </div>
            
    </div>
)}

