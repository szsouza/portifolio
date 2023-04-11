import React from "react";
import "../../styles/global.css"
import "./Home.css"
import TypingEffect from "../../components/effects/typingEffect";
import imgagemEscolhida from '../../components/imgs/sem_fundo.png'
import curriculo from "../../components/curriculo/Curriculo.pdf"
import { render } from "react-dom";


const Home = () => {


  return (
    
      <div className="wraper" id="Home">
        <div className="cols cols0">
          <span className="topline">Hello</span>
          <h1>I'm <span className="multitext" ><TypingEffect/> </span></h1>
          <div className="btns">
            <a download={"curriculo"} href={curriculo}><button>download CV</button></a>
            <button>hire me</button>
          </div>
      
        </div>
        <div className="cols cols1">
          <div className="img-box">
          <img src={imgagemEscolhida }/>
          </div>
        </div>
      </div>
      
  )
}






export default Home