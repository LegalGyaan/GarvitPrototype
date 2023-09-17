"use client";
import Image from "next/image";

import headImg from "@/Assets/1.png";

const Nav = () => {
  return (
    <nav>
      <div className="fixed h-fit w-full  bg-[#000000] flex items-center justify-between px-24 py-5 text-white">
        <div>
          <Image
            src={headImg}
            width={150}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="flex gap-5 items-center">
          <a href="#">Our story</a>
          <a href="#">Membership</a>
          <a href="#">Write</a>
          <a href="#">Sign In</a>
          <button className="rounded-full bg-green-400 p-2 text-white hover:bg-green-700 hover:ease-in ">
            Get Started
          </button>
        </div>
      </div>
      <hr className=" border-[2px] border-black mb-8 "></hr>
    </nav>
  );
};

export default Nav;
