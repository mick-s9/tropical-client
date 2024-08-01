import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logoTuga from '../resources/images/logo-tuga.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoTuga} alt="Logo" />
        
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar por profissionais" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <nav className="navigation">
        <a href="#como-funciona">Como Funciona?</a>
        <a href="#cadastre-se">Cadastre-se</a>
        <a href="#entrar">Entrar</a>
        <button className="publish-project-button">PUBLIQUE UM PROJETO</button>
      </nav>
    </header>
  );
};

export default Header;
