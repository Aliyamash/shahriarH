import Image from "next/image";
import Form from "./Form";
import contactImg from '@/public/img/contact2.png'
import SocialMedia from "../headerIcons/SocialMedia";
export default function Contact() {
 
  return (
    <div className="container mx-auto px-5 mb-50 my-36">
      <div className="my-20 lg:my-5">
        <div data-aos="fade-up">
          <p
            className="text-redBody lg:text-lg text-center tracking-widest"
            id="contact-section"
          >
            CONTACT
          </p>
          <h1 className="mt-5 mb-20 text-4xl lg:text-7xl font-black text-center">
            Contact With Me
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 justify-center lg:mx-28">
          {/* about */}
          <div className="rounded-3xl trasition btn-h bg-bgray p-10 lg:w-2/5 h-4/5">
           <div className=" overflow-hidden rounded-3xl w-full">
           <Image src={contactImg} alt="contact" className="transition duration-500 hover:scale-110 w-full"/>
           </div>
           
           <h1 className="my-8 text-4xl font-black text-white">Shahriar Hosseini</h1>

            <div c>
              <p className="text-xl text-TGray my-4 ">Developer</p>
              <p className="text-2xl text-TGray my-4 leading-relaxed">I am available for freelance work. Connect with me via and call in to my account.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-TGray my-4 ">Phone : </h1>
              <p className="transition duration-1000 text-xl text-white hover:text-redBody">+447941100681</p>
            </div>
            <div className="my-5 ">
            <SocialMedia />
            </div>
          </div>

          {/* contact */}
          <Form  />
          
        </div>
      </div>
    </div>
  );
}
