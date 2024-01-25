import React from 'react'

export default function Feedback() {
  const message = React.useRef<HTMLInputElement|undefined>(null)
  const messageHandler = (e:any)=>{
    const text = message.current?.value
    if(text != ''){
      alert("your message send!")
      message.current.value = ''
    }
    e.preventDefault()
  }

  const changeHandler = ()=>{
    const audio = new Audio('../assets/typing-105782.mp3')
    audio.volume = 0.5
    audio.play()
    setTimeout(()=>{
      audio.pause()
    },500)
  }

  return (
    <div className='w-3/4 h-16 p-2 mt-6 rounded-xl bg-violet-800 '>
            <form className='flex' onSubmit={messageHandler}>
                <input type='text' className='font-mono font-normal w-2/3 p-2 m-1' placeholder='Enter your message:' ref={message} onChange={(e)=>changeHandler(e)}></input>
                <button className='w-1/3 m-1 p-2 bg-white text-violet-950 hover:bg-violet-400 hover:transition-all hover:delay-100 hover:text-white' type='submit' onClick={(e)=>messageHandler(e)}>Send Notification</button>
            </form>
    </div>
  )
}