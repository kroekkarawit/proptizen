import React from "react";
import Link from "next/link";
const MainMenu = () => {
  const menuLinks = [
    {
      title: "Browse",
      href: "/",
    },
    {
      title: "Room Finding",
      href: "/",
    },
    {
      title: "Article",
      href: "/",
    },
    {
      title: "Tools",
      href: "/",
    },
    {
      title: "About",
      href: "/",
    },
    {
      title: "Contact Us",
      href: "/",
    },
  ];
  return (
    <div className="items-center hidden md:flex">
      {menuLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="font-inter text-base font-medium leading-6 tracking-normal text-left py-2 px-4"
        >
          {link.title}
        </Link>
      ))}
      <Link href={"./"} className=" font-inter font-medium border border-critical rounded-full h-9 w-[159px] gap-4 py-2 px-4">
        <p className="text-critical w-[127px] h-5 text-sm text-center">
          Post Your Property
        </p>
      </Link>
    </div>
  );
};

export default MainMenu;
