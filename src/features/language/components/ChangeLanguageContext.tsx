import type {
  ChangeLanguageContextType,
  ChangeLanguageProviderProps,
} from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const ChangeLanguageContext = createContext<
  ChangeLanguageContextType | undefined
>(undefined);

export const useChangeLanguage = (): ChangeLanguageContextType => {
  const context = useContext(ChangeLanguageContext);
  if (!context) {
    throw new Error(
      "useChangeLanguage must be used within an ChangeLanguageProvider"
    );
  }
  return context;
};

export const ChangeLanguageProvider = ({
  children,
}: ChangeLanguageProviderProps) => {
  const [isEnglish, setIsEnglish] = useState<boolean | false>(() => {
    const storedLang = localStorage.getItem("isEnglish");
    return storedLang ? JSON.parse(storedLang) : false; //default false/= ID (Indonesia)
  });

  useEffect(() => {
    localStorage.setItem("isEnglish", JSON.stringify(isEnglish));
  }, [isEnglish]);

  const changeToEnglish = () => {
    setIsEnglish(true);
  };
  const changeToIndonesia = () => {
    setIsEnglish(false);
  };

  return (
    <ChangeLanguageContext.Provider
      value={{ isEnglish, changeToEnglish, changeToIndonesia }}
    >
      {children}
    </ChangeLanguageContext.Provider>
  );
};
