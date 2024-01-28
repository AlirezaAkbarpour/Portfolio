'use client'
import React from 'react'
import Link from 'next/link'

export default function NavbarItem(props:any) {

  const classType = props.active===true?"border-b-2 border-orange-700 ":null
 
    return (
    <>
        <li className={"p-2 w-32 text-base text-black/70 m-2 mx-4 border-b-2 justify-center hover:border-b-2 hover:border-orange-700"+classType}>
                    <Link href={props.link} ><p className="text-center">{props.title}</p></Link>
        </li>
    </>
  )
}
