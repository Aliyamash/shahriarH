"use client"

import { useState } from "react"; 
import ProjectPage from "./FeaturesProject/ProjectPage";

export default function MyPortfolio () {

  const [hoveredItems1, setHoveredItems1] = useState(false);
  const [hoveredItems2, setHoveredItems2] = useState(false);
  const [hoveredItems3, setHoveredItems3] = useState(false);
  const [hoveredItems4, setHoveredItems4] = useState(false);
  const [hoveredItems5, setHoveredItems5] = useState(false);
  const [hoveredItems6, setHoveredItems6] = useState(false);
  const [workSamples , setWorkSamples] = useState(false)
  const [like , setLike] = useState(false)


    return(
    <>
    {workSamples ? 
    <ProjectPage/> 
    :   
   <div className="container mx-auto px-5 mb-50 lg:p-28">
        <div className="my-20 lg:my-5">
           <div data-aos="fade-up">
           <p className="text-redBody lg:text-lg  font-bold text-center" id='protfolio-section'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h1 className="mt-5 mb-20 text-4xl lg:text-7xl font-black text-center">My portfolio</h1>
           </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
              
                    <a className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10' >
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <img src="/img/portfolio-one.png" className='transition duration-500 relative w-full rounded-2xl hover:scale-110' alt="Icon"/>
                    </div>
                    <img className="absolute right-12 top-12 opacity-40" src="/icon-shahriarh/portfolio/collage.png" width={30}  alt="icon" />
                      <div className="flex justify-between my-8">
                      <h2 className='text-redBody text-lg  font-bold '>Gallery</h2>
                        <button className="flex"> <img src="/icon-shahriarh/portfolio/whiteHeart.png" alt="" />496</button>
                      </div>
                      <div>
                      <p className='transition duration-500 text-3xl leading-normal hover:text-redBody' onClick={() => setWorkSamples(true)} onMouseEnter={()=>setHoveredItems1(true)} onMouseLeave={()=>setHoveredItems1(false)}>NFT Dashboard Application Development.{hoveredItems1 ? <img className="inline transition delay-200 duration-500 opacity-100" src="/icon-shahriarh/portfolio/link-up.png"/> : <img className="inline transition delay-200 duration-500 opacity-0" src="/icon-shahriarh/portfolio/link-up.png"/>}</p>
                        </div>
                    </div>
                    </a>

                    <a className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10 	' >
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <img src="/img/portfolio-two.png" className='transition duration-500 relative w-full rounded-2xl hover:scale-110' alt="Icon"/>
                    </div>
                    <img className="absolute right-12 top-12 opacity-40" src="/icon-shahriarh/portfolio/video-call.png" width={30}  alt="icon" />
                      <div className="flex justify-between my-8">
                      <h2 className='text-redBody text-lg  font-bold '>Video</h2>
                        <button className="flex"> <img src="/icon-shahriarh/portfolio/whiteHeart.png" alt="" />438</button>
                      </div>
                      <div>
                      <p className='transition duration-500 text-3xl leading-normal hover:text-redBody' onClick={() => setWorkSamples(true)}  onMouseEnter={()=>setHoveredItems2(true)} onMouseLeave={()=>setHoveredItems2(false)} >Online Food Delivery Mobile App Design.{hoveredItems2 ? <img className="inline transition delay-200 duration-500 opacity-100" src="/icon-shahriarh/portfolio/link-up.png"/> : <img className="inline transition delay-200 duration-500 opacity-0" src="/icon-shahriarh/portfolio/link-up.png"/>} </p>
                        </div>
                    </div>
                    </a>

                    <a className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10 	' >
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <img src="/img/portfolio-three.png" className='transition duration-500 relative w-full rounded-2xl hover:scale-110' alt="Icon"/>
                    </div>
                    <img className="absolute right-12 top-12 opacity-40" src="/icon-shahriarh/portfolio/link.png" width={30}  alt="icon" />
                      <div className="flex justify-between my-8">
                      <h2 className='text-redBody text-lg  font-bold '>External Link</h2>
                        <button className="flex"> <img src="/icon-shahriarh/portfolio/whiteHeart.png" alt="" />197</button>
                      </div>
                      <div>
                      <p className='transition duration-500 text-3xl leading-normal hover:text-redBody' onClick={() => setWorkSamples(true)} onMouseEnter={()=>setHoveredItems3(true)} onMouseLeave={()=>setHoveredItems3(false)}>Travel App Design Creativity & Application.{hoveredItems3 ? <img className="inline transition delay-200 duration-500 opacity-100" src="/icon-shahriarh/portfolio/link-up.png"/> : <img className="inline transition delay-200 duration-500 opacity-0" src="/icon-shahriarh/portfolio/link-up.png"/>} </p>
                        </div>
                    </div>
                    </a>

                    <a className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10 	' >
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <img src="/img/portfolio-four.png" className='transition duration-500 relative w-full rounded-2xl hover:scale-110' alt="Icon"/>
                    </div>
                    <img className="absolute right-12 top-12 opacity-40" src="/icon-shahriarh/portfolio/collage.png" width={30}  alt="icon" />
                      <div className="flex justify-between my-8">
                      <h2 className='text-redBody text-lg  font-bold '>Image</h2>
                        <button className="flex"> <img src="/icon-shahriarh/portfolio/whiteHeart.png" alt="" />279</button>
                      </div>
                      <div>
                      <p className='transition duration-500 text-3xl leading-normal hover:text-redBody'  onClick={() => setWorkSamples(true)} onMouseEnter={()=>setHoveredItems4(true)} onMouseLeave={()=>setHoveredItems4(false)}>Workout Website Design And Development.{hoveredItems4 ? <img className="inline transition delay-200 duration-500 opacity-100" src="/icon-shahriarh/portfolio/link-up.png"/> : <img className="inline transition delay-200 duration-500 opacity-0" src="/icon-shahriarh/portfolio/link-up.png"/>} </p>
                        </div>
                    </div>
                    </a>

                    <a className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10 	' >
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <img src="/img/portfolio-five.png" className='transition duration-500 relative w-full rounded-2xl hover:scale-110' alt="Icon"/>
                    </div>
                    <img className="absolute right-12 top-12 opacity-40" src="/icon-shahriarh/portfolio/collage.png" width={30}  alt="icon" />
                      <div className="flex justify-between my-8">
                      <h2 className='text-redBody text-lg  font-bold '>Gallery</h2>
                        <button className="flex"> <img src="/icon-shahriarh/portfolio/redHeart.png" alt="" />293</button>
                      </div>
                      <div>
                      <p className='transition duration-500 text-3xl leading-normal hover:text-redBody' onClick={() => setWorkSamples(true)}  onMouseEnter={()=>setHoveredItems5(true)} onMouseLeave={()=>setHoveredItems5(false)}>Mobile Application Landing Page Design.{hoveredItems5 ? <img className="inline transition delay-200 duration-500 opacity-100" src="/icon-shahriarh/portfolio/link-up.png"/> : <img className="inline transition delay-200 duration-500 opacity-0" src="/icon-shahriarh/portfolio/link-up.png"/>}</p>
                        </div>
                    </div>
                    </a>

                    <a className='transition-transform duration-700 ease-in-out transform  rounded-3xl trasition btn-h bg-bgray btn-color p-10 	' >
                    <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                     <img src="/img/portfolio-six.png" className='transition duration-500 relative w-full rounded-2xl hover:scale-110' alt="Icon"/>
                    </div>
                    <img className="absolute right-12 top-12 opacity-40" src="/icon-shahriarh/portfolio/link.png" width={30}  alt="icon" />
                      <div className="flex justify-between my-8">
                      <h2 className='text-redBody text-lg  font-bold '>Gallery</h2>
                        <button className="flex"> <img src="/icon-shahriarh/portfolio/whiteHeart.png" alt="" />201</button>
                      </div>
                      <div>
                      <p className='transition duration-500 text-3xl leading-normal hover:text-redBody' onClick={() => setWorkSamples(true)}  onMouseEnter={()=>setHoveredItems6(true)} onMouseLeave={()=>setHoveredItems6(false)}>Restaurant Mobile Application Figma Design.{hoveredItems6 ? <img className="inline transition delay-200 duration-500 opacity-100" src="/icon-shahriarh/portfolio/link-up.png"/> : <img className="inline transition delay-200 duration-500 opacity-0" src="/icon-shahriarh/portfolio/link-up.png"/>}</p>
                        </div>
                    </div>
                    </a>
                
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="border-black" />
    </div>}
    </>
    )
}