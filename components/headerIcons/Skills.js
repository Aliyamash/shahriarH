

import phpIcon from "@/public/icon-shahriarh/home/folder.png"
import pythonIcon from "@/public/icon-shahriarh/home/python2.png"
import reactIcon from "@/public/icon-shahriarh/home/react.png"
import Image from "next/image";
export default function Skills(){
    return(
        <div className="mt-4">
        <p className="my-8 tracking-widest">BEST SKILL ON</p>
        <div className="flex gap-8">
        <div className="p-2 xl:p-4  btn-h bg-bgray" >
          <Image src={reactIcon} width={35} alt="skills" />
        </div>
        <div className="p-2 xl:p-4 btn-h bg-bgray  ">
         <Image src={pythonIcon} width={35} alt="skills" />
        </div>
        <div className="p-2 xl:p-4 btn-h bg-bgray" >
         <Image src={phpIcon} width={35}  alt="skills"/>
        </div>
        </div>
      </div>
    )
}