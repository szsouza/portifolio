import React, {useState} from "react";
import { ButtonContainer, Logo, NavBarContainer, NavItens, Link, GithubIcon, InstagramIcon, LinkedInIcon } from "./style";
import ContainerMobile from "../NavBarMobile";

import { IoClose, IoMenu} from "react-icons/io5"

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      
        <ButtonContainer>
          {isVisible ? (
            <IoClose onClick={() => setIsVisible(false)}/>
          ) : (
            <IoMenu onClick={() => setIsVisible(true)}/>
          )}
        </ButtonContainer>
        
      <ContainerMobile 
      isVisible={isVisible}
      Home="Home"
      About="About"
      Skils="Skils"
      Projects="Projects"
      Contact="Contact"
      >
      </ContainerMobile>

      <NavBarContainer>
        <Logo>
          Portifolio<b>.</b>
        </Logo>


        <NavItens>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Skils</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </NavItens>

        <Link>
            <a href="https://github.com/szsouza"><GithubIcon/></a>
            <a href="https://www.instagram.com/szxsouza/"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/rodrigo-souza-44203a1b8/"><LinkedInIcon/></a>
        
        </Link>
      </NavBarContainer>

    </>
  )
}