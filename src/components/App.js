import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assentos from "../pages/Assentos";
import Home from "../pages/Home";
import Sessoes from "../pages/Sessoes";
import Sucesso from "../pages/Sucesso";
import NavBar from "./NavBar";


function App() {
  return (    
    <>
     <NavBar/>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sessoes/:idFilme" element={<Sessoes/>} />
     <Route path="/assentos/:idSessao" element={<Assentos/>} />
     <Route path="/sucesso" element={<Sucesso/>} />    
     </Routes>  
     </BrowserRouter> 
     </>
  )
}

export default App;

