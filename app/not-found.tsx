import Blog_banner from "@/components/blog-banner"
import Loading from "@/components/loading"
import Works_banner from "@/components/works-banner"
import Image from "next/image"
import { Suspense } from "react"

export default function NotFound() {
  return (
  <div className="w-full h-full">
    <div className='w-full h-[660px] bg-background-theme flex justify-center'>
        <div className="w-full mt-28 tracking-[0.75rem] font-black h-full mx-auto">
            <div className='text-4xl w-full text-center text-footer-color-black relative top-16 z-20'>Page not Found!</div>
            <div className="w-full h-full flex justify-center relative bottom-10 z-10">
            <Image src="/images/not-found.png" width={640} height={430} alt="404 not found"/>
            </div>
        </div>
    </div>
    <div className="w-full flex justify-center">
        <Blog_banner/>
    </div>
    <div className="w-full flex justify-center">
        <Works_banner/>
    </div>
    </div>
  )
}
