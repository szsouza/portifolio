import React from "react";
import "../../styles/global.css"
import "./Home.css"
import TypingEffect from "../../components/effects/typingEffect";
import imgagemEscolhida from '../../components/imgs/sem_fundo.png'


const Home = () => {
  return (

    
    
      <div className="wraper">
        <div className="cols cols0">
          <span className="topline">Hello</span>
          <h1>I'm <span className="multitext" ><TypingEffect/> </span></h1>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nam totam obcaecati quia reiciendis, iste, ex amet aspernatur molestiae non nostrum dolor! Voluptatum amet saepe ad rem!</p> */}
          <div className="btns">
            <button>download CV</button>
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