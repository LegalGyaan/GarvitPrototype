import React from 'react'

const Nav = () => {
  return (
    <nav>
    <div className="fixed h-fit w-full  bg-gray-600 flex items-center justify-between px-12 py-5 text-white">
      <h1 className=" text-center text-4xl">Medium</h1>
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
  )
}

export default Nav