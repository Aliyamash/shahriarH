"use client";
import Image from "next/image";
import exitBtn from "@/public/icon-shahriarh/header/x-48.png";
import { useState } from "react";
import Blog from "./Blog";
import ReadBlog from "./ReadBlog";
export default function SoloBlog() {
  const [exit, setExit] = useState(false);
  const handleExit = () => {
    setExit(!exit);
  };
  return (
    <>
      {exit ? (
        <Blog />
      ) : (
        <div className="bg-bgray z-50" data-aos="fade-down">
          <div className="container mx-auto px-5 mb-50 lg:p-28">
            <div className="relative bg-bgray btn-h rounded-2xl">
              <button onClick={handleExit}>
                <Image
                  src={exitBtn}
                  className="absolute top-2 right-2 bg-bgray2 w-12 lg:w-14 rounded-full p-1 shadow-3xl hover:scale-110 transition transform"
                  alt="profile"
                />
              </button>
              <ReadBlog />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
