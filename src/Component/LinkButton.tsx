import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ClassProps } from "../type";
type LinkButtonStyle = "primary" | "secondary";
interface LinkButtonProps {
  type: LinkButtonStyle;
  to: string;

  IconRight?: FC<ClassProps>;
}

const linkButtonStyles: Record<LinkButtonStyle, string> = {
  primary:
    "bg-teal-400 text-slate-50 border-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900  hover:text-teal-400",
  secondary:
    " bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-500 hover:border-teal-400  dark:hover:text-teal-400 dark:hover:border-teal-400  hover:text-teal-400",
};

const LinkButton: FC<LinkButtonProps & ClassProps> = ({
  children,
  to,
  type,
  IconRight,
  className,
}) => {
  return (
    <Link
      to={to}
      className={classNames(
        " px-8 py-2 active:bg-teal-200  font-medium rounded-md border-2 outline-none  focus:ring-2 focus:ring-teal-500 transition-all duration-500 flex items-center",
        linkButtonStyles[type],
        className
      )}
    >
      {children}
      {!!IconRight && <IconRight className="h-5 w-5 ml-1 " />}
    </Link>
  );
};

export default LinkButton;
