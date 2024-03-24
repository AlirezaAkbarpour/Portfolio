import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Loading from '../components/loading'
import { Suspense } from 'react'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alireza Akbarpour',
  description: 'Alireza Akbarpour',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={archivo.className}>
      <body className='max-w-screen-2xl min-h-screen bg-background-base container mx-auto'>
        <Navbar/>
        <div className="container min-w-full mx-auto">   
          <div className='w-full min-h-full flex justify-center'>
            <Suspense fallback={<Loading/>}>
              {children}  
            </Suspense>
          </div>
        </div>
        <Footer/>
        <div id='not'></div>
      </body>
    </html>
  )
}
