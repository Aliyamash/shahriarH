"use client";
import SubmitButton from "@/components/Contact/SubmitButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { checkOtp } from "@/actions/auth";
import React from "react";
import { Flex, Input } from "antd";

export default function CheckOtpForm() {
  const [stateOtp, formActionOtp] = useFormState(checkOtp, {});
  const [otp , setOtp] = useState([])
  const router = useRouter();
   useEffect(() => {
     toast(stateOtp?.message, { type: `${stateOtp?.status}` });
     if (stateOtp.status === "success") {
       router.push("/");
     }
   }, [stateOtp]);

  const onChange = (text) => {
    console.log("onChange:", text);
    setOtp(text)
  };
  const sharedProps = {
    onChange,
  };

  return (
    <div className="btn-h py-12 px-16 rounded-2xl">
      <h1 className="my-8 text-5xl text-center text-white">
        Verification code
      </h1>
      <p className="text-xl text-center text-TGray mb-12 leading-loose">
        enter the code we sent you here
      </p>
      <form className="my-4" action={formActionOtp}>
        <div className="flex gap-8 justify-center my-8">
          <div className="px-5">
            <Flex gap="8" align="flex-start" vertical>
              <Input.OTP length={5} {...sharedProps} />
              <input name="otp" type="hidden" value={otp} />
            </Flex>
          </div>
        </div>
        <SubmitButton
          title="Submit"
          style="transition duration-700 btn-h text-center bg-redBody w-full p-5 my-8 rounded-2xl text-2xl hover:bg-bgray2"
        />
      </form>
      <div className="text-center">
        <Link className="transition duration-500 text-2xl text-white border-b hover:text-redBody hover:border-redBody" href={"/auth/login"}>
          Back
        </Link>
      </div>
    </div>
  );
}
