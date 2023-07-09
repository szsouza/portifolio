import React from "react";
import { MainContainer, Container } from "./style";

const About = () => {
  return (
    <MainContainer id="About">
      <Container>
        <h1>sobre mim</h1>
        <p>
          {" "}
          Olá, meu nome é Rodrigo e sou desenvolvedor full-stack. Tenho
          experiência em <span>HTML</span>, <span>CSS</span> e os Frameworks{" "}
          <span>Bootstrap</span> e <span>Bulma</span>, <span>JavaScript</span> e
          a biblioteca <span>React</span> e <span>Php</span> e também em
          ferramentas de controle de versão, como o Git. adoro aprender coisas
          novas e gosto de estar atualizado sobre as novas tecnologias Também
          sou proativo e gosto de trabalhar em equipe, pois proporciona um
          grande aprendizado e também ajuda a lidar com tarefas complicadas com
          uma visão maior.
        </p>
      </Container>
    </MainContainer>
  );
};

export default About;
