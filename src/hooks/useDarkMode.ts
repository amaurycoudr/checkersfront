import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
type Theme = "dark-theme" | "light-theme";

const useDarkMode = () => {
  const [mode, setMode] = useLocalStorage<Theme>("theme");
  console.log(mode);

  useEffect(() => {
    const className = "dark";
    const isDarkMode = mode === "dark-theme";
    const bodyClass = window.document.body.classList;

    isDarkMode ? bodyClass.add(className) : bodyClass.remove(className);
  }, [mode]);

  return [mode, setMode] as const;
};

export default useDarkMode;
