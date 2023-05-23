import { styled } from "styled-components";

export const NavBarMobile = styled.nav`
  display: none;
  position: fixed;
  min-height: 100vh;
  width: 100%;
  backdrop-filter: blur(6px);
  background-color: #3d535f63;
  transition: all .3s ease-in-out;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  bottom: ${(props) => (props.isVisible ? 0 : "-100%")};
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 98;
  
  

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 50px;
    
  }

  li {
    
    a {
      font-size: 1.6rem;
      color: #FFF;
      letter-spacing: 2px;
      text-decoration: none;
      text-transform: capitalize;
      transition: 0.4s;

      &:hover {
        font-size: 1.6rem;
        color: red;
      }
    }
  }

  @media(max-width: 900px) {
    display: flex;
  }

`