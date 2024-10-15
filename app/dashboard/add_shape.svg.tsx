import React from 'react'

export default function AddSVG() {
  const colorPick = '#ffffff'
  return (
        <span className='w-8 h-8 flex justify-center items-center m-2 
        hover:cursor-pointer absolute rounded-full hover:bg-orange-700 transition-all hover:first:bg-white'>
      <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill={'#d2d2d2'||colorPick}><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
 </span> )
}
