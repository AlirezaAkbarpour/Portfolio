import React from 'react'

export default function NewLink({label}:{label:string}) {
  return (
    <div className="flex mt-6 ml-4">
          <input type='text' className="w-28 text-start text-lg font-normal text-zinc-600" value={label} disabled/>
          <input  type="text" placeholder="https://simple.com" className="w-80 font-normal h-8 mx-4 rounded-md ring-1 p-1 ring-zinc-400 text-zinc-600"/>
    </div>
  )
}
