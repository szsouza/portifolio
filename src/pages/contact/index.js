import React from "react";
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <h1>Fale Comigo</h1>
      <form action="#" method="GET">
  <label class="label">Name</label>
    <input class="input" type="text" placeholder="Text input"/>
  <label class="label">Email</label>
    <input class="input is-danger" type="email" placeholder="Email input" />
    <label>Mensagem</label>
    <textarea placeholder="deixe sua mensagem"></textarea>
    <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
