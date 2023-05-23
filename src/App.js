import React from "react";
import NavBar from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import Skils from "./pages/skils";
import Projects from "./pages/projects";
import Contact from "./pages/contact";




const App = () => {
  return (
  <>
    <div className="container"> 
      <NavBar/>
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