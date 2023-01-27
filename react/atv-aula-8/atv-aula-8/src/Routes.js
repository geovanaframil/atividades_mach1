import { Route, Routes } from "react-router-dom";
import Artigos from "./pages/Artigos";
import ArtigoDetalhe from "./pages/ArtigoDetalhe";

function Router() {
    return (
        <Routes>
            <Route path="" element={<Artigos/>}/>
            <Route path="artigos" element={<Artigos/>}/>
            <Route path="artigos/:nome" element={<ArtigoDetalhe/>}/>
        </Routes>
    )
}

export default Router