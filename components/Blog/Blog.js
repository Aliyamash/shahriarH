"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SoloBlog from "./SoloBlog";
export default function Blog({items}) {
  const [itemsBlog, setItemsBlog] = useState([]);
  const [hoveredItems1, setHoveredItems1] = useState(false);
  const [workSamples, setWorkSamples] = useState(false);
  useEffect(() => {
    setItemsBlog(items);
  }, []); // این useEffect فقط یک بار پس از اولین رندر اجرا می‌شود
  return (
    <>
      {workSamples ? (
        <SoloBlog />
      ) : (
        <div className="container mx-auto px-5 mb-50 lg:p-28">
          <div className="my-5">
            <div data-aos="fade-up">
              <p className="text-redBody lg:text-lg font-bold text-center" id="blog-section">
                Visit my blog and keep your feedback
              </p>
              <h1 className="mt-5 mb-20 text-4xl lg:text-7xl font-black text-center">My Blog</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
              {itemsBlog?.map((item, index) => (
                <div
                  key={index}
                  className="transition duration-700 ease-in-out rounded-3xl trasition btn-h bg-bgray btn-color p-10"
                >
                  <div>
                    <div className="overflow-hidden rounded-2xl transition duration-500">
                      <Image
                        src={item.image}
                        className="transition duration-500 relative w-full rounded-2xl hover:scale-110"
                        width={50}
                        height={50}
                        alt="Icon"
                      />
                    </div>
                    <div className="flex justify-between my-8">
                      <h2 className="text-redBody text-lg font-bold ">{item.writer}</h2>
                      <p>{item.time_to_read} min read</p>
                    </div>
                    <div>
                      <p
                        className="transition duration-500 text-3xl leading-normal hover:text-redBody"
                        onClick={() => setWorkSamples(true)}
                        onMouseEnter={() => setHoveredItems1(true)}
                        onMouseLeave={() => setHoveredItems1(false)}
                      >
                        {item.title}
                        {hoveredItems1 ? (
                          <img
                            className="inline transition delay-200 duration-500 opacity-100"
                            src="/icon-shahriarh/portfolio/link-up.png" alt="icon"
                          />
                        ) : (
                          <img
                            className="inline transition delay-200 duration-500 opacity-0"
                            src="/icon-shahriarh/portfolio/link-up.png" alt="icon"
                          />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
