"use client"


import Image from "next/image";
import exitBtn from '@/public/icon-shahriarh/header/x-48.png'
import SliderFeatures from "./Slider";
import MyPortfolio from "../Portfolio";
import { useState } from "react";

export default function ProjectPage() {
  const [exit , setExit] = useState(false)
const handleExit = () => {
  setExit(!exit)
}
  return (
<>
{exit ? <MyPortfolio/> :  
  <div className="bg-bgray z-50" data-aos="fade-down">
        <div className="container mx-auto px-5 mb-50 lg:p-28">
        <div className="relative bg-bgray btn-h rounded-2xl">
          <div className="lg:p-12 py-12">
          <button onClick={handleExit}><Image src={exitBtn} className="absolute top-2 right-2 bg-bgray2 w-12 lg:w-14 rounded-full p-1 shadow-3xl hover:scale-110 transition transform" alt="profile"></Image></button>
          {/* header portfolio */}
            <div className="lg:flex justify-between items-center ">
            {/* //slider */}
            <SliderFeatures/>
            
            {/* section title and details */}
            <div>
              <h1 className="text-3xl font-bold my-8 ">NFT Dashboard Application Development.</h1>
              <p className="text-xl text-TGray leading-relaxed	mb-6">
                Through a wide variety of <span className="font-bold">mobile applications</span>, we’ve
                developed a unique visual system.
              </p>
              <div className="grid grid-row-1 md:grid-cols-2 gap-3">
                <p className="text-lg font-semibold py-3">
                  Client : <span className="font-light ml-2 text-TGray ">George Wallace</span>
                </p>
                <p className="text-lg font-semibold py-3">
                  Date : <span className="font-medium ml-2 text-TGray">15 June 2022</span>
                </p>
                <p className="text-lg font-semibold py-3">
                  Services : <span className="font-medium ml-2 text-TGray">Web Application</span>
                </p>
                <p className="text-lg font-semibold py-3">
                  Budget : <span className="font-medium ml-2 text-TGray">$100000+</span>
                </p>
              </div>
            </div>

            </div>
            <br />
            <br />
            <hr className="border-black" />
            {/* description */}
            <div>
              <p className="text-xl text-TGray leading-loose my-12">There are always some stocks, which illusively scale lofty heights in a given time period. However, the good show doesn’t last for these overblown toxic stocks as their current price is not justified by their fundamental strength.</p>
            </div>
            <div className="flex gap-8">
              <div>
                  <h1 className="text-lg font-bold mb-6">Strategy</h1>
                  <p className="text-TGray leading-loose">A strategy is a general plan to achieve one or more long-term. labore et dolore magna aliqua</p>
              </div>
              <div>
                  <h1 className="text-lg font-bold mb-6">Design</h1>
                  <p className="text-TGray leading-loose">UI/UX Design, Art Direction, A design is a plan or specification for art. which illusively scale lofty heights.</p>
              </div>
              <div>
                  <h1 className="text-lg font-bold mb-6">User Experience</h1>
                  <p className="text-TGray leading-loose">User experience (UX) design is the process design teams use to create products that provide.</p>
              </div>
            </div>
            <div>
              <p className="text-xl text-TGray leading-loose my-12">Toxic companies are usually characterized by huge debt loads and are vulnerable to external shocks. Accurately identifying such bloated stocks and getting rid of them at the right time can protect your portfolio</p>
              <p className="text-xl text-TGray leading-loose my-12">Overpricing of these toxic stocks can be attributed to either an irrational enthusiasm surrounding them or some serious fundamental drawbacks. If you own such bubble stocks for an inordinate period of time, you are bound to see a massive erosion of wealth.</p>
            </div>
            {/* gallery */}
            <div className="my-12 w-4/6">
              <img className="rounded-xl w-full" src="/img/portfolio-one.png" alt="gallery" />
              <p className="my-4 text-center text-lg text-TGray">Screen One</p>
            </div>

            <div className="my-12 w-4/6">
              <img className="rounded-xl w-full" src="/img/portfolio-two.png" alt="gallery" />
              <p className="my-4 text-center text-lg text-TGray">Screen Two</p>
            </div>
            {/* discription */}

            <div>
              <p className="text-xl text-TGray leading-loose	 mb-5">However, if you can precisely spot such toxic stocks, you may gain by resorting to an investing strategy called short selling. This strategy allows one to sell a stock first and then buy it when the price falls.</p>
              <p className="text-xl text-TGray leading-loose my-8">While short selling excels in bear markets, it typically loses money in bull markets.</p>
              <p className="text-xl text-TGray leading-loose	">So, just like identifying stocks with growth potential, pinpointing toxic stocks and offloading them at the right time is crucial to guard one’s portfolio from big losses or make profits by short selling them. Heska Corporation HSKA, Tandem Diabetes Care, Inc. TNDM, Credit Suisse Group CS,Zalando SE ZLNDY and Las Vegas Sands LVS are a few such toxic stocks.Screening Criteria</p>
              <p className="text-xl text-TGray leading-loose	my-8">Here is a winning strategy that will help you to identify overhyped toxic stocks:</p>
              <p className="text-xl text-TGray leading-loose	">Most recent Debt/Equity Ratio greater than the median industry average: High debt/equity ratio implies high leverage. High leverage indicates a huge level of repayment that the company has to make in connection with the debt amount.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
</> 
  );
}
