import React from "react";
import { useState } from "react";
import emailJs from "@emailjs/browser"
import "./contact.css"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')  

    const sendEmail = (e) => {
      e.preventDefault()
      
      const templateParams = {
        from_name: name,
        message: message,
        email: email
      }
      emailJs.send("service_2595wii", "template_qbgxub9", templateParams, "A61rSIcRq0FpdBbcs")
      .then((res) => {
        console.log("email enviado ", res.status, res.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log("ERRO ", err)
      })

    }
  return (
    <div className="contact">
      <h1>Fale Comigo</h1>
      <form onSubmit={sendEmail}>
  <label class="label">Name</label>
    <input class="input" required type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
  <label class="label">Email</label>
    <input class="input is-danger" required type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
    <label>Mensagem</label>
    <textarea placeholder="deixe sua mensagem" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
    <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact
