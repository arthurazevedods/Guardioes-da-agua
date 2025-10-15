import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Documentario } from "./pages/Documentario";
import { Artigos } from "./pages/Artigos";
import { PaginaArtigo } from "./pages/PaginaArtigo";

export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/documentario" element={<Documentario/>} />
            <Route path="/artigos" element={<Artigos/>} />
            <Route path="/artigo" element={<PaginaArtigo />} />
          </Routes>
      </BrowserRouter>;
}