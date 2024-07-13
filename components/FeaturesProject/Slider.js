"use client"


import {  Autoplay, Navigation } from 'swiper/modules';
import { React } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';

import 'swiper/css';






export default function SliderFeatures () {

    return (

        <div className="lg:w-3/6 lg:p-10 z-10 rounded-lg relative">
          <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      speed={1500}
      loop={true}
      navigation={{
        nextEl: '#next',
        prevEl: '#prev' 
      }}
      autoplay={{
        delay:2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
    
    >
  
   
 
      <SwiperSlide><img className="w-full rounded-2xl" src="/img/portfolio-one.png" alt="sliderpic" /></SwiperSlide>
      <SwiperSlide><img className="w-full z-10 rounded-2xl"  src="/img/portfolio-two.png" alt="sliderpic" /></SwiperSlide>
      <SwiperSlide><img className="w-full z-10 rounded-2xl"  src="/img/portfolio-three.png" alt="sliderpic" /></SwiperSlide>
      <SwiperSlide><img className="w-full z-10 rounded-2xl"  src="/img/portfolio-four.png" alt="sliderpic" /></SwiperSlide>
    </Swiper>
    <div className='absolute  top-1/2  -left-7 lg:left-0 z-20 bg-bgray2 p-5 rounded-full swiper-button-next' id='next'><img width={20} src="/icon-shahriarh/portfolio/left.png" alt="" /></div>
      <div className='absolute  top-1/2  -right-7 lg:right-0  z-20 bg-bgray2 p-5 rounded-full swiper-button-prev' id='prev'><img width={20} src="/icon-shahriarh/portfolio/right.png" alt="" /></div>
          </div>
    
    )
}