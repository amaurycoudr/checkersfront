import { useEffect, useState } from "react";

const useLocalStorage = <T extends string>(key: string) => {
  const [currentValue, setCurrentValue] = useState<T | null>(
    () => localStorage.getItem(key) as T | null
  );

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setCurrentValue(e.newValue as T);
      }
    };

    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("storage", handler);
    };
  });

  useEffect(() => {
    localStorage.setItem(key, currentValue as string);
  }, [key, currentValue]);

  return [currentValue, setCurrentValue] as const;
};
export default useLocalStorage;
