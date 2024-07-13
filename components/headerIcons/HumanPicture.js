import humanPicture from '@/public/icon-shahriarh/home/Human.png'
import Image from 'next/image'

export default function HumanPicture(){
    return(
        <>
       <div className='relative'>
      <Image src={humanPicture} className='-z-10' alt='human-hero' loading='lazy'/>
       <div className="absolute bottom-0 -z-40 py-40 lg:py-52 w-full btn-h bg-bgray"></div>
       </div>
        </>
        
    )
} 