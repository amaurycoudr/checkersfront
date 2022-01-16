import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
type Theme = "dark-theme" | "light-theme";

const useDarkMode = () => {
  const [mode, setMode] = useLocalStorage<Theme>("theme");

  useEffect(() => {
    const className = "dark";
    const isDarkMode = mode === "dark-theme";
    const htmlClass = window.document.getElementById("html")?.classList;
    const bodyClass = window.document.body.classList;

    isDarkMode ? bodyClass.add(className) : bodyClass.remove(className);
    isDarkMode ? htmlClass?.add(className) : htmlClass?.remove(className);
  }, [mode]);

  return [mode, setMode] as const;
};

export default useDarkMode;
