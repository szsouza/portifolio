import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  padding: 4% 10%;
  background-color: #dfe3e3;
  text-align: justify;

  h1 {
    color: #3d535f;
  }

  p {
    text-transform: none;

    span {
      color: #4B98B7;
      font-weight: 700;
    }
  }

  @media(max-width: 425px) {
  h1 {
    font-size: 2.3rem;
  }

 p {
    font-size: 1rem;
  }
}

`

export const Container = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`