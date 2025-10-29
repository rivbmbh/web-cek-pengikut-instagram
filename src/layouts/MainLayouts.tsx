// src/layouts/MainLayout.jsx
import { FullViewProvider } from "@/components/image/FullViewContext";
import FullViewImage from "@/components/image/FullViewImage";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayouts() {
  return (
    <>
      <FullViewProvider>
        <Navbar />
        <FullViewImage />
        <Outlet /> {/* Di sini halaman anak-anak akan dirender */}
      </FullViewProvider>
    </>
  );
}
