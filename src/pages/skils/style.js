import styled from "styled-components"



export const MainContainer = styled.div`

  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: 100%;
  justify-content: center;

  span {
    font-size: 20px;
  }




`

export const Container = styled.div`
  background-color: #C6DAD3;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 20px;
  flex-wrap: wrap;

`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  justify-content: center;
  padding: 15px;
  transition: 0.4s;

  &:hover {
    transform: scale(115%);
  }
  span{
    font-size: 1rem;
    color: #3D535F;
    font-weight: 600;
  }

  .next {
    height: 10px;
  }

`

export const Icon = styled.svg`
  fill: #3D535F;
  transition: 0.4s;
  height: 2.5rem;

  &:hover {
    fill: ${props => props.color};
  }
`

