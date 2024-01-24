import React from 'react'

export default function Feedback() {

  return (
    <div className='w-3/4 h-16 p-2 mt-6 rounded-xl bg-violet-800 '>
            <form className='flex'>
                <input type='text' className='font-mono font-normal w-2/3 p-2 m-1' placeholder='Enter your message:' ></input>
                <button className='w-1/3 m-1 p-2 bg-white text-violet-950' type='submit'>Send Notification</button>
            </form>
    </div>
  )
}
