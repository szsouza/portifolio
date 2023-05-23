import styled from "styled-components"


export const ContactContainer = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10%;

  h1 {
    color: #3d535f;
  }
`

export const Form = styled.form`

  display: flex;
  font-size: 25px;
  flex-direction: column;
  width: 90%;
  background-color: #667c85a6;
  padding-top: 1rem;

  label {
    display: flex;
    margin-left: 10%;
    font-size: 1.3rem;
    font-weight: 600;
    color: #3D535F;
  }

  input, textarea {
    align-items: center;
    margin: auto;
  }

  input[type=text], input[type=email], textarea {
    padding: 0.6rem;
    margin-bottom: 1.4rem;
    border: 2px solid rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 0.9rem;
    width: 80%;
    transition: all .4s;
}

  input[type=text]:focus, input[type=email]:focus, textarea:focus {
    border-radius: 10px;
  }

  @media (max-width: 768px) {
   h1 {
    font-size: 3rem;
  }
}

  @media(max-width: 425px) {
   h1 {
    font-size: 2.2rem;
  }
}

`

export const Button =  styled.button`
    padding: 0.7rem 0.5rem;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-size: 1rem;
    border: none;
    cursor: pointer;
    height: 40px;
    width: 80%;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 40px auto;
    transition: all .4s;

    &:hover {
      background-color: #7f00ff;
      -webkit-transform: scale(103%);
      transform: scale(103%);
      color: #FFF;
    }
`