import React from "react";
import "./about.css"
import "../../styles/global.css"

const About = () => {
  return (
      <div className="About">
        <div className="about-me">
          <h1>sobre mim</h1>
          <p> Olá, meu nome é Vinicius e sou desenvolvedor web front end há 1 ano. Tenho experiência em HTML, CSS, JavaScript e a biblioteca React, utilizo o Styled-Components e também em ferramentas de controle de versão, como o Git.
      Gosto de aprender coisas novas, e sempre que posso aproveito para me manter atualizado sobre as últimas tendências e tecnologias no mercado de desenvolvimento web.
      Também sou proativo e gosto de trabalhar em equipe, pois acredito que todos podem aprender uns com os outros. Acredito também que a comunicação é a chave do sucesso para qualquer projeto, desenvolvendo e trabalhando em conjunto, pois somos mais fortes juntos.</p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkb2luvkctLHNiU85GVm2fypXnYfyGkYHGr27DphG&s" alt="teste"/>
      </div>
  )
}



export default About