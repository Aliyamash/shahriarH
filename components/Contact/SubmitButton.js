"use client"

import { useFormStatus } from "react-dom";

export default function SubmitButton({title , style}) {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" disabled={pending} className={style} >
        {pending && <p>🙄</p> }
        {title}
      </button>
    </>
  );
}
