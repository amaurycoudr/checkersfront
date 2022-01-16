import classNames from "classnames";
import React, { FC } from "react";
import { ClassProps } from "types/helper";
type FontColor = "dark" | "medium" | "light" | "green" | "none";
type Font = FC<ClassProps & { color?: FontColor }>;

export const textColors: Record<FontColor, string> = {
  dark: "text-slate-800 dark:text-slate-50",
  medium: "text-slate-600 dark:text-slate-200",
  light: "text-slate-400 dark:text-slate-300",
  green: "text-teal-400 dark:text-teal-600",
  none: "",
};

const textColor = (color: FontColor = "dark") => color && textColors[color];
const H5: Font = ({ className, children, color }) => {
  return (
    <h5 className={classNames(textColor(color), className)}>{children}</h5>
  );
};

const H1: Font = ({ className, children, color }) => {
  return (
    <h1 className={classNames(className, textColor(color))}>{children}</h1>
  );
};

const P: Font = ({ children, className, color }) => {
  return <p className={classNames(className, textColor(color))}>{children}</p>;
};

const Typos = { H5, H1, P };

export default Typos;
