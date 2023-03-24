import React from "react";
import "./cabecalho.css"

const Cabecalho = () => {
  return (
    <nav>
      <div className="logo">
        portifolio<b>.</b>
      </div>

      <ul className="navItems">
        <li><a href="">home</a></li>
        <li><a href="#About">about</a></li>
        <li><a href="">skils</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact me</a></li>
      </ul>

      <div className="links">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#" target={"_blank"}><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/szsouza"><i className="fab fa-github"></i></a>
      </div>
    </nav>
  )
}

export default Cabecalho