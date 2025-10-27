// src/layouts/MainLayout.jsx
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayouts() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Di sini halaman anak-anak akan dirender */}
    </>
  );
}
