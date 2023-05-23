import React from "react";
import { NavBarMobile } from "./style";


export default function ContainerMobile(props) {

  return (
    <>
      <NavBarMobile isVisible={props.isVisible}>
        <ul>
          <li><a href={`#teste`} target="_blank"> {props.Home}</a></li>
          <li><a href={``} target="_blank" rel="noopener noreferrer"> {props.About}</a></li>
          <li><a href={``} target="_blank" rel="noopener noreferrer"> {props.Skils}</a></li>
          <li><a href={``} target="_blank" rel="noopener noreferrer"> {props.Projects}</a></li>
          <li><a href={``} target="_blank" rel="noopener noreferrer"> {props.Contact}</a></li>
        </ul>

      </NavBarMobile>

      
    
    </>
  )
} 