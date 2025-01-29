import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Paulo Levi Matias</h1>
          <p>Desenvolvedor Fullstack | Analista de Sistemas</p>
          <p>Seja bem-vindo ao meu portfólio. Explore meus projetos e entre em contato!</p>
          
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/paulo-levi-oliveira-matias-6524801ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://github.com/PauloMatiasxvs"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub size={50} />
            </a>
          </div>
        </div>
      </header>
      <footer>
        <p>&copy; 2025 - Desenvolvido por Paulo Levi Matias</p>
      </footer>
    </div>
  );
}

export default App;
