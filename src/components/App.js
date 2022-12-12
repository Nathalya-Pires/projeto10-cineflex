import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assentos from "../pages/Assentos";
import Home from "../pages/Home";
import Sessoes from "../pages/Sessoes";
import Sucesso from "../pages/Sucesso";
import NavBar from "./NavBar";
import { useState } from "react";


function App() {
  const [data, setData] = useState(undefined)

  return (    
    <>
     <NavBar/>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sessoes/:idFilme" element={<Sessoes data={data} setData={setData}/>} />
     <Route path="/assentos/:idSessao" element={<Assentos data={data}/>} />
     <Route path="/sucesso" element={<Sucesso data={data}/>} />    
     </Routes>  
     </BrowserRouter> 
     </>
  )
}

export default App;

