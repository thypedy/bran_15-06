import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.JSX";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login"
import TelaPrincipal from "./pages/TelaPrincipal"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/telaPrincipal" element={<TelaPrincipal/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
