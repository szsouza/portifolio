import React from "react";
// import GlobalStyle from "./styles/Global";
import Cabecalho from "./components/cabeçalho"
import Home from "./pages/Home";
import About from "./pages/about";
import "./styles/global.css"

const App = () => {
  return (
  <>
    <div className="container"> 
      <Cabecalho/>
      <Home/>
      <About/>
    </div>
  </>
  )
}

export default App