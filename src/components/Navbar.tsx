import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300">
        <Image
          src={"/search.png"}
          alt="search"
          width={14}
          height={14}
          className="ml-2"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-[200px] p-2 outline-none"
        />
      </div>

      {/* Icons & Users */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" width={20} height={20} />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src={"/announcement.png"}
            alt="announcement"
            width={20}
            height={20}
          />

          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-vPurple text-white rounded-full text-xs">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">Vitech</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
