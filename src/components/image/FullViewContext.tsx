import { createContext, useContext, useState, type ReactNode } from "react";

interface FullViewContextType {
  viewingImage: string | null;
  openImage: (src: string) => void;
  closeImage: () => void;
}

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

interface FullViewProviderProps {
  children: ReactNode;
}

export const FullViewProvider = ({ children }: FullViewProviderProps) => {
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  console.log(viewingImage);

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
