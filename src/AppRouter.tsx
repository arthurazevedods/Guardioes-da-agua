import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Documentario } from "./pages/Documentario";
import { Artigos } from "./pages/Artigos";
import { PaginaArtigo } from "./pages/PaginaArtigo";
import { SobreNos } from "./pages/SobreNos";

export function AppRouter() {
  return <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/documentarios" element={<Documentario/>} />
            <Route path="/artigos" element={<Artigos/>} />
            <Route path="/artigo/:id" element={<PaginaArtigo />} />
            <Route path="/sobrenos" element={<SobreNos />} />
          </Routes>
      </BrowserRouter>;
}