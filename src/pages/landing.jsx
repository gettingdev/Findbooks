import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [bigBook, setBigbook] = useState(false)

  useEffect(() => {
    setBigbook(true)
  }, [])


  return (
    <>

{bigBook ? 


      <>
      <header className="w-[100%] h-[75px]">
        <nav className="sm:w-[1090px] sm:pl-0 sm:pr-0 md:w-[100%] md:pl-[30px] md:pr-[30px] xl:w-[1090px] xl:pl-0 xl:pr-0 pl-[15px] pr-[15px] h-[100%] flex justify-between items-center m-auto">
          <h2 className="font-bold text-[32px]">
          <span className="font-thin">FIN</span>
            DBOOK
            </h2>
          <button className="w-[100px] h-[33px] border-2 border-black font-medium hover:bg-red-50 relative">
            <Link to="/login" className="w-full h-full top-0 left-0 absolute flex items-center justify-center">Masuk</Link>
          </button>
        </nav>
      </header>
      <main className="sm:w-[1090px] md:w-full m-auto sm:p-0 w-full">
        <section className="flex sm:flex-row flex-col xl:pl-0 lg:pl-0 md:pl-0 pl-[22px] overflow-hidden sm:overflow-auto md:overflow-hidden justify-center">
          <div className="flex flex-col sm:pt-[103px] pt-[48px] md:pl-[25px] lg:pl-[10px]">
            <h1 className="font-bold lg:text-[48px] md:text-[40px] text-[27px] md:w-[450px] lg:w-[500px] w-[290px] sm:leading-[60px]">
              Gateway to Unforgettable Digital Book Experience.
            </h1>
            <span className="pl-[4px] pt-[15px] w-[350px] sm:pr-0 pr-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos
              voluptate similique sed. Nesciunt, non.
            </span>
            <button className="mt-[50px] ml-[15px]  relative bg-black w-[203px] h-[53px] p-0">
              <Link to='/app' className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-[16px] font-bold text-white">
                Start your journey
              </Link>
            </button>
          </div>
          <div className="w-[461px] mt-[10px] lg:ml-[80px]">
            <img src="/booklanding.png" alt="" />
          </div>
        </section>
        <section className="flex sm:flex-row flex-col sm:justify-center lg:gap-[70px] md:gap-2 mt-[275px] mb-[200px] xl:mb-[300px] lg:mb-[300px] md:mb-[300px] items-center md:w-[100%] sm:w-auto overflow-x-auto ">
          <div className="pt-[59px] w-[283px] h-[347px] border-[3px] mb-[50px] xl:mb-0 lg:mb-0 md:mb-0 border-black rounded-[10px] sm:mt-[37px] flex flex-col items-center">
            <div className="h-[70px] w-[70px] mb-[45px]">
              <img className="w-full" src="/api1.png" alt="" />
            </div>
            <h3 className="font-semibold text-[24px] mb-[15px]">Google API</h3>
            <p className="text-center w-[222px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos
              voluptate similique sed. Nesciunt, non.
            </p>
          </div>
          <div className="pt-[59px] w-[283px] h-[347px] border-[3px] mb-[50px] xl:mb-0 lg:mb-0 md:mb-0 border-black rounded-[10px] flex flex-col items-center">
            <div className="h-[70px] w-[70px] mb-[45px]">
              <img className="w-full" src="/api1.png" alt="" />
            </div>
            <h3 className="font-semibold text-[24px] mb-[15px]">Google API</h3>
            <p className="text-center w-[222px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos
              voluptate similique sed. Nesciunt, non.
            </p>
          </div>
          <div className="pt-[59px] w-[283px] h-[347px] border-[3px] mb-[50px] xl:mb-0 lg:mb-0 md:mb-0 border-black rounded-[10px] sm:mt-[37px] flex flex-col items-center">
            <div className="h-[70px] w-[70px] mb-[45px]">
              <img className="w-full" src="/api1.png" alt="" />
            </div>
            <h3 className="font-semibold text-[24px] mb-[15px]">Google API</h3>
            <p className="text-center w-[222px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos
              voluptate similique sed. Nesciunt, non.
            </p>
          </div>
        </section>
        
      </main>
      <footer className="shadow bg-black">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DBOOK
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/  " className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="/  " className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/  " className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="/  " className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
: <>Loading...</>}

      </>
  );
}
