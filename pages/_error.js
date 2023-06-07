import React from "react";
// Next Components
import Link from "next/link";
// Icons
import { BiError } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";

const Error404 = () => {
  return (
    <div className="w-full h-screen bg-letter-bg bg-no-repeat bg-[length:100vw_100vh]">
      <div className="backdrop-blur-sm w-full h-full flex items-center justify-center flex-col">
        <BiError className="text-[10rem] text-red-500" />
        <div className="text-5xl my-4 text-white font-semibold">
          Some Error Occured!
        </div>
        <Link href="/">
          <button className="px-6 py-2 font-semibold text-green-400 flex items-center justify-center rounded-full bg-gray-100 shadow border my-4">
            <HiOutlineHome className="text-lg mr-2" /> Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
