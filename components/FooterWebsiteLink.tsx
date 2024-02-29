import React from "react";

interface ILink {
  title: string;
  link: string;
}

interface IFooterWebsiteLinkProps {
  header: string | null;
  links: ILink[] | null;
}

const FooterWebsiteLink: React.FC<IFooterWebsiteLinkProps> = ({
  header,
  links,
}) => {
  return (
    <div className="flex flex-col w-[264px]">
      <div className="text-[#FFFCFA] font-bold	text-base mb-3	">{header}</div>
      <div className="flex flex-col gap-2 ">
        {links?.map((item, index) => (
          <div key={index} className="text-sm font-medium text-[#FFFCFA] ">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterWebsiteLink;
