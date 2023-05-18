// eslint-disable-next-line

import React, { useRef } from "react";
import "./cabecalho.css"
import {FaBars, FaTimes} from "react-icons/fa"

const toogleBtnIcon = document.querySelector(".toogle_btn i")
const dropDownItens = document.querySelector(".dropDown_Items")
const nav = document.querySelector(".nav_Bar")



const Cabecalho = () => {
  
  const navRef = useRef()
  const listRef = useRef()
  const btnRef = useRef()
  const btnCloseRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle('open')
    listRef.current.classList.toggle('open')
    
    btnCloseRef.current.classList.remove('close-btn')
    btnRef.current.classList.toggle('close-btn')
    
    
  }

  const btnToggle = () => {
    navRef.current.classList.toggle('open')
    listRef.current.classList.toggle('open')

    btnCloseRef.current.classList.add('close-btn')
    btnRef.current.classList.toggle('close-btn')
  }

  return (
    <nav className="nav_Bar" ref={navRef}>
      <div className="logo">
        portifolio<b>.</b>
      </div>

      <ul className="navItems">
        <li><a href="#Home">home</a></li>
        <li><a href="#About">about</a></li>
        <li><a href="#Skils">skils</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact me</a></li>
      </ul>

      <div className="links">
        <a href="https://www.linkedin.com/in/rodrigo-souza-44203a1b8/" target={"_blank"}><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/szxsouza/" target={"_blank"}><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/szsouza" target={"_blank"}><i className="fab fa-github"></i></a>
      </div>

      <button className="nav_btn close-btn" ref={btnCloseRef} onClick={btnToggle}>
        <FaTimes/>
      </button>

      <button className="nav_btn" ref={btnRef} onClick={showNavBar}>
        <FaBars/>
      </button>
      




      <ul className="dropDown_Items" ref={listRef}>
      <li><a href="#Home">home</a></li>
        <li><a href="#About">about</a></li>
        <li><a href="#Skils">skils</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact me</a></li>
      </ul>
    </nav>
  )
  
  

}




export default Cabecalho
