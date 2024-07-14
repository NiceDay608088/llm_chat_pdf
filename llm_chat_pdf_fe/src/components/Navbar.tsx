"use client";

import React from "react";
import ThemeDropdownMenu from "./ThemeDropDown";

const Navbar = () => {
  return (
    <div className=" flex relative justify-between items-center h-12 w-full px-4 select-none bg-gray-50 text-black dark:bg-black dark:text-white ">
      <span>LLM Chat PDF</span>
      <ThemeDropdownMenu />
    </div>
  );
};

export default Navbar;
