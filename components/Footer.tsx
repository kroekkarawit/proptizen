import React from "react";
import FooterMain from "./FooterMain";
import FooterSecondary from "./FooterSecondary";
const Footer = () => {
  return (
    <div className="bg-brand w-full h-[376px]">
      <FooterMain />
      <FooterSecondary />
    </div>
  );
};

export default Footer;
