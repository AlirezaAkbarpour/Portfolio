'use client';
import Circle from "./svgs/circle";
import ContactBtn from "./actions/ContactBtn";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="w-full max-w-full h-16 flex justify-between 
    align-middle fixed top-0 left-0 z-10 bg-background-theme
    ">
          <div id="icon" className="w-64 h-16 p-2 mt-2 flex align-middle text-icon-blue 
          font-black text-3xl
          font-archivo
          mr-2
          hover:animate-pulse
          "> 
            A.K.A 
            <Circle/> 
          </div>
          <div id="nav" className="w-1/2 p-2 h-16 invisible hidden md:visible md:inline">
                <ul className="flex justify-center w-full">
                  <NavbarItem link="/" title="Home"/>
                  <NavbarItem link="/works" title="Works"/>
                  <NavbarItem link="/about" title="About"/>
                  <NavbarItem link="/portfolio" title="Portfolio"/>
                  <NavbarItem link="/Service" title="Service"/>
                </ul>
          </div>
          <div id="action" className="w-52 h-8 p-2 mt-3 mx-2 flex justify-end align-middle ">
             <ContactBtn />
          </div>
    </nav>
  )
}
