import {styled, keyframes, } from "styled-components"


const object1 = keyframes`

50% {
    left: -13%;
    top: 41%;
  }

`

const object2 = keyframes`

50% {
    left: 35%;
    top: 10%;
  }

`

export const MainContainer = styled.div`

  display: flex;
  width: 100%;
  height: 700px;
  justify-content: center;
  align-items: center;
  padding: 0 10%;

  &::before {
    position: absolute;
    width: 300px;
    height: 300px;
    content: "";
    border-radius: 50%;
    left: -12%;
    top: 40%;
    background: linear-gradient(45deg, #BBD4CB, #EDF2F2);
    animation: ${object1} 6s linear infinite;
  }

  &::after {
    position: absolute;
    width: 200px;
    height: 200px;
    content: "";
    border-radius: 50%;
    left: 35%;
    top: 12%;
    background: linear-gradient(45deg, #BBD4CB, #EDF2F2);
    animation: ${object2} 6s linear infinite;
}


@media(max-width: 550px) {
  &::before {
    width: 200px;
    height: 200px;
  }
  &::after {
    width: 100px;
    height: 100px;
  }
  .topline {
    display: block;
    position: relative;
    font-size: 2rem;
    letter-spacing: 2px;
    color: #3d535f;
  }
  
  h1 {
    display: block;
    font-size: 1.5rem;
    font-weight: 900;
    color: #3d535f;
  }
  

  
  p {
    display: block;
    width: 90%;
    font-size: 1.2em;
    color: #4898b7;
  }
  
}



`

export const Cols = styled.div`
  width: 40%;


  @media(max-width: 900px) {
    display: none;
}
`

export const Cols0 = styled.div`
  width: 60%;
  z-index: 5;

  .topline {
  display: block;
  position: relative;
  font-size: 35px;
  letter-spacing: 5px;
  color: #3d535f;

  
}

.btns {
  display: flex;
    width: fit-content;
    position: relative;
    left: 150px;
    
  }

  @media(max-width: 1200px) {
  img {
    width: 300px;
  }
}

@media(max-width: 1100px) {
  img {
    width: 300px;
  }

  a {
    font-size: 17px;
  }
}

@media(max-width: 900px) {
    width: 100%;
  
}

@media(max-width: 550px) {
  .btns {
    width: fit-content;
    position: relative;
    left: 100px;
  }
  
  .btns a {
    font-size: 0.8rem;
  }
}


@media(max-width: 425px) {
  .btns {
    width: fit-content;
    position: relative;
    left: 10px;
  }
}

`

export const Text = styled.div`
  span {
    display: block;
    position: relative;
    font-size: 35px;
    letter-spacing: 5px;
    color: #3d535f;
  }

  h1 {
  display: block;
  font-size: 5em;
  font-weight: 900;
  color: #3d535f;
}

  h1 span p{
    color: #4898b7;
    text-transform: capitalize;
    font-size: 40px;
  }

  p {
  display: block;
  width: 90%;
  font-size: 1.2em;
  color: #3d535f;
}
`