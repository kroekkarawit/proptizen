import React from "react";
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import ActionButton from "./ActionButton";
const Navbar = () => {
  return (
    <div className="w-full h-[80px] border-b border-[#E0E0E0] justify-between flex py-5 px-20 items-center">
      <Logo />
      <MainMenu />
      <ActionButton />
    </div>
  );
};

export default Navbar;
