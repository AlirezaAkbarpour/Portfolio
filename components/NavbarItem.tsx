'use client'
import React from 'react'
import Link from 'next/link'

export default function NavbarItem(props:any) {
    return (
    <>
        <li className="p-2 w-32 text-base text-black/70 m-2 mx-4 border-b-2 justify-center hover:border-b-2 hover:border-orange-700">
                    <Link href={props.link} ><p className="text-center">{props.title}</p></Link>
        </li>
    </>
  )
}
