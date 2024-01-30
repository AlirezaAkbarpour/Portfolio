'use client';
import Circle from "./svgs/circle";
import ContactBtn from "./actions/ContactBtn";
import NavbarItem from "./NavbarItem";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName: string|null= usePathname()
  return (
    <nav className="w-full max-w-full h-16 flex justify-between 
    align-middle fixed top-0 left-0 z-10 bg-background-theme
    ">
          <div id="icon" className="w-64 h-16 p-2 mt-2 flex align-middle text-icon-blue 
          font-black text-3xl
          mr-2
          hover:animate-pulse
          "> 
            A.K.A 
            <Circle/> 
          </div>
          <div id="nav" className="w-1/2 p-2 h-16 invisible hidden md:visible md:inline">
                <ul className="flex justify-center w-full">
                  <NavbarItem link="/" title="Home" active={pathName==='/'?true:false}/>
                  <NavbarItem link="/works" title="Works" active={pathName==='/works'?true:false}/>
                  <NavbarItem link="/about" title="About" active={pathName==='/about'?true:false}/>
                  <NavbarItem link="/portfolio" title="Portfolio" active={pathName==='/portfolio'?true:false}/>
                  <NavbarItem link="/service" title="Service" active={pathName==='/service'?true:false}/>
                </ul>
          </div>
          <div id="action" className="w-52 h-8 p-2 mt-3 mx-2 flex justify-end align-middle ">
             <ContactBtn />
          </div>
    </nav>
  )
}
