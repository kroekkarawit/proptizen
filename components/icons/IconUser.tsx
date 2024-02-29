import React from "react";
interface IconProps {
  className?: string;
}
const IconUser: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.75C10.2051 3.75 8.75 5.20507 8.75 7C8.75 8.79493 10.2051 10.25 12 10.25C13.7949 10.25 15.25 8.79493 15.25 7C15.25 5.20507 13.7949 3.75 12 3.75ZM7.25 7C7.25 4.37665 9.37665 2.25 12 2.25C14.6234 2.25 16.75 4.37665 16.75 7C16.75 9.62335 14.6234 11.75 12 11.75C9.37665 11.75 7.25 9.62335 7.25 7Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 15.75C8.20507 15.75 6.75 17.2051 6.75 19V21C6.75 21.4142 6.41421 21.75 6 21.75C5.58579 21.75 5.25 21.4142 5.25 21V19C5.25 16.3766 7.37665 14.25 10 14.25H14C16.6234 14.25 18.75 16.3766 18.75 19V21C18.75 21.4142 18.4142 21.75 18 21.75C17.5858 21.75 17.25 21.4142 17.25 21V19C17.25 17.2051 15.7949 15.75 14 15.75H10Z"
        fill="#212121"
      />
    </svg>
  );
};

export default IconUser;
