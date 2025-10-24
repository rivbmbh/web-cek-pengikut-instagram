import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Upload from "@/pages/Upload";
// import Result from "@/pages/Result";
// import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/upload", element: <Upload /> },
  // { path: "/tutorial", element: <Tutorial /> },
  //   { path: "/result", element: <Result /> },
  //   { path: "*", element: <NotFound /> },
]);
