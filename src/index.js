<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>
);

=======
import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.querySelector("#root"))

root.render(<App />)
>>>>>>> 37b2484bb576bf45f387076ea8f544dd60a26c05
