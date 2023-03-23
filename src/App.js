import React from "react";
import Cabecalho from "./components/cabeçalho"
import Home from "./pages/Home";
import About from "./pages/about";
import Skils from "./pages/skils";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./styles/global.css"



const App = () => {
  return (
  <>
    <div className="container"> 
      <Cabecalho/>
      <Home/>
      <About/>
      <Skils/>
      <Projects/>
      <Contact/>
    </div>
  </>
  )
}

export default App