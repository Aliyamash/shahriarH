"use client"

import exitBtn from '@/public/icon-shahriarh/header/x-48.png'
import headerImage from "@/public/icon-shahriarh/header/headerIcon2.png"
import headerProfileIcon from "@/public/icon-shahriarh/header/Vector.png"
import hamburgerIcon from '@/public/icon-shahriarh/header/hamburger-icon.png'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SocialMedia from '../headerIcons/SocialMedia'
 


export default function Header(){
    
 const navRef = useRef()
 const [status , setStatus] = useState(false)


const handleClick = () =>{
setStatus(!status);
}
const handleClick2 = () => {
  setStatus(!status);
}

    useEffect(() => {
      const listener = () => {
        if (window.scrollY > 200) {
          navRef.current?.classList.add('nav-scroll')
        } else {
          navRef.current?.classList.remove('nav-scroll')
        }
      }
      window.addEventListener('scroll', listener)
      return () => {
        window.removeEventListener('scroll', listener)
      }
    }, [])

      

    return(
        <>
        <div ref={navRef} className="transition-all mx-auto items-center z-30 "data-aos="fade-down" >

          {/* DESKTOP NAVBAR */}

          <div className="hidden lg:flex justify-between py-8 px-16 ">

          <div> 
            <Link href="/"><Image src={headerImage} alt="shahriarh" priority/></Link>
         </div>

          <div className="flex justify-between gap-10 " >
                <div className="flex gap-20 items-center" style={{color : "#C4CFDE"}}>
                    <Link className="hover:text-redBody transition transform active:text-black " href="#home-section">HOME</Link>
                    <Link className="hover:text-redBody transition transform active:text-white" href="#feature-section">FEATURES</Link>
                    <Link className="hover:text-redBody transition transform active:font-white"  href="#protfolio-section">PORTFOLIO</Link>
                    <Link className="hover:text-redBody transition transform active:font-white"  href="#myresume-section">RESUME</Link>
                    <Link className="hover:text-redBody transition transform active:font-white"  href="#product-section">PROCUTS</Link>
                    <Link className="hover:text-redBody transition transform active:font-white"  href="#blog-section">BLOG</Link>
                    <Link className="hover:text-redBody transition transform active:font-white"  href="#contact-section">CONTACTS</Link>
                </div>

                <div className="flex gap-8 items-center trasition-btn ">
                   <button> <a href="#product-section" style={{color :"#FF014F"}} className="btn-h  bg-bgray btn-color text-xs">Create Project!</a></button>
                </div>
                <div className="flex items-center ">
                <Link href="/auth/login" ><Image src={headerProfileIcon} style={{width : "21.33px" , height: "21.33px"}} alt="profile"></Image></Link>
                </div>
            </div>
           
          </div>

          {/* MOBILE NAVBAR */}

         
            
        <div className='lg:hidden '>

        <div className="flex justify-between gap-3 p-5 " data-aos="fade-down">

                {/* Logo! */}
              <div> 
                <Link href="/"><Image src={headerImage} className="w-12 sm:w-16 " alt="shahriarh" priority/></Link>
              </div>

              {/* hamburger and profile btn */}
             <div className="flex gap-2 sm:gap-4 md:gap-5 tablet:gap-8">
              
                <div className="flex items-center ">
                     <Link href="/auth/login" ><Image src={headerProfileIcon} className="mr-3" style={{width : "21.33px" , height: "21.33px"}} alt="profile"></Image></Link>
                 </div>

             <div className="flex  items-center trasition-btn ">
                <button> <a href="#product-section" style={{color :"#FF014F"}} className="btn-h-smal md:btn-h-medium lg:btn-h bg-bgray btn-color text-xs">Create Project!</a></button>  
              </div>

             <div className="flex items-center ">
                   <button onClick={handleClick}><Image src={hamburgerIcon} className="bg-bgray2 w-12 rounded-full p-1 shadow-3xl hover:scale-110 transition transform" alt="profile"></Image></button>
                 </div>

             </div>

            </div>
          {/* progresBar */}
         
        </div>
          </div>
          {status  ? 
           <div >
           <div className='fixed z-50 trasition transform duration-500 left-0 top-0 w-9/12  px-6 py-8 bg-bgray2 h-full flex flex-col justify-items-start' data-aos="fade-right"  data-aos-duration="700">
                  {/* header */}
                  <div>
                    <div className='flex justify-between mb-8 p-3'>
                    <Link href="/"><Image src={headerImage} className="w-16" alt="shahriarh" priority/></Link>
                    <button><Image src={exitBtn} onClick={handleClick2} className="bg-bgray2 w-14 rounded-full p-1 shadow-3xl hover:scale-110 transition transform" alt="profile"></Image></button>
                    </div>
                    <p className='text-[#c4cfdea6] leading-loose text-xl w-11/12'>Inbio is a all in one personal portfolio WordPress theme. You can customize everything.</p>
                  </div>
                  <hr className="border-gray-700 my-5" />
                  {/* menu */}
                <div className="flex justify-between py-8  ">
                  <div className="flex justify-between gap-10 " >
                      <div className="flex flex-col gap-6 justify-items-start leading-relaxed text-lg" style={{color : "#C4CFDE"}}>
                          <Link className="hover:text-redBody transition transform " href="#home-section" onClick={handleClick2}>HOME</Link>
                          <Link className="hover:text-redBody transition transform"  href="#feature-section" onClick={handleClick2}>FEATURES</Link>
                          <Link className="hover:text-redBody transition transform"  href="#protfolio-section" onClick={handleClick2}>PORTFOLIO</Link>
                          <Link className="hover:text-redBody transition transform"  href="#myresume-section" onClick={handleClick2}>RESUME</Link>
                          <Link className="hover:text-redBody transition transform"  href="#product-section" onClick={handleClick2}>PROCUTS</Link>
                          <Link className="hover:text-redBody transition transform"  href="#blog-section" onClick={handleClick2}>BLOG</Link>
                          <Link className="hover:text-redBody transition transform"  href="#contact-section" onClick={handleClick2}>CONTACTS</Link>
                      </div>
                  </div>
                </div>
                <hr className="border-gray-700 my-5" />
                {/* find me */}
                <SocialMedia/>
             </div>
                <div className='fixed z-40 trasition transform duration-500 left-0 top-0 w-full h-full bg-overlay'></div> 
           </div> 
           :
           ''
           }
        </>
    )
}