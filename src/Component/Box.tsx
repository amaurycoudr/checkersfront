import classNames from "classnames";
import React, { FC } from "react";

interface BoxProps {
  isBlackBox: boolean;
  isHighlighted: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
const Box: FC<BoxProps> = ({
  isBlackBox,
  children,
  onClick,
  isHighlighted,
  disabled,
}) => (
  <button
    className={classNames(
      "flex-1 flex items-center justify-center relative",
      "group outline-none bg-gradient-to-b focus:z-10r",
      isBlackBox ? "bg-gray-800" : "bg-gray-100",
      {
        "transition-all duration-500 ring-4 ring-offset-2 rounded ring-rose-400 z-20":
          isHighlighted,
      },
      "focus:from-cyan-200 focus:to-teal-200",
      "active:from-cyan-200 active:to-teal-200"
    )}
    {...{ disabled, onClick }}
  >
    <div
      className={classNames(
        "flex items-center p-[5%] justify-center  rounded w-[90%] h-[90%] transition-all duration-500 ",
        "group-active:bg-gradient-to-br group-active:from-teal-200 group-active:to-teal-200",
        "group-focus:shadow-2xl",
        isBlackBox ? "group-focus:bg-gray-900" : "group-focus:bg-gray-100",
        !isBlackBox ? "group-focus:bg-gray-100" : "group-focus:bg-gray-900"
      )}
    >
      {children}
    </div>
  </button>
);

export default Box;
