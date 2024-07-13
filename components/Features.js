"use client"

import { useState } from 'react'

export default function Features() {
    const [hoveredItems, setHoveredItems] = useState({});
  
    const handleMouseEnter = (id) => {
      setHoveredItems(prevState => ({
        ...prevState,
        [id]: true
      }));
    };
  
    const handleMouseLeave = (id) => {
      setHoveredItems(prevState => ({
        ...prevState,
        [id]: false
      }));
    }
    const features = [
      
        {
          "img"  :  "/icon-shahriarh/feature/icon1.png",
          "title" : "Business Stratagy",
          "paragraph" : "I will analyze your business and give you the best goals for success"  
        },
        {
          "img"  :  "/icon-shahriarh/feature/icon2.png",
          "title" : "App Development",
          "paragraph" : "We’ll handle everything from to app development process until it is time to make your project live."  
        },
        {
          "img"  :  "/icon-shahriarh/feature/icon3.png",
          "title" : "Improving Social Media",
          "paragraph" : "We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs."  
        },
        {
          "img"  :  "/icon-shahriarh/feature/icon4.png",
          "title" : "Mobile App",
          "paragraph" : "Using our expertise in mobile application development to create beautiful pixel-perfect designs."  
        },
        {
          "img"  :  "/icon-shahriarh/feature/icon5.png",
          "title" : "SEO Optimisation",
          "paragraph" : "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!"  
        },
        {
          "img"  :  "/icon-shahriarh/feature/icon6.png",
          "title" : "UX Consulting",
          "paragraph" : "A UX consultant is responsible for many of the same tasks as a UX designer, but they typically."  
        },
      
   

  ]

    return(
      
        <div className="container mx-auto px-5 mt-28 mb-50 lg:p-28">
            <div className="my-5">
            <div className='text-center' data-aos="fade-up">
            <p className="text-redBody lg:text-lg  font-bold" id='feature-section'>FEATURES</p>
                <h1 className="mt-5 mb-16 text-4xl lg:text-7xl font-black" >What I Do</h1>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 " data-aos="fade-up">
                    {features.map((items , index) => (
                        <a key={index} className='transition-transform duration-700 ease-in-out transform  trasition rounded-2xl btn-h bg-bgray btn-color py-16 px-12' href='#' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                        <div className='trasition-btn'>
                        <img src={items.img} width={50} alt="Icon"/>
                          <h2 className='text-3xl font-medium mb-5 mt-8'>{items.title}</h2>
                          <p className='text-xl mb-5 leading-loose'>{items.paragraph}</p>
                           { hoveredItems[index] ? <img className=' trasition duration-700 opacity-100' src="/icon-shahriarh/feature/iconRight.png" width={60} alt="Right Icon" /> : <img className='transition opacity-0' src="/icon-shahriarh/feature/iconRight.png" width={60} alt="Right Icon" />}
                        </div>
                    </a>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <hr className="border-black my-24" />
        </div>
      
    )
}