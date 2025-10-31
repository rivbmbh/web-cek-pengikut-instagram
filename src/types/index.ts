import type { ReactNode } from "react";

export interface TutorialImagesProps {
  number: number | string; // Nomor urutan (misal: 1, 2, 3)
  imageUrl: string; // URL gambar
  caption: string; // Keterangan gambar
}

export interface ChangeLanguageContextType {
  isEnglish: boolean;
  changeToEnglish: () => void;
  changeToIndonesia: () => void;
}

export interface TableResultProps {
  table: any;
  message: string[];
  isEnglish: boolean;
}

export interface FullViewProviderProps {
  children: ReactNode;
}

export interface FullViewContextType {
  viewingImage: string | null;
  openImage: (src: string) => void;
  closeImage: () => void;
}

export interface ChangeLanguageProviderProps {
  children: ReactNode;
}

export interface FileInputProps {
  id: string;
}

export interface TableData {
  username: string;
  link?: string;
  time?: number;
}

export type Timestamp = number | string | undefined;

export interface SocialEntry {
  username: string;
  link?: string;
  time?: Timestamp;
}

export interface SearchingProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}
