import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import DetailsTask from "./pages/DetailsTaks.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/to-do-list-react">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<DetailsTask />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
