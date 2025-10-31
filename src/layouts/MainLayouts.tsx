// src/layouts/MainLayout.jsx
import { FullViewProvider } from "@/components/image/FullViewContext";
import FullViewImage from "@/components/image/FullViewImage";
import Navbar from "@/components/layout/Navbar";
import { ChangeLanguageProvider } from "@/features/language/components/ChangeLanguageContext";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export default function MainLayouts() {
  return (
    <>
      <HelmetProvider>
        <FullViewProvider>
          <ChangeLanguageProvider>
            <Navbar />
            <FullViewImage />
            <Outlet /> {/* Di sini halaman anak-anak akan dirender */}
          </ChangeLanguageProvider>
        </FullViewProvider>
      </HelmetProvider>
    </>
  );
}
