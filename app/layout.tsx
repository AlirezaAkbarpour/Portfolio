import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Loading from '../components/loading'
import { Suspense } from 'react'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Alireza Akbarpour',
}

export const viewPort : Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4eff1' },
    { media: '(prefers-color-scheme: dark)', color: '#f4eff1' },
  ],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={archivo.className}>
      <head>
        <link rel='icon' href='icon.png' sizes='any'/>
      </head>
      <body className='max-w-screen-2xl 
      min-h-full bg-background-base 
      container mx-auto
      '>
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
