'use client'
import { useState } from 'react'
import './output.css'

interface CHECKBOX{
    label: string
    value: string
}

export default function CheckBox({label}:CHECKBOX) {
  const [value,setValue] = useState(true)
  //current value
  const setEnable = ()=>{
    setValue(value=>!value)
    console.log(value)
  }
  return (
    <section title=".squaredOne" >
    <div className="squaredOne w-full flex items-center " >
      <label htmlFor="squaredOne" className='text-xl text-gray-600 p-2'>{label}:</label>
        <div className='inputbox flex justify-center items-center' onClick={setEnable}>
          <div className={value?'inputbutton':''}>
        </div>
      </div>
    </div>
    </section>
  )
}
