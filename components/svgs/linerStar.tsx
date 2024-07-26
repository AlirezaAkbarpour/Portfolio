"use client"
import { useEffect } from "react";

interface props {
  index: string
}
export default function LinerStar({index}:props) {
  useEffect(()=>{
    document.getElementById("2")?.setAttribute("fill","url(#paint0_linear_104_9)")
    document.getElementById("3")?.setAttribute("fill","url(#paint0_linear_105_9)")
    document.getElementById("4")?.setAttribute("fill","url(#paint0_linear_104_9)")
  })
  return(
    <div className='absolute'>
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="url(#paint0_linear_103_9)" viewBox="0 0 200 200">
        <defs>
            <linearGradient id="paint0_linear_103_9" x1="100" x2="100" y1="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset='0%' stopColor="#A700F5" ></stop><stop offset="100%" stopColor="#1D00FF"></stop>
            </linearGradient>
            <linearGradient id="paint0_linear_104_9" x1="100" x2="100" y1="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset='0%' stopColor="#E94536" ></stop><stop offset="100%" stopColor="#FF7E56"></stop>
            </linearGradient>
            <linearGradient id="paint0_linear_105_9" x1="100" x2="100" y1="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset='0%' stopColor="#120F31" ></stop><stop offset="100%" stopColor="#193758"></stop>
            </linearGradient>
                {/*<clipPath id="clip0_103_9">
                <path fill="#fff" d="M0 0h200v200H0z"></path>
                </clipPath>
                */}     
        </defs>
        <g  id={index} clip-path="url(#clip0_103_9)"><path fill={"#paint0_linear_104_9"} d="M89.932 6.129c4.225-8.172 15.911-8.172 20.136 0l26.905 52.035a11.33 11.33 0 0 0 4.863 4.863l52.035 26.905c8.172 4.225 8.172 15.911 0 20.136l-52.035 26.905a11.327 11.327 0 0 0-4.863 4.863l-26.905 52.035c-4.225 8.172-15.911 8.172-20.136 0l-26.905-52.035a11.33 11.33 0 0 0-4.863-4.863L6.13 110.068c-8.172-4.225-8.172-15.911 0-20.136l52.035-26.905a11.335 11.335 0 0 0 4.863-4.863L89.932 6.13Z"></path></g>
      </svg>
    </div>
  )
}
