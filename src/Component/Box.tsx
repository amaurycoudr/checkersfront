import React, { FC } from "react";

interface BoxProps {
  isBlackBox: boolean;
  isHighlighted: boolean;

  onClick: () => void;
}
const Box: FC<BoxProps> = ({
  isBlackBox,
  children,
  onClick,
  isHighlighted,
}) => (
  <button
    className={`
      flex-1
      flex
      items-center justify-center
      relative
      
      group
      bg-gradient-to-br
      ${isBlackBox ? "bg-gray-900" : "bg-gray-100"}
      focus:z-10
      ${
        isHighlighted &&
        " transition-all duration-500 ring-4 ring-offset-2 rounded ring-rose-400 z-20"
      }
      focus:from-emerald-200
      focus:to-teal-200
      active:from-emerald-200
      active:to-teal-200
      outline-none
        `}
    onClick={onClick}
    onFocus={onClick}
  >
    <div
      className={`flex items-center transition-all duration-500 
        ${isBlackBox ? "group-focus:bg-gray-900" : "group-focus:bg-gray-100"}
        group-focus:${
          isBlackBox ? "group-focus:bg-gray-100" : "group-focus:bg-gray-900"
        }
        p-[5%]
        group-focus:shadow-2xl
        group-active:bg-gradient-to-br
        group-active:from-emerald-200
        group-active:to-emerald-200
        justify-center  rounded w-[90%] h-[90%]`}
    >
      {children}
    </div>
  </button>
);

export default Box;
