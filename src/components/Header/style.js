import { styled, css } from "styled-components";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export const ButtonContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  right: 10%;
  position: absolute;
  margin-top: 20px;
  padding: 0;
  background: none;
  background-color: transparent;
  box-shadow: none;
  z-index: 99;
  cursor: pointer;
  font-size: 30px;

  @media(max-width :900px){
    display: flex;
  }
`

export const NavBarContainer = styled.nav`

  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 80px;
  z-index: 111;
  line-height: 80px;
  position: fixed;
  overflow: hidden;
  background-color: #f3f5f8e6;
  z-index: 999;

  @media(max-width: 900px) {
    display: none;
  }

`

export const NavItens = styled.ul`
  display: flex;
  font-size: 1.3rem;
  color: black;
  transition: all .4s;
  gap: 25px;

  li {
    list-style: none;
    

    a {
      color: #3d535f;
      letter-spacing: 2px;
      text-decoration: none;
      text-transform: capitalize;
      transition: 0.5s;

      &:hover {
        font-size: 1.5rem;
        color: #86c4dd;
      }
    }
  }

`

export const Logo = styled.span`
  display: flex;
  font-size: 20px;
  font-weight: 800;
  color: #3d535f;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;

  b {
    font-size: 70px;
    color: #00d9ff;
  }

  @media(max-width: 900px) {
    display: none;
  }
`

export const Link = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  gap: 20px;

`

const SharedSvgStyle = css`
  font-size: 25px;
  transition: .4s ;
  color: #3D535F;
  margin-top: 30px;

  &:hover {
    color: #86c4dd;
    font-size: 1.8rem;
  }
`

export const GithubIcon = styled(FaGithub)`
  ${SharedSvgStyle}
`
export const InstagramIcon = styled(FaInstagram)`
  ${SharedSvgStyle}
`
export const LinkedInIcon = styled(FaLinkedin)`
  ${SharedSvgStyle}
`