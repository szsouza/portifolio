import React, {useEffect, useState} from "react";
import api from "../../services/api";
import Button from "../../components/Button"
import { Container, Card } from "./style.js";

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
    <Container>
      {project.map((item) => {
        return (
        <Card >
        
          <span>{item.name}</span>
          <a href={item.clone_url} target="_blank"><button className="btns-projects">link do projeto</button></a>
          <a href={item.homepage} target="_blank"><button className="btns-projects">link do site</button></a>
      
      </Card>
        )
      })}
    </Container>
  )
}

export default Projects 