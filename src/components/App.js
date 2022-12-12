import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assentos from "../pages/Assentos";
import Home from "../pages/Home";
import Sessoes from "../pages/Sessoes";
import Sucesso from "../pages/Sucesso";
import NavBar from "./NavBar";
import { useState } from "react";


function App() {
  const [infos, setInfos] = useState({})

  return (    
    <>
     <NavBar/>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sessoes/:idFilme" element={<Sessoes infos={infos} setInfos={setInfos} />} />
     <Route path="/assentos/:idSessao" element={<Assentos infos={infos} setInfos={setInfos} />} />
     <Route path="/sucesso" element={<Sucesso infos={infos} setInfos={setInfos}/>} />    
     </Routes>  
     </BrowserRouter> 
     </>
  )
}

export default App;

