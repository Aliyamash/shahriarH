"use client"
import { create } from "@/actions/contact";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
    const [state , formAction] = useFormState(create , {});
    const restRef = useRef()

    useEffect(() => {

      toast(state?.message , {type : `${state?.status}` })
     
    }, [state])


    return(
        <div className="rounded-3xl trasition btn-h bg-bgray p-10 lg:w-3/5"  >
         <div>
         <form action={formAction} ref={restRef}>


          <div className="flex flex-col lg:flex-row  gap-10 mb-8">
            <div  className="w-full">
              <p className="my-4 text-TGray tracking-widest">YOUR NAME</p>
              <input name="name" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-5 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border"  type="text" />
            </div> 

            <div className="w-full">
              <p className="my-4 text-TGray tracking-widest">PHONE NUMBER</p>
              <input name="phone" type="number" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-5 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border" />
            </div>
          </div>


            <div className="mb-8">
              <p className="my-4 text-TGray tracking-widest">EMAIL</p>
              <input name="email" className=" transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-5 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border"  type="text" />
            </div>

            <div className="mb-8">
              <p className="my-4 text-TGray tracking-widest">SUBJECT</p>
              <input name="subject" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-5 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border"  type="text" />
            </div>

            <div className="mb-8">
              <p className="my-4 text-TGray tracking-widest ">YOUR MESSAGE</p>
              <textarea name="text" className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-5 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border h-full" rows="10" type="text" />
            </div>
            <SubmitButton title="SEND MESSAGE" style="w-full mt-2 bg-bgray2 text-center text-lg rounded-lg trasition-btn btn-h bg-bgray py-6 tracking-widest" />
            </form>

         </div>
        </div>
    )
}