import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import logoGitHubWhite from "assets/logo-github-white.png";
import logoGitHub from "assets/logo-github.png";
import Typos from "Components/core/Typos";
import LogoBoxes from "Components/LogoBoxes";
import ToggleDark from "Components/ToggleDark";
import useDarkMode from "hooks/useDarkMode";

export default function NavBar() {
  const { t } = useTranslation();
  const [mode, setMode] = useDarkMode();
  const isDark = mode === "dark-theme";
  const toggleDark = () => {
    setMode(isDark ? "light-theme" : "dark-theme");
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 transition-all duration-300 font-inter flex flex-col h-[100vh] overflow-hidden  w-[100vw]">
      <header className="sticky top-0 z-30  flex items-center transition-all duration-300  justify-between px-4 shadow-sm dark:shadow-slate-700  h-header min-h-[72px] ">
        <Link
          className="flex items-center relative focus:ring-2  rounded-md  ring-teal-500"
          to="/"
        >
          <LogoBoxes />
          <Typos.P color="green" className="ml-2 select-none font-lato text-xl">
            {t("base.name")}
          </Typos.P>
        </Link>
        <div className="flex items-center">
          <ToggleDark {...{ isDark, toggleDark }} />
          <a
            target="_blank"
            className="ml-6"
            rel="noopener noreferrer"
            href="https://github.com/amaurycoudr/checkers"
          >
            <img
              alt="git hub logo"
              className="w-8 h-8"
              src={isDark ? logoGitHubWhite : logoGitHub}
            />
          </a>
        </div>
      </header>
      <main className="-mt-header flex flex-1">
        <Outlet />
      </main>
    </div>
  );
}
