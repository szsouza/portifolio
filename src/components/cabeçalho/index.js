import React from "react";
import "./cabecalho.css"

const Cabecalho = () => {
  return (
    <nav>
      <div className="logo">
        folio<b>.</b>
      </div>

      <ul className="navItems">
        <li><a href="">home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">skils</a></li>
        <li><a href="">blog</a></li>
      </ul>

      <div className="links">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#" target={"_blank"}><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/szsouza" target={"_blank"}><i className="fab fa-github"></i></a>
      </div>
    </nav>
  )
}

export default Cabecalho