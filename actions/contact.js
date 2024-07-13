"use server";
import { postFetch } from "@/utils/fetch";
async function create(state, formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");

  if ( name === "" || phone === "" || email === "" || subject === "" || text === "") {
    return {
      status: "error",
      message: "Please fill in all the values.",
    };
  }
  
  const data = await postFetch("/1234/contacts/", {name, phone, email, subject, text,});
  if (data.status === "success") {
    return {
      status: data.status,
      message: "Thank you for your message.",
    };
  }
}
export { create };
