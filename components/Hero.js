"use client"
import HumanPicture from "@/components/headerIcons/HumanPicture";
import Skills from "@/components/headerIcons/Skills";
import SocialMedia from "@/components/headerIcons/SocialMedia";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function Hero () {
    const typerElement = useRef(null);
    useEffect(() => {
      const typed = new Typed(typerElement.current, {
        strings: [" Developer.", " Professional Coder.", " UI/UX Designer."],
        typeSpeed: 60,
        backDelay: 2000,
        loop: true,
      });
  
      return () => {
         //  Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    });
    return(
        <div className="container mx-auto px-5 lg:p-28" id="home-section">

        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between">
          {/* typograghy header */}
        <div className="lg:w-3/6 mb-12">
         
          <section className="">
            <p className="my-8 tracking-widest">WELCOME TO MY WORLD</p>
            <p className="text-white text-4xl lg:text-6xl font-black my-3">
              Hi, I'm <span className="text-redBody">Shahriar Hosseini</span>
            </p>
            <h1 className="text-white text-4xl lg:text-6xl font-black">
              {" "}
              a <span ref={typerElement}></span>
            </h1>
            <p className="text-lg my-4 tracking-wider font-medium">
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
          </section>

          <section className="py-4 tablet:py-16 flex flex-col lg:flex-row justify-between lg:gap-8">
              <SocialMedia />
              <Skills />
          </section>
        </div>
        {/* picture header */}
        <HumanPicture />
        </div>
        <br />
        <br /> 
        <hr className="border-black" />
      </div>
    )
}