import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./style/App.css";
import "./style/index.css";
import App from "./App.tsx";
import Navbar from "./components/layout/Navbar/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>
);
