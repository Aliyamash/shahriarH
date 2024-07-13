"use client"
import CheckOtpForm from "@/components/auth/CheckOtpForm";
import LoginForm from "@/components/auth/LoginForm";
import { useState } from "react";


  export default function loginPage () {
  const [step , setStep] = useState(1)
      return (
          <>
        <div className="container mx-auto px-5 mb-50 lg:p-28 p-10">
          <div className="lg:my-5 mx-auto items-center lg:w-2/5">
            {step == 1 && <LoginForm setStep={setStep} /> }
            {step == 2 && <CheckOtpForm/> }
          </div>
        </div>
      </>
      )
  }