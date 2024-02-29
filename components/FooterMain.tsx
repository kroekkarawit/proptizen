import React from "react";
import FooterWebsiteLink from "./FooterWebsiteLink";
const FooterMain = () => {
  const footerMainLinks = [
    {
      header: "Prop",
      links: [
        { title: "Search", link: "#" },
        { title: "Room Finding", link: "#" },
        { title: "Blogs", link: "#" },
        { title: "Tools", link: "#" },
        { title: "About", link: "#" },
        { title: "Contact Us", link: "#" },
      ],
    },
    {
      header: "Top 5 Property",
      links: [
        { title: "IDEO Sukhumvit - Bangna", link: "#" },
        { title: "BE BEST - Kaset - Ratchyothin", link: "#" },
        { title: "THE PEACH - Rama3", link: "#" },
        { title: "GOSET - Ratchada", link: "#" },
        { title: "XT Ekamai", link: "#" },
      ],
    },
    {
      header: "Top 5 BTS / MRT",
      links: [
        { title: "BTS Siam", link: "#" },
        { title: "BTS National Stadium", link: "#" },
        { title: "BTS Ekkamai", link: "#" },
        { title: "MRT Rama 9", link: "#" },
        { title: "MRT Sukhummvit", link: "#" },
      ],
    },
    {
      header: "Condo for Rent",
      links: [
        { title: "Less than ฿5,000", link: "#" },
        { title: "฿5,000 - ฿10,000", link: "#" },
        { title: "฿10,000 - ฿20,000", link: "#" },
        { title: "฿20,000 - ฿30,000", link: "#" },
        { title: "More than ฿30,000", link: "#" },
      ],
    },
  ];
  return (
    <div className="bg-brand h-[276px] flex justify-center">
      <div className="flex flex-row justify-between pt-12	px-48	pb-8">
        {footerMainLinks.map((item, index) => (
          <FooterWebsiteLink
            key={index}
            header={item.header}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterMain;
