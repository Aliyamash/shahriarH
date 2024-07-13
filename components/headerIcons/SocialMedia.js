"use client"

import facebookIcon from "@/public/icon-shahriarh/home/facebook-50.png"
import likedinIcon from "@/public/icon-shahriarh/home/linkedin-50.png"
import twitterIcon from "@/public/icon-shahriarh/home/icons8-twitter-50.png"
import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <p className="my-8 tracking-widest" style={{color : "#C4CFDE"}}>FIND WITH ME</p>
      <div className="flex gap-8">
      <div className="p-2 xl:p-4 btn-h bg-bgray btn-color trasition-btn" >
        <Link href="/facebook"><Image src={facebookIcon} width={35}  alt="socialmedia"/></Link>
      </div>


      <div className="p-2 xl:p-4 btn-h bg-bgray btn-color trasition-btn">
        <Link href="/profile"><Image src={twitterIcon} width={35} alt="socialmedia" /></Link>
      </div>

      <div className="p-2 xl:p-4 btn-h bg-bgray btn-color trasition-btn" >
        <Link href="/linkedin"><Image src={likedinIcon} width={35} alt="socialmedia"/></Link>
      </div>
      </div>
    </div>
  );
}
