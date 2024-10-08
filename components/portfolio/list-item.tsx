'use client'
import { ArrowForward } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { ListPortfolios } from '@/types/portfolioList'
import Link from 'next/link'

export default function ListItemComponent({id,name,links}:ListPortfolios) {
  return (
    <li>
    <Link href={"portfolios/"+id} className='item-list my-6 w-full h-32 flex 
    rounded-lg shadow-md bg-background-theme items-center px-2
    transition-colors
    hover:bg-orange-400 hover:text-white 
    hover:btn-hover'>
    
    <div className='w-3/4 text-4xl font-semibold'>{name}</div>
    <div className='w-1/4 h-full flex justify-end items-center'>
      <div className='w-2 h-full relative bg-white mr-2'></div>
      <Button color='error' className='w-16 h-16' href={links.main_page}>
        <ArrowForward sx={{width:'52px',height:'48px',color:'white',backgroundColor:'orangered',
          ':hover': {backgroundColor:'white '}}} className='text-white rounded-md
         bg-orange-500'/>
      </Button>
    </div>
    </Link>
  </li>
  )
}
