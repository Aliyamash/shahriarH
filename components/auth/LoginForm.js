"use client";
import SubmitButton from "@/components/Contact/SubmitButton";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { login } from "@/actions/auth";

export default function LoginForm({ setStep }) {
  const router = useRouter();
  const [stateLogin, formActionLogin] = useFormState(login, {});
  useEffect(() => {
    toast(stateLogin?.message, { type: `${stateLogin?.status}` });
    if (stateLogin?.status === "success") {
      setStep(2)
    }
  }, [stateLogin]);
  return (
    <div className="btn-h py-8 px-12 rounded-2xl">
      <h1 className="my-8 text-5xl text-center font-bold text-white">
        Login Page
      </h1>
      <p className="text-xl text-center text-TGray mb-12 leading-loose	">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form action={formActionLogin} className="my-4">
        <div className="w-full mb-8">
          <p className="my-4 text-TGray tracking-widest">PHONE NUMBER</p>
          <input
            name="phone_no"
            className="transition duration-500  border-2 focus:outline-none focus:border-2 focus:border-redBody w-full py-3 px-4 bg-bgray2 border border-bgray2 rounded-lg shadow-border text-lg text-center"
            type="text"
          />
        </div>
        <SubmitButton
          title="Next"
          style="transition duration-700 btn-h text-center bg-redBody w-full p-5 my-8 rounded-2xl text-2xl hover:bg-bgray2"
        />
      </form>
      <div className="transtion text-center text-TGray">
        <Link className="transition hover:text-redBody" href={"/auth/register"}>
          You don't have account ?
        </Link>
      </div>
    </div>
  );
}
