import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
interface ToggleDarkProps {
  isDark: boolean;
  toggleDark: (isDark: boolean) => void;
}
const ToggleDark: FC<ToggleDarkProps> = ({ isDark, toggleDark }) => {
  const { t } = useTranslation();

  return (
    <Switch
      checked={isDark}
      onChange={toggleDark}
      className={`${
        isDark ? "bg-slate-600" : "bg-slate-200"
      } relative inline-flex items-center h-6 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 w-11 duration-300 transition-all`}
    >
      <span className="sr-only">{t("navBar.switchDark")}</span>
      <SunIcon className="w-4 h-4 z-10 absolute left-1 text-yellow-300 dark:text-slate-600 duration-300 transition-all " />
      <MoonIcon className="w-4 h-4 z-10 absolute right-1 dark:text-slate-300 text-slate-200 duration-300 transition-all " />
      <span
        className={`${
          isDark ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white duration-300 transition-all rounded-full`}
      />
    </Switch>
  );
};

export default ToggleDark;
