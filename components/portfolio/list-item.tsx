import { ArrowForward } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { ListPortfolios } from '@/interfaces/portfolioList'

export default function ListItemComponent({id,name,links}:ListPortfolios) {
  return (
    <li key={id} className='item-list my-6 w-full h-32 flex j rounded-lg shadow-md bg-background-theme items-center px-2'>
    <h1 className='w-3/4 text-4xl font-semibold'>{name}</h1>
    <div className='w-1/4 h-full flex justify-end items-center'>
      <div className='w-2 h-full relative bg-white mr-4'></div>
      <Button color='error' className='w-16 h-16' href={links.main_page}>
        <ArrowForward sx={{width:'52px',height:'48px',color:'white',backgroundColor:'orangered',
          ':hover': {backgroundColor:'#120f31'}}} className='text-white rounded-md
         bg-orange-500'/>
      </Button>
    </div>
  </li>
  )
}
