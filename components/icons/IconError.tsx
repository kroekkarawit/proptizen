import React from "react";
interface IconProps {
  className?: string;
}
const IconError: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z"
        fill="#F57F17"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.04167C10.3452 6.04167 10.625 6.32149 10.625 6.66667V10C10.625 10.3452 10.3452 10.625 10 10.625C9.65482 10.625 9.375 10.3452 9.375 10V6.66667C9.375 6.32149 9.65482 6.04167 10 6.04167Z"
        fill="#F57F17"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.3749 13.3333C9.3749 12.9882 9.65472 12.7083 9.9999 12.7083H10.0082C10.3534 12.7083 10.6332 12.9882 10.6332 13.3333C10.6332 13.6785 10.3534 13.9583 10.0082 13.9583H9.9999C9.65472 13.9583 9.3749 13.6785 9.3749 13.3333Z"
        fill="#F57F17"
      />
    </svg>
  );
};

export default IconError;
