import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Portfólio</h1>
        <p>Bem-vindo ao meu portfólio! Siga-me nas redes sociais:</p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/paulo-levi-oliveira-matias-6524801ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/PauloMatiasxvs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

