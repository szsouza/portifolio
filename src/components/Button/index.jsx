import React from "react";
import { styled } from "styled-components";

export default function Button(props) {
  const Button = styled.a`
  cursor: pointer;
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  background-color: ${props => props.color};
  padding: 8px 14px;
  margin: 40px 5px;
  letter-spacing: 2px;
  text-transform: capitalize;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  text-decoration: none;
  
  &:hover {
  background-color: ${props => props.backgroundColor};
  transform: scale(103%);
  }
  
  `
  return (
  <>
    <Button backgroundColor={props.backgroundColor} download={props.download} href={props.href} color={props.color}>{props.name}</Button>
  </>
)
}