import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Documentario } from "./pages/Documentario";
export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/documentario" element={<Documentario/>} />
          </Routes>
      </BrowserRouter>;
}