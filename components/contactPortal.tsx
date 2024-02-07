import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material';
import { createPortal } from 'react-dom';
import { Divider } from '@mui/material';
type Props = {
    isOpen:boolean,
    OnClose:any
}


export default function ContactPortal({isOpen,OnClose}:Props){
    if(!isOpen) return null;

    return createPortal(
        <div className='w-[640px] h-[420px] bg-white rounded-lg fixed top-1/4 left-1/3 shadow-2xl'>
                <div className='w-full h-16 flex justify-between p-4'>
                        <h1 className='text-4xl font-archivo font-semibold text-footer-color-black'>Contact Me</h1>
                        <button onClick={()=>OnClose(false)}>
                        <CancelIcon className='w-16 h-16 cursor-pointer text-red-800 mt-1 hover:opacity-50' fontSize='large' 
                        />
                        </button>
                      
                </div>  
                <Divider color='grey'/>
        </div>
    ,document.getElementById("not") as HTMLElement)
}
