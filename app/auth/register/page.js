"use client"
import SubmitButton from "@/components/Contact/SubmitButton";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { register } from "@/actions/auth";
import { useRouter } from "next/navigation";


export default function registerPage() {
  const router = useRouter()
 const [state , formAction] = useFormState(register , {});
   useEffect(() => {
      toast(state?.message , {type : `${state?.status}` })
      if(state.status === 'success'){
        router.push('/auth/login')
      }
 }, [state])

  return (
    <>
      <div className="container mx-auto px-5  lg:p-28">
        <div className="lg:my-5 mx-auto items-center lg:w-2/5">
         <div className="btn-h py-5 px-8 rounded-2xl">
         <h1 className="my-8 text-5xl text-center font-bold text-white">Register Page</h1>
         <p className="text-xl text-center text-TGray mb-8 leading-loose	">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <form action={formAction} className="my-4">
            <div  className="w-full mb-8">
              <p className="my-4 text-TGray tracking-widest">Full NAME</p>
              <input name="name" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-3 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border text-lg"    type="text"/>
            </div> 
            <div  className="w-full mb-8">
              <p className="my-4 text-TGray tracking-widest">EMAIL</p>
              <input name="email" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-3 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border text-lg"  type="email" />
            </div> 
            <div  className="w-full mb-8">
              <p className="my-4 text-TGray tracking-widest">PHONE NUMBER</p>
              <input name="phone_no" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-3 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border text-lg" type="text"/>
            </div>
            <SubmitButton title="Create account" style="transition duration-700 btn-h text-center bg-redBody w-full p-5 my-8 rounded-2xl hover:bg-bgray2"/>
            </form>

          <div className="transtion text-center text-TGray">
          <Link className="hover:border-b border-red" href={"/auth/login"}>Do you have account ?</Link>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
