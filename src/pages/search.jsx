import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { auth } from "../firebase";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Main() {



  useEffect(() => {

  }, [])
 
  return (
    <>
        <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-[80px] lg:pr-[20px] lg:pl-[20px] lg:m-auto">
        <div className="">
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/cihuy.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/cihuy.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="border-4 rounded-[9px] border-black mb-[30px] h-auto max-w-full"
              src="/wdding 2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
