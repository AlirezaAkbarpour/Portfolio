import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

export default function NavbarLink(props: { href: string | UrlObject }) {
  return (
    <>
        <Link href={props.href}>
            
        </Link>
    </>
  )
}
