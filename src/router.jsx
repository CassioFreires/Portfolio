import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from './pages/Contato';
import Projetos from './pages/Projetos';
import Page404 from "./pages/Page404";
import PageBase from './pages/PageBase';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Home />}/>
                    <Route path="/sobre" element={<Sobre />}/>
                    <Route path="/projetos" element={<Projetos />}/>
                    <Route path="/contato" element={<Contato />}/>
                    <Route path="*" element={<Page404 />}/>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}