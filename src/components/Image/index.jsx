import React from "react";
import { styled, keyframes } from "styled-components";

import BackgroundImage from "../../assets/sem_fundo.png"

export default function Image() {


  const animateUser = keyframes`
    50% {
    right: 30px;
    top: -250px;
  }
  `
  
  const Image = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      height: auto;
      width: 350px;  
      right: 50px;
      top: -260px;
      animation: ${animateUser} 4s linear infinite;
}
  
  `
  
  
  return(
    <>
    <Image><img src={BackgroundImage}/></Image>
    </>
  )
}