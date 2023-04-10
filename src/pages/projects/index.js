import React from "react";
import "./projects.css"

const Projects = () => {
  return (
    <div className="Project">
      <div className="card">
        <span>todo list</span>
        <a href="https://github.com/szsouza/todo-list"><button className="btns-projects">link do projeto</button></a>
        <button className="btns-projects">link do site</button>
      </div>
      <div className="card">
        <span>portifolio</span>
        <a href="https://github.com/szsouza/portifolio"><button className="btns-projects">link do projeto</button></a>
        <button className="btns-projects">link do site</button>
      </div><div className="card">
        <span>weather App</span>
        <a href="https://github.com/szsouza/Weather-App"><button className="btns-projects">link do projeto</button></a>
        <button className="btns-projects">link do site</button>
      </div><div className="card">
        <span>System Login</span>
        <a href="https://github.com/szsouza/System-Login"><button className="btns-projects">link do projeto</button></a>
        <button className="btns-projects">link do site</button>
      </div><div className="card">
        <span>Encurtador de Link</span>
        <a href="https://github.com/szsouza/Encurtador-de-Link"><button className="btns-projects">link do projeto</button></a>
        <button className="btns-projects">link do site</button>
      </div><div className="card">
        <span>Calculadora React</span>
        <a href="https://github.com/szsouza/Calculadora-React"><button className="btns-projects">link do projeto</button></a>
        <button className="btns-projects">link do site</button>
      </div>
    </div>
  )
}

export default Projects 