import React, {useEffect, useState} from "react";
import api from "../../services/api";
import "./projects.css"

const Projects = () => {

  const [project,setProject] = useState([])

  useEffect(()=> {
    async function LoadProject(){
      await api
      .get("/repos")
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err))
    }

    LoadProject()

  }, [])
  

  return (
    <div className="Project" id="Projects">
      
      {project.map((item) => {
        return (
        <div key={item.id} className="card">
          <span>{item.name}</span>
          <a href={item.clone_url} target="_blank"><button className="btns-projects">link do projeto</button></a>
          <a href={item.homepage} target="_blank"><button className="btns-projects">link do site</button></a>
      </div>
        )
      })}
      {/* <div className="card">
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
      </div> */}
    </div>
  )
}

export default Projects 