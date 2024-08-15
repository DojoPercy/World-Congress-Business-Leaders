import React from "react";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex flex-col font-montserrat">
      <div className="flex justify-center items-center flex-col ">
        <img src="/logo.png" alt="logo" className=" w-[16rem]" />
        <span className="text-[16px] text-goldTheme font-[400] font-montserrat">
          December 19th - 20th 2024 | Dubai UAE
        </span>
      </div>
      <div className="flex justify-center items-center space-x-0 py-2 bg-grayColor w-full ">
        <LuMenu className="text-black text-[24px] cursor-pointer w-10" />
        <span className="font-semibold  text-goldTheme text-sm">MENU</span>
      </div>
    </div>
    
  );
};

export default Header;
