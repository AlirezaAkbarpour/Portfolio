import Image from 'next/image'
import Link from 'next/link'
import Banner_cube from './svgs/banner-cube'
import Works_banner from './components/works-banner'

export default function Home() {
  return (
      <div className='w-full mx-2 h-auto min-h-[720px] bg-background-theme'>
        <div className="w-full h-[640px] mt-12 flex flex-col md:flex-row justify-between">
          <div className="title flex mt-20 flex-col py-4 px-24 w-1/2">
            <div className="titleOne w-full text-6xl text-icon-blue font-bold mx-4 p-2">Hy ! I Am</div>
            <div className="titleTwo w-full text-6xl text-icon-blue font-bold mx-4 p-2">Alireza Akbarpour</div>
            <div className="description w-full text-xl text-icon-blue/80 font-light mx-4 py-4 px-2">Web Developer & FrontEnd Developer by React.js</div>
            <div className="actions flex px-8 mt-5 w-full">
                <Link href='portfolio' className='w-28 h-10 bg-orange-700 text-white 
                text-center p-2 text-xl m-2 font-semibold '>Hire Me</Link>
                <Link href='about' className='w-32 h-10 border-2 border-orange-700 text-icon-blue 
                text-center p-2 text-base my-2 mx-6 font-light hover:bg-orange-700 hover:text-white delay-100 ease-linear hover:font-normal'>
                  Know more
                </Link>
            </div>
            <div className="detail flex w-full justify-start mt-16 mx-2">
                <Image src={'/images/fa-brands_react.png'} alt='spinner' width={120} height={120}/>
                <div className="w-72 h-20 text-base font-light text-icon-blue/80 py-8 px-2">
                  Product Designer and Developer specialized in UI/UX
                </div>
                <Image src={'/images/icons8-curly-arrow-80.png'} alt='spinner' width={120} height={120} className='relative bottom-10 left-8 scale-125 -rotate-12 '/>
            </div>
          </div>
          <div className="banner bg-slate-600 w-[640px] h-[420px] mt-24 py-4 px-24 mr-24">

          </div>
        </div>
        <div className='w-full h-48 flex justify-between bg-white p-2'>
          <div className='w-1/4'> 
                <div>
                  <Banner_cube/>
                </div>
          </div>
          <div className='w-1/4'>
                <div className='py-3'>
                  <Image src={'/images/source-code.png'} alt='code' width={64} height={64}/>
                </div>
                <div className='font-light text-base text-zinc-600 my-1'>Front End Developer</div>
                <div className='w-56 font-light text-sm'>We provide structured graphical user interface</div>
          </div>
          <div className='w-1/4'>
                <div className="py-2">
                  <Image src={'/images/light-icon.png'} alt='light' width={64} height={64}/>
                </div>
                <div className='font-light text-zinc-600 my-1 text-base'>UI/UX Designer</div>
                <div className='w-56 font-light text-sm'>The user interface is the graphical layout</div>
          </div>
          <div className='w-1/4'>
          <div className="py-2">
                  <Image src={'/images/webcam-icon.png'} alt='light' width={64} height={64}/>
                </div>
                <div className='font-light text-zinc-600 my-1 text-base'>UI/UX Designer</div>
                <div className='w-56 font-light text-sm'>The user interface is the graphical layout</div>
          </div>
        </div>
        <Works_banner/>
      </div>
  )
}
