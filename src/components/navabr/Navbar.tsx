"use client"

import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState , useEffect } from "react";
import { useRouter } from 'next/router'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow ,setShadow] = useState(false) 
  const [navbg ,setNavbg] = useState('#ecf0f3') 
  const [linkcolor , setLinkcolor ] = useState("#1f2937") 
 
 
  // const router = useRouter();
  // useEffect (()=>{
  //   if(
  //     router.asPath === "/property" || 
  //     router.asPath === "/crypto" || 
  //     router.asPath === "/netflix" || 
  //     router.asPath === "/twitch" 
  //   ) {
  //     setNavbg("transparent")
  //     setLinkcolor("#ecf0f3")
  //   } else {
  //     setNavbg("#ecf0f3")
  //     setLinkcolor("#1f2937")
  //   }
  // },[router] )

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect (()=> {
    const handleShadow =() => {
      if(window.scrollY >= 90){
        setShadow(true)
      } else{
        setShadow(false) ;
      }
    }
    window.addEventListener('scroll' , handleShadow) ;
  },[]) ;
  return (
    <div style={{backgroundColor : `${navbg}`}} className={shadow ? "fixed w-full h-20 shadow-xl z-[100] ":" fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Image src={Logo} alt="Logo" height="60"></Image>

        <div>
          <ul style={{color : `${linkcolor}`}}  className="hidden md:flex">
            <Link href="#home">
              <li className="ml-10 text-sm uppercase hover:border-b">home</li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#porjects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 " : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" >
              <Image src={Logo} alt={"Logo"} width={70} height={20} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md;w-[90%] py-4">
                {" "}
                Lets buld something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=>setNav(false)}  className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Porjects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
