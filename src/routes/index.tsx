import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayouts";
import Home from "@/pages/Home";
import Upload from "@/pages/Upload";
import Tutorial from "@/pages/Tutorial";
import Result from "@/pages/Result";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "upload", element: <Upload /> },
      { path: "tutorial", element: <Tutorial /> },
      { path: "result", element: <Result /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
