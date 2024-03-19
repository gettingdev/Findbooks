import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { signOutUser } from '../firebase'

export default function Navbar() {
  const [photoURL, setPhotoURL] = useState(0);
  const [searchBox, setSearchBox] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const photo = localStorage.getItem("photoURL");
    setPhotoURL(photo);
  });

  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const handleFind = (e) => {
    e.preventDefault();
    if (query == "") {
      return navigate("/app/find/education");
    }
    navigate(`/app/find/${query}`);
  };

  const handleSignOut = () => {
    signOutUser().then(() => {
      localStorage.removeItem('photoURL')
      localStorage.removeItem('uid')
      navigate('/')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <nav className="bg-white w-full fixed h-[80px] z-10 border-[1px] border-white items-center">
      <div className="flex flex-wrap items-center justify-between mx-auto pt-4 2xl:pl-0 2xl:w-[1500px]">
        <div className="flex gap-14 md:w-auto w-full justify-between md:justify-normal">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse pl-2"
          >
            <h2 className="font-bold md:text-[32px] text-[29px] ">
              <span className="font-thin">FIN</span>
              DBOOK
            </h2>
          </Link>
          <ul className="md:flex hidden items-center gap-3">
            <li>
              <Link to="/app" className="text-[20px] font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/app/genre" className="text-[20px] font-medium">
                Genre
              </Link>
            </li>
          </ul>
          <div className="w-auto h-10 flex items-center gap-3 md:hidden  mr-3">
            <div onClick={() => setSearchBox(!searchBox)} className="w-8 h-8  ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div onClick={() => setMenu(!menu)} className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {menu ? (
          <div className="bg-white pl-[7%] pt-5 pb-5 flex justify-between relative w-full pr-[5%] shadow-lg ">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/app" className="text-[19px]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/app/genre" className="text-[19px]">
                  Genre
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-2 items-center">
              <div className="w-[50px] h-[50px] ">
                <img src={photoURL} alt="" />
              </div>
              <button onClick={handleSignOut} className="font-bold">Logout</button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {searchBox ? (
          <div className=" w-full md:w-auto flex justify-evenly h-20 items-center bg-white absolute z-10 top-0 ">
            <form
              method="get"
              onSubmit={handleFind}
              className="w-[70%] flex justify-center"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                name="q"
                className=" border p-4 h-11 2xl:w-[300px] w-full rounded-[5px] border-black"
                placeholder="Find.."
              />
            </form>
            <div
              onClick={() => setSearchBox(!searchBox)}
              className=" w-10 h-10"
            >
              <svg
                viewBox="0 -0.5 8 8"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>close_mini [#1522]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -206.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <polygon
                        id="close_mini-[#1522]"
                        points="334.6 49.5 337 51.6 335.4 53 333 50.9 330.6 53 329 51.6 331.4 49.5 329 47.4 330.6 46 333 48.1 335.4 46 337 47.4"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="md:flex hidden gap-4 bg-white w-full md:w-auto justify-center items-center md:shadow-none shadow-sm md:h-auto h-20">
          <form method="get" action="/app/find" onSubmit={handleFind}>
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              name="q"
              className=" border p-4 h-11 2xl:w-[300px] w-[250px] rounded-[5px] border-black"
              placeholder="Find.."
            />
          </form>
          <div className="md:block relative group">
              <button onClick={handleSignOut} className="bg-white border-red-500 border-3 text-red-500 font-bold rounded-md absolute bottom-[-45px] hidden right-0 h-10 border pr-3 pl-3 group-hover:block">Logout</button>
            <img
              className="w-11 h-11 rounded-[5px] border border-black"
              src={photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
