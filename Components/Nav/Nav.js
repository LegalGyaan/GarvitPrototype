"use client";
import Image from "next/image";

import headImg from "@/Assets/1.png";
import Link from "next/link";
import TemporaryDrawer from "../hamburger";

const Nav = () => {
  return (
    <nav>
      <div className="fixed h-fit w-full  bg-[#000000] flex items-center justify-between px-40 py-4 text-white">
        <div>
          <Link href="/">
            <Image
              src={headImg}
              width={150}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <a href="#">Our story</a>
          <a href="#">Membership</a>
          <a href="#">Write</a>
          <a href="#">
            <TemporaryDrawer />
          </a>
        </div>
      </div>
      <hr className=" border-[2px] border-black mb-8 "></hr>
    </nav>
  );
};

export default Nav;
