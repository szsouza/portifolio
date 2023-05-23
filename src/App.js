import React from "react";
<<<<<<< HEAD
import NavBar from "./components/Header";
=======
import Cabecalho from "./components/cabeçalho"
>>>>>>> 37b2484bb576bf45f387076ea8f544dd60a26c05
import Home from "./pages/Home";
import About from "./pages/about";
import Skils from "./pages/skils";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
<<<<<<< HEAD

=======
import "./styles/global.css"
>>>>>>> 37b2484bb576bf45f387076ea8f544dd60a26c05



const App = () => {
  return (
  <>
    <div className="container"> 
<<<<<<< HEAD
      <NavBar/>
=======
      <Cabecalho/>
>>>>>>> 37b2484bb576bf45f387076ea8f544dd60a26c05
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