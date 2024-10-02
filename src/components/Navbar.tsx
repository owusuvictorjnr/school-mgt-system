import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex">
        <Image src={"/search.png"} alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search"
          className="border-none bg-transparent ml-2"
        />
      </div>

      {/* Icons & Users */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="message" width={20} height={20} />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={"/announcement.png"}
            alt="announcement"
            width={20}
            height={20}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">Vitech</span>
          <span className="">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
