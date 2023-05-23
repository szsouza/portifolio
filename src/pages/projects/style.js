import styled from "styled-components";

export const Container = styled.div`
  min-height: 600px;
  width: 100%;
  padding: 5% 10%;
  background-color: #dfe3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

`

export const Card = styled.div`
  height: 250px;
  width: 250px;
  background-color: #C6DAD3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;

  span {
    color: #3D535F;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    margin: 0px 20px 0px 20px;
    font-size: 20px;
  }

  .btns-projects {
    font-size: .6rem;
    height: 40px;
    margin: 12px;
    padding: 0;
    width: 122px;

    &:hover {    
    background-color: #7f00ff;
    -webkit-transform: scale(103%);
    transform: scale(103%);
  }
}



button {
    background-color: #3d535f;
    border: none;
    box-shadow: 0 15px 10px rgba(0,0,0,.4);
    color: #fff;
    cursor: pointer;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 2px;
    margin: 40px 5px;
    outline: none;
    padding: 8px 14px;
    text-transform: capitalize;
    transition: .4s;
}

`

