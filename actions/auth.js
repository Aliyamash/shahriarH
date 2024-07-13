"use server";
import { getFetch, postFetch, postFormFetch } from "@/utils/fetch";
import { message } from "antd";
import { cookies } from "next/headers";

async function register(state, formData) {
  const name = formData.get("name");
  const phone = formData.get("phone_no");
  const email = formData.get("email");
  if (name === "" || phone === "" || email === "") {
    return {
      status: "error",
      message: "Please fill in all the values.",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/
  if(!pattern.test(phone)){
    return {
      status: "error",
      message: "Mobile number format is not valid",
    };
  }
  const data = await postFormFetch("/1234/register/new/", formData
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "Registration was successful",
    };
  }else if (data.status === "error") {
    return{
      status: data.status,
      message: data.message,
    }
  }
} 



async function login(state, formData) {
  const phone = formData.get("phone_no");
 
  if (phone === "") {
    return {
      status: "error",
      message: "Please enter your mobile number",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/
  if(!pattern.test(phone)){
    return {
      status: "error",
      message: "Mobile number format is not valid",
    };
  }

  const data = await postFormFetch(`/1234/login/fp_request/`, formData)

   if (data.status === "success") {
    cookies().set({
      name: 'login_token',
      value: data.data.login_token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
     return {
       status: data.status,
      message: ("The login code has been sent to you" , data.message)
     };
   }else if (data.status === "error") {
    return{
       status: data.status,
       message: data.message,
     }
   }
}


async function checkOtp(state, formData) {
  const otp = formData.get("otp");
  console.log(otp);
  if (otp === "") {
    return {
      status: "error",
      message: "A verification code is required",
    };
  }
  const pattern = /^[0-9]{5}$/
  if(!pattern.test(otp)){
    return {
      status: "error",
      message: "The verification code is not valid",
    };
  }

  const loginToken = cookies().get("login_token")
  if(!loginToken){
return{
  status: "error",
  message: "your token is not valid. Try again"
}

  }

   const data = await postFetch(`/1234/login/fp_verify/`,  { code : otp , login_token : loginToken.value })

    if (data.status === "success") {
      cookies().delete('login_token')
      cookies().set({
        name: 'token',
        value: data.data.token,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      return {
        status: data.status,
       message: "You are logged in",
      };
    }else if (data.status === "error") {
     return{
        status: data.status,
        message: data.message,
      }
    }
}
export { register , login , checkOtp};
