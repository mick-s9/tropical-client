import React, { useContext, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import logoTuga from '../resources/images/logo-tuga.png';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User authentication status:', auth ? 'Logged in' : 'Not logged in');
  }, [auth]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoTuga} alt="Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar por profissionais" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <nav className="navigation">
        <Link to="/como-funciona">Como Funciona?</Link>
        <Link to="/cadastre-se">Cadastre-se</Link>
        {auth ? (
          <Link to="#" onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/login">Entrar</Link>
        )}
        <button className="publish-project-button">PUBLIQUE UM PROJETO</button>
      </nav>
    </header>
  );
};

export default Header;
