import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ClassProps } from "types/helper";
type LinkButtonStyle = "primary" | "secondary";
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: LinkButtonStyle;
  iconRight?: ReactNode;
}

interface LinkButtonProps {
  type: LinkButtonStyle;
  to: string;
  iconRight?: ReactNode;
}

const classNameButtonStyles: Record<LinkButtonStyle, string> = {
  primary:
    "bg-teal-400 text-slate-50 border-teal-400 hover:bg-slate-50 dark:hover:bg-slate-900  hover:text-teal-400",
  secondary:
    " bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-500 hover:border-teal-400  dark:hover:text-teal-400 dark:hover:border-teal-400  hover:text-teal-400",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & ClassProps>(
  (props, ref) => {
    const { children, iconRight, type, ...otherPops } = props;
    return (
      <button
        ref={ref}
        {...otherPops}
        className={classNames(
          " px-8 py-2 active:bg-teal-200  font-medium justify-center rounded-md border-2 outline-none  focus:ring-2 focus:ring-teal-500 transition-all duration-500 flex items-center",
          classNameButtonStyles[type],
          props.className
        )}
      >
        {children}
        {!!iconRight && iconRight}
      </button>
    );
  }
);

export const LinkButton: FC<LinkButtonProps & ClassProps> = ({
  children,
  to,
  type,
  iconRight,
  className,
}) => {
  return (
    <Link
      to={to}
      className={classNames(
        " px-8 py-2 active:bg-teal-200  font-medium rounded-md border-2 outline-none  focus:ring-2 focus:ring-teal-500 transition-all duration-500 flex items-center",
        classNameButtonStyles[type],
        className
      )}
    >
      {children}
      {!!iconRight && iconRight}
    </Link>
  );
};
export default Button;
