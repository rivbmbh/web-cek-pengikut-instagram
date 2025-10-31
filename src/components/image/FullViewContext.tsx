import type { FullViewContextType, FullViewProviderProps } from "@/types";
import { createContext, useContext, useState } from "react";

const FullViewContext = createContext<FullViewContextType | undefined>(
  undefined
);

export const useImageFullView = (): FullViewContextType => {
  const context = useContext(FullViewContext);
  if (!context) {
    throw new Error("useFullView must be used within an ImageFullViewProvider");
  }
  return context;
};

export const FullViewProvider = ({ children }: FullViewProviderProps) => {
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  // console.log(viewingImage);

  const openImage = (src: string) => {
    console.log(src);
    setViewingImage(src!);
  };

  const closeImage = () => {
    setViewingImage(null);
  };

  return (
    <FullViewContext.Provider value={{ viewingImage, openImage, closeImage }}>
      {children}
    </FullViewContext.Provider>
  );
};
