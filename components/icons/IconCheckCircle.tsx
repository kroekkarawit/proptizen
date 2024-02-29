import React from "react";
interface IconProps {
  className?: string;
}
const IconCheckCircle: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 7.5C14.8873 7.5 7.5 14.8873 7.5 24C7.5 33.1127 14.8873 40.5 24 40.5C33.1127 40.5 40.5 33.1127 40.5 24C40.5 14.8873 33.1127 7.5 24 7.5ZM4.5 24C4.5 13.2304 13.2304 4.5 24 4.5C34.7696 4.5 43.5 13.2304 43.5 24C43.5 34.7696 34.7696 43.5 24 43.5C13.2304 43.5 4.5 34.7696 4.5 24Z"
        fill="#33691E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.0607 18.9393C31.6464 19.5251 31.6464 20.4749 31.0607 21.0607L23.0607 29.0607C22.4749 29.6464 21.5251 29.6464 20.9393 29.0607L16.9393 25.0607C16.3536 24.4749 16.3536 23.5251 16.9393 22.9393C17.5251 22.3536 18.4749 22.3536 19.0607 22.9393L22 25.8787L28.9393 18.9393C29.5251 18.3536 30.4749 18.3536 31.0607 18.9393Z"
        fill="#33691E"
      />
    </svg>
  );
};

export default IconCheckCircle;
