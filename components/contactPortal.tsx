import { useRef } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createPortal } from 'react-dom';
import { Button, Divider } from '@mui/material';
import Link from 'next/link';
import { Email, Telegram } from '@mui/icons-material';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

type Props = {
    isOpen:boolean,
    OnClose:any
}


export default function ContactPortal({isOpen,OnClose}:Props){
    const layout : React.RefObject<HTMLDivElement> = useRef(null)
    const timeline = gsap.timeline()
    const {contextSafe} = useGSAP({scope:layout})
    const closeHandler = ()=>{
        const Onclicked = contextSafe(()=>{
            timeline.to(layout.current,{opacity:0,y:40,ease:'power1.out'})
        })
        Onclicked();
        setTimeout(()=>{        
            OnClose(false);
        },400)
    }

    useGSAP(()=>{
       isOpen?timeline.to(layout.current,{opacity:1,y:-40}):null
    },{scope:layout})
    
    if(!isOpen) return null;

    return createPortal(
        <div className='w-full h-full flex justify-center absolute z-50 top-0 left-0'>
            <div className='portal w-[640px] h-[360px] bg-white opacity-0 rounded-lg p-2 fixed top-1/4 shadow-2xl' ref={layout}>
                    <div className='w-full h-16 flex justify-between p-4'>
                            <h1 className='text-4xl font-archivo font-semibold text-footer-color-black'>Contact Me</h1>
                            <Button className='text-center w-14 h-16 p-2 flex justify-center' onClick={closeHandler}>
                                <CancelIcon sx={{fontSize:"3rem"}} className='text-orange-500 mb-5'/>
                            </Button>
                    </div>  
                    <Divider color='grey' variant='middle' />
                    <div className='flex justify-center'>

                    <div className="flex justify-center w-1/3 p-4 mt-8 
                    hover:border-2 hover:border-orange-500 hover:scale-105 
                    rounded-lg delay-75 transition-all ease-in-out">
                        <Link href={'https://instagram.com/alirezaakbarpour2024'} target='_instagram' >
                            <InstagramIcon sx={{fontSize:"108px"}} className='text-orange-600 ml-2 text-center'/>
                            <h1 className='text-center font-semibold text-footer-color-black text-2xl p-2 mt-8'>Instagram</h1>
                        </Link>
                    </div>
                    <div className="flex justify-center w-1/3 p-4 mt-8 
                    hover:border-2 hover:border-orange-500 hover:scale-105 
                    rounded-lg delay-75 transition-all ease-in-out">
                        <Link href={'https://t.me/ali2049aka'} target='_telegram' >
                            <Telegram sx={{fontSize:"108px"}} className='text-orange-600 ml-2 text-center'/>
                            <h1 className='text-center font-semibold text-footer-color-black text-2xl p-2 mt-8'>Telegram</h1>
                        </Link>
                    </div>
                    <div className="flex justify-center w-1/3 p-4 mt-8 
                    hover:border-2 hover:border-orange-500 hover:scale-105 
                    rounded-lg delay-75 transition-all ease-in-out">
                        <Link href={'mailto:akbarpouralireza1@gmail.com'} type='email' target='_email'>
                            <Email sx={{fontSize:"108px"}} className='text-orange-600 ml-2 text-center'/>
                            <h1 className='text-center font-semibold text-footer-color-black text-2xl p-2 mt-8'>Email</h1>
                        </Link>
                    </div>
                    </div>
            </div>
        </div>
    ,document.getElementById("not") as HTMLElement)
}
